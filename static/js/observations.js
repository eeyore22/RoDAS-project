'use strict';
(() => {
  const cases = window.PROJECT_DATA.cases;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const timestamp = t => `${t > 0 ? '+' : ''}${t.toFixed(1)} s`;
  function chart(c,index) {
    const width=760,height=155,left=47,right=18,top=22,bottom=29;
    const values=c.slots.map(s=>s.linear_vel_mps),minimum=Math.min(-0.1,...values),maximum=Math.max(0.35,...values)*1.1;
    const x=t=>left+(t+2)/8*(width-left-right),y=v=>top+(maximum-v)/(maximum-minimum)*(height-top-bottom);
    const coordinates=c.slots.map(s=>`${x(s.offset_sec)},${y(s.linear_vel_mps)}`).join(' ');
    const labels=[-2,0,2,4,6].map(t=>`<text x="${x(t)}" y="${height-9}" text-anchor="middle">${timestamp(t)}</text>`).join('');
    const points=c.slots.map((s,i)=>`<circle cx="${x(s.offset_sec)}" cy="${y(s.linear_vel_mps)}" r="${i===index?4.5:2}" fill="${i===index?'#ad6239':'#555'}"/>`).join('');
    return `<svg class="observation-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Recorded linear velocity for ${escape(c.case_id)}. Blue shading marks model observations and beige shading marks future annotation context."><rect width="${width}" height="${height}" fill="white"/><rect x="${x(-2)}" y="${top}" width="${x(0)-x(-2)}" height="${height-top-bottom}" fill="#edf3f5"/><rect x="${x(0)}" y="${top}" width="${x(6)-x(0)}" height="${height-top-bottom}" fill="#faf2e9"/><line x1="${left}" y1="${y(0)}" x2="${width-right}" y2="${y(0)}" stroke="#aaa" stroke-width=".7"/><line x1="${x(0)}" y1="${top}" x2="${x(0)}" y2="${height-bottom}" stroke="#999" stroke-dasharray="3 4"/><polyline points="${coordinates}" stroke="#555" stroke-width="1.3" fill="none"/>${points}<g font-family="Arial,Helvetica,sans-serif" font-size="10" fill="#666">${labels}<text x="${left-7}" y="${y(0)+3}" text-anchor="end">0</text><text x="${left-7}" y="${top+4}" text-anchor="end">${maximum.toFixed(2)}</text><text x="${left}" y="12">Linear velocity (m/s)</text><text x="${width-right}" y="12" text-anchor="end">Past/keyframe inputs | Future annotation context</text></g></svg>`;
  }
  for (const host of document.querySelectorAll('.observation-viewer')) {
    const c=cases[host.dataset.case],slider=host.querySelector('input');
    function update() {
      const index=Number(slider.value),s=c.slots[index],future=s.offset_sec>0;
      const frame=host.querySelector('.observation-frame img');frame.src=s.image_url;frame.alt=`${c.title}, t = ${timestamp(s.offset_sec)}`;
      host.querySelector('[data-time]').textContent=`t = ${timestamp(s.offset_sec)}${s.offset_sec===0?' · keyframe':''}`;
      host.querySelector('[data-sensor]').textContent=`TLD: ${s.tld} · speed: ${s.linear_vel_mps.toFixed(3)} m/s`;
      host.querySelector('output').textContent=timestamp(s.offset_sec);slider.setAttribute('aria-valuetext',`${timestamp(s.offset_sec)}, ${future?'future annotation context':'model observation'}`);
      const note=host.querySelector('.time-context');note.classList.toggle('future',future);
      note.textContent=future?'Future annotation context only. This observation is not a model input.':'Past and keyframe observations are model inputs. The displayed annotation remains fixed at t = 0.';
      host.querySelector('[data-chart]').innerHTML=chart(c,index);
    }
    slider.addEventListener('input',update);host.querySelector('[data-reset]').addEventListener('click',()=>{slider.value='4';update();});update();
  }
  const copyButton=document.querySelector('#copy-citation');
  if (copyButton) copyButton.addEventListener('click',async()=>{
    const element=document.querySelector('#citation'),status=document.querySelector('#copy-status');
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(element.textContent);status.textContent='Citation copied.';
    } catch (_) {
      const selection=window.getSelection(),range=document.createRange();range.selectNodeContents(element);selection.removeAllRanges();selection.addRange(range);
      status.textContent='Citation selected. Press Ctrl+C or Command+C to copy.';
    }
  });
})();

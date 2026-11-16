# Website template and dependency notices

The RoDAS website adapts the layout of [LISN](https://github.com/Social-Nav/LISN-project), itself derived from [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) and [Nerfies](https://nerfies.github.io/). The source README and footer declare the website template licensed under [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/). That declaration and the template attribution are retained in this page's footer. RoDAS-specific layout modifications are in `static/css/rodas.css` and `index.html`; `static/css/index.css` is retained unchanged from LISN. No upstream research figures, videos, results, author information, or paper text are reused.

The CC BY-SA declaration here concerns the adapted website template. It does not assign a license to the RoDAS research code, dataset, source footage, or manuscript. Those materials have no new license assigned by this local preparation step.

Bundled dependencies:

- Bulma v0.9.1, Copyright Jeremy Thomas; MIT license. `static/css/bulma.min.css` retains its original header. Source: https://github.com/jgthms/bulma/tree/0.9.1
- bulma-carousel, Copyright 2018 CreativeBulma; MIT license. `static/css/bulma-carousel.min.css` and `static/js/bulma-carousel.min.js` are retained from the LISN checkout. Package and license source: https://www.npmjs.com/package/bulma-carousel and https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.24/LICENSE. The package's historical repository link is https://github.com/Wikiki/bulma-carousel.
- Inter is loaded through Google Fonts, with local system fonts as fallback. Source and font license: https://github.com/rsms/inter

Exact retained file URLs and SHA-256 hashes are recorded in `TEMPLATE_PROVENANCE.json`.

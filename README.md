# RoDAS project page

English project page for **RoDAS: Evidence-Linked Decision Annotations for Sidewalk Robot Navigation**.

- Website repository: https://github.com/eeyore22/RoDAS-project
- Research-code repository: https://github.com/eeyore22/RoDAS
- Planned GitHub Pages address: https://eeyore22.github.io/RoDAS-project/ (not yet deployed).

## Source

This is a buildless static website. `index.html` is the served page. `paper_content.json` stores the manuscript-derived abstract, corpus summary, decision vocabulary, and result tables. `project_config.json` stores project metadata. `static/css/index.css` retains the LISN layout; small RoDAS-specific additions live in `static/css/rodas.css`.

The content follows the supplied working manuscript (`paper.zip`): the annotation schema and staged pipeline, corpus and temporal scope, four supervision formulations, five-backbone results, explanation-content intervention, and label-stability diagnostics. The abstract is copied from the active manuscript after removing LaTeX markup. The selected examples A01 → B01/B02 → D01 remain illustrative annotation records. The paper button is unavailable until a public paper URL exists, and the citation remains provisional.

`static/images/q2_label_stability.svg` is the supplied manuscript's plot, copied unchanged. It contains aggregate results and no camera imagery. The three result groups are not disjoint: stable with an observed neighbor is a subset of stable.

The local assembly helper is `../analysis_outputs/rodas_project_setup_20261111/build_lisn_page.py`. It reads `paper_content.json` and the private workspace's selected-case records to regenerate the page; it is not needed to serve this repository. In the research workspace, `../analysis_outputs/paper_sync_20261116/sync_content.py` prepares manuscript text and the two research READMEs. Run the content helper before the assembly helper when refreshing from the supplied manuscript. The local reconciliation report records unresolved manuscript inconsistencies, including human-reliability results that were not added to the page.

## Local preview

Serve the research workspace root and open:

`http://localhost:8000/RoDAS-project/index.html`

All 68 camera observations, including every timeline slot, now use face-blurred derivatives contained in `static/images/face_blurred/`. No original camera files are included or linked from the page. The user explicitly authorized local OpenCV/Pillow processing; no image-generation service was used. Gaussian blur is restricted to manually reviewed face/head ellipses. Lossless WebP storage preserves every decoded pixel outside those masks. The original files remain unchanged, and per-frame regions, hashes, and checks are recorded locally under `../analysis_outputs/rodas_face_blur_20261111/`. This is face blurring, not a claim that all other identifying scene details have been removed. No footage has been uploaded.

The site assets are self-contained, but the page remains an unpublished draft for review. All text and initial figures work without JavaScript; JavaScript adds the carousel, observation timeline, and citation copy action.

The proposed teaser video is not yet produced. The opening figure currently uses the selected A01 keyframe. The observation timeline distinguishes past/keyframe model inputs from future annotation context; annotations stay fixed at t = 0.

## Publication

After the draft text and face-blurred publication assets have been reviewed, upload the website files to this repository and enable GitHub Pages from `main` / root in Settings → Pages. No files have been pushed and Pages has not been enabled by the local assembly helper. Deployment does not require publishing the research code or the draft PDF.

## Attribution

Layout source: https://github.com/Social-Nav/LISN-project, derived from https://github.com/eliahuhorwitz/Academic-project-page-template and https://nerfies.github.io/. The adapted template declares CC BY-SA 4.0; the footer retains attribution. See `TEMPLATE_PROVENANCE.json` and `THIRD_PARTY_NOTICES.md`. No LISN research images, videos, results, or text are included. No license for the RoDAS research code or dataset is assigned by this website draft.

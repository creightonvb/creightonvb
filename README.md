Creighton Volleyball Team Hub
Internal reference site. Static HTML on GitHub Pages.
This is the skeleton deployment — site is live and navigable, with placeholders where videos and diagrams will go. Add real content incrementally as time allows.
---
Adding a video (when you have one)
Decide where to host it (Drive, YouTube, or repo). Get a shareable URL.
Open the relevant systems HTML file in GitHub (pencil icon to edit).
Find a `<div class="ph">Video coming</div>` line you want to fill.
Replace just that line with the right embed code:
Google Drive:
```html
   <iframe src="https://drive.google.com/file/d/YOUR_FILE_ID/preview" allow="autoplay" allowfullscreen></iframe>
   ```
YouTube unlisted:
```html
   <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" allow="autoplay; encrypted-media" allowfullscreen></iframe>
   ```
Self-hosted MP4 (file in `assets/video/`):
```html
   <video controls preload="none"><source src="assets/video/your-file.mp4" type="video/mp4"></video>
   ```
Commit. Live in ~60 seconds.
Adding a PDF
Upload PDF to `assets/pdf/` via GitHub web UI (Add file → Upload files).
In the relevant page, find the `<ul class="resources">` list and add:
```html
   <li><a href="assets/pdf/your-file.pdf" target="_blank" rel="noopener"><span>Title</span><span class="type">PDF</span></a></li>
   ```
Adding a diagram
The blocking-zones and serving-seams diagram sections are commented out in `blocking.html` and `passing.html`. To enable them:
Upload the image to `assets/img/` (e.g. `blocking-zones.png`).
Edit the file → find the HTML comment block that wraps the diagram → delete the `<!--` and `-->` lines around it.
Commit.
Editing text
Pencil icon on any file → change words inside the tags → commit. Don't touch the `< >` brackets.
---
Folder structure
```
/
├── index.html              Home
├── jays-way.html           Jays Way landing
├── leave-nothing.html
├── being-a-bluejay.html
├── articles.html
├── team-resources.html
├── systems.html            Systems landing
├── offense.html
├── defense.html
├── passing.html
├── blocking.html
├── style.css
└── assets/
    ├── pdf/                drop PDFs here
    └── img/                drop diagrams here
```
File naming rules
Lowercase, hyphens-not-spaces, no apostrophes. `rpi-team-sheets.pdf`, not `RPI Team Sheets.pdf`.
Changing colors
Top of `style.css`:
```css
--navy: #0a2240;
--blue: #00457c;
--gold: #cba052;
```

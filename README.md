# Creighton Volleyball Team Hub

Internal reference site. Static HTML hosted on GitHub Pages.

---

## How to update the site (under 30 min, no terminal required)

### To change words on any page
1. Go to **github.com** and open this repo.
2. Click the file you want to edit (e.g. `systems/passing.html`).
3. Click the pencil ✏️ icon (top right of the file view).
4. Edit text inside the `<h1>`, `<li>`, `<p>` etc. tags. Don't touch the angle brackets.
5. Scroll down → "Commit changes" → green button.
6. Wait 60 seconds. Site updates automatically.

### To add a video
1. Upload the clip to YouTube as **Unlisted** (Visibility = Unlisted, not Private).
2. Copy the video ID — it's the part after `watch?v=` in the URL. Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → ID is `dQw4w9WgXcQ`.
3. In the relevant systems page, find a `<div class="video">…</div>` block and copy/paste it for the new clip.
4. Replace `REPLACE_ID` with your video ID.
5. Update the title and coaching cue.
6. Commit.

### To add a PDF
1. In your repo, navigate to `assets/pdf/`.
2. Click "Add file" → "Upload files" → drag the PDF in.
3. Commit.
4. On the page where you want it listed, add a new line inside the `<ul class="resources">` list:
   ```html
   <li><a href="../assets/pdf/YOUR-FILE-NAME.pdf" target="_blank" rel="noopener"><span>Friendly title</span><span class="type">PDF</span></a></li>
   ```

### To add a diagram/image
1. Save the image as `.png` or `.jpg` (web-friendly, under 2MB if possible).
2. Upload to `assets/img/`.
3. On the relevant page, add a figure block:
   ```html
   <figure class="diagram">
     <img src="../assets/img/your-image.png" alt="Description of image">
     <figcaption>Caption</figcaption>
   </figure>
   ```

---

## Folder structure

```
creighton-vb/
├── index.html                  ← Home
├── jays-way/
│   ├── index.html              ← Jays Way landing
│   ├── leave-nothing.html
│   ├── being-a-bluejay.html
│   ├── articles.html
│   └── team-resources.html
├── systems/
│   ├── index.html              ← Systems landing
│   ├── offense.html
│   ├── defense.html
│   ├── passing.html
│   └── blocking.html
├── assets/
│   ├── css/style.css           ← single shared stylesheet
│   ├── pdf/                    ← all PDFs go here
│   ├── img/                    ← diagrams, photos
│   └── ppt/                    ← PowerPoint files (link as a PDF-style entry)
├── .nojekyll                   ← tells GitHub not to process with Jekyll
└── README.md                   ← this file
```

## File naming conventions

- Use lowercase and hyphens for filenames: `2025-schedule.pdf`, not `2025 Schedule.pdf` or `2025_Schedule.PDF`.
- No spaces, no special characters, no apostrophes.
- This keeps URLs clean and avoids broken links.

## To change colors

Open `assets/css/style.css`. The first block has CSS variables:
```
--navy:    #0a2240;
--blue:    #00457c;
--gold:    #cba052;
```
Change those three values and the whole site re-themes.

---

## Deployment (one-time setup)

See `DEPLOY.md` for the GitHub Pages setup walkthrough.

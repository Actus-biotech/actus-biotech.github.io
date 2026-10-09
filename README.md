# ACTUS website

Source for [actus.bio](https://actus.bio), the ACTUS landing page. It's a static site: one `index.html` with inline CSS and JavaScript, plus media in `assets/`. There's no build step and nothing to install.

## Project layout

```
index.html                    The whole page: markup, styles and scripts
actus_3d.glb                  3D model of the device, rendered with three.js
assets/                       Videos (.mp4), logo, favicon and photos
CNAME                         Custom domain for GitHub Pages (actus.bio). Don't remove.
.nojekyll                     Serves files as-is, without Jekyll processing. Don't remove.
.github/workflows/deploy.yml  Publishes main to the gh-pages branch on every push
```

The page loads three.js from unpkg.com and the IBM Plex Mono font from Google Fonts, so you need an internet connection to see it fully.

## Run it locally

Serve the folder over HTTP. Opening `index.html` directly from disk (`file://`) won't work properly: the browser blocks the JavaScript modules and the 3D model from loading.

Use any one of these, from the repo folder:

**Python** (installed on most machines):

```bash
python -m http.server 8000
```

**Node.js:**

```bash
npx serve .
```

Then open http://localhost:8000 (or the address `npx serve` prints). Stop the server with `Ctrl+C`. After editing a file, refresh the browser to see the change.

You can also use the **Live Server** extension in VS Code: right-click `index.html` and choose **Open with Live Server**. It reloads the page automatically when you save.

## Publish changes

Pushing to `main` publishes the site. The workflow in `.github/workflows/deploy.yml` copies `main` to the `gh-pages` branch, which GitHub Pages serves at actus.bio.

```bash
git checkout main
git pull                          # get the latest version first
# ...edit files, check them locally...
git add -A
git commit -m "Describe what you changed"
git push origin main
```

The live site usually updates within a couple of minutes. You can follow the deploy on the repo's [Actions tab](https://github.com/Actus-biotech/actus-biotech.github.io/actions). If the page still looks old, do a hard refresh (`Ctrl+Shift+R`, or `Cmd+Shift+R` on a Mac) to bypass the browser cache.

Keep each file under 100 MB, GitHub's limit. Compress large videos before you add them.

## Previous version

The previous version of the site is kept on the [`V.0`](https://github.com/Actus-biotech/actus-biotech.github.io/tree/V.0) branch.

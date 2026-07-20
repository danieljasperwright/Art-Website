# Your Art Website

A one-page gallery site, sectioned by subject matter, with a filter to toggle
between "All Works" and "For Sale" only. Click any piece to see it larger.

## What's in this folder

- `index.html` — the page structure (you'll rarely need to touch this)
- `style.css` — all the visual design (colors, fonts, spacing)
- `script.js` — the logic that builds the gallery and filter (you shouldn't need to edit this)
- `artworks.js` — **this is the file you'll edit regularly.** Every artwork,
  its price, and its status ("available" / "sold" / "not-for-sale") lives here.
- `images/` — folder where your artwork photos live. Currently has 6
  placeholder images so you can see the site working.

## Part 1 — See it on your own computer first (optional but reassuring)

1. Double-click `index.html`. It should open in your browser and show the
   gallery with the 6 placeholder pieces.
2. Try the "For Sale" filter and click on a piece to see the lightbox.

If that works, you're ready to put it online.

## Part 2 — Put it online with GitHub Pages (free forever)

### Step 1: Create a GitHub account
Go to [github.com](https://github.com) and sign up (free).

### Step 2: Create a new repository
1. Click the **+** icon top-right → **New repository**
2. Name it something like `my-art-site`
3. Set it to **Public**
4. Do NOT tick "Add a README" (we already have one)
5. Click **Create repository**

### Step 3: Upload your files
1. On your new repository's page, click **uploading an existing file**
2. Drag in ALL the files from this folder (`index.html`, `style.css`,
   `script.js`, `artworks.js`, `README.md`) **and** the whole `images` folder
3. Scroll down, click **Commit changes**

### Step 4: Turn on GitHub Pages
1. In your repository, go to **Settings** → **Pages** (left sidebar)
2. Under "Build and deployment" → "Source", choose **Deploy from a branch**
3. Under "Branch", choose **main** and folder **/ (root)** → **Save**
4. Wait 1–2 minutes, then refresh the page — it'll show you a live URL like
   `https://yourusername.github.io/my-art-site/`

That's your website. Free forever, no ads, no branding.

### Step 5 (optional): Custom domain
Once you buy a domain (e.g. from Namecheap, ~$10–15/year):
1. In the domain registrar's DNS settings, add a **CNAME** record pointing to
   `yourusername.github.io`
2. In your repo's **Settings → Pages**, enter your custom domain and save
GitHub will walk you through the exact records needed once you enter the domain.

## Part 3 — Adding your real artworks

1. **Add the photo**: drop your image file into the `images` folder.
   Keep filenames simple, no spaces — e.g. `red-poppy.jpg`.
   - On GitHub: open the `images` folder in your repo → "Add file" → "Upload files"
2. **Add the entry**: open `artworks.js`, copy one of the existing `{ ... }`
   blocks, and fill in your details (see the instructions at the top of that
   file). Give it a unique `id`.
3. **Commit the change** (on GitHub, editing a file gives you a "Commit
   changes" button at the bottom). The live site updates within a minute or two.

## Marking something as sold

Open `artworks.js`, find the piece, and change:
```
status: "available"
```
to
```
status: "sold"
```
Save/commit. Done — it disappears from the "For Sale" filter automatically
and shows a "Sold" tag instead of the price.

## Changing your contact email

Open `index.html`, find this line near the bottom, and replace the email:
```html
<a class="contact-link" href="mailto:youremail@example.com?subject=Inquiry%20about%20your%20artwork">
```

## Image size tip

Large photos will slow your site down. Before uploading, aim to resize
images so the longest side is around **1600px** — plenty sharp for web
viewing, much lighter to load. Most phone photo apps or a free tool like
[Squoosh](https://squoosh.app) can do this in a few seconds.

## Categories

The subject-matter subheadings (Floral, Portraits, Landscapes, etc.) are
controlled by the `categories` list at the top of `artworks.js`. Add a new
subject there, then use that exact name in any artwork's `category` field.

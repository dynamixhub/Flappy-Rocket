# Flappy Rocket 🚀

A neon space-dodger built with plain HTML5 canvas, CSS and JavaScript — no
framework, no build step, no backend. Pilot a rocket through a scrolling
field of debris columns; tap, click, or hit space to thrust.

This is a from-scratch rewrite of the original Rocket.new scaffold: the
hosted `rocket-web.js` / `dhws-data-injector.js` platform scripts have been
removed, and the loading-screen shell has been replaced with an actual
playable game. Everything now runs from static files only, which is what
makes it deployable straight to GitHub Pages.

## Project structure

```
flappy-rocket/
├── index.html               # game markup: canvas + start/game-over overlays
│                             # (CSS + JS are inlined directly in this file too)
├── pages/
│   ├── about.html             # About page — credits Dynamix Studio
│   └── privacy.html           # Privacy Policy — needed for AdSense review
├── css/
│   └── style.css             # source stylesheet (kept for reference/editing)
├── js/
│   └── game.js                # source game logic (kept for reference/editing)
└── .github/workflows/
    └── deploy.yml              # auto-deploys to GitHub Pages on push to main
```

`about.html` / `privacy.html` live in `pages/` rather than the project root
on purpose: some editors and simple static previewers (including Spck)
auto-pick whichever `.html` file comes first alphabetically at the root as
the file to open, and `about.html` sorts before `index.html` — which is
why it was opening the About page instead of the game. With only
`index.html` at the root, that ambiguity is gone.

## Running it locally

`index.html` is fully self-contained — CSS and JS are inlined directly into
it, so **you can just open that one file** in a browser, or drop it alone
into a single-file editor/preview (Spck Editor, CodePen, etc.) and it will
run with no server and no other files needed.

The `css/style.css` and `js/game.js` files are kept in the repo too, for
reference and for anyone who prefers editing them separately — but
`index.html` doesn't depend on them being present; it has its own copy
inlined.

If you do edit `css/style.css` or `js/game.js` separately, remember to also
update the matching inlined `<style>`/`<script>` block in `index.html`, or
your changes won't show up when `index.html` is opened on its own.

For running with a real static server instead:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Controls

- **Space** / **↑** / **click or tap** — thrust
- Score increases each time you clear a debris column
- Best score is saved locally in your browser (`localStorage`)
- Speaker icon (top-right) toggles sound on/off — your choice is remembered
- On the game-over screen: **Retry** jumps straight back in, **Homepage**
  returns to the start screen

## Shield power-up

A glowing shield bubble sometimes floats in the gap of a debris column
(about a 1-in-3 chance per column, never on the very first one). Fly
through it to pick it up — your rocket gets a soft glowing ring around it.
The next time you'd otherwise crash into a pylon, the shield absorbs that
one hit instead and breaks (with its own sound and particle burst) so you
keep flying. It doesn't protect against hitting the ground or the top of
the screen — only pylon collisions.

## Sound

All sound effects and the background music loop are generated in the
browser with the Web Audio API — there are no audio files to manage, so
nothing extra needs to load or be hosted. Sound starts on your first tap
(browsers require a user action before audio can play).

## Deploying to GitHub Pages

1. Push this folder to a new GitHub repo (see commands below).
2. In the repo: **Settings → Pages → Build and deployment → Source →
   GitHub Actions**. The included workflow (`.github/workflows/deploy.yml`)
   will build and publish automatically on every push to `main`.
   - Alternatively, skip Actions entirely: set **Source → Deploy from a
     branch**, pick `main` and `/ (root)`. Either method works since there's
     no build step.
3. Your game will be live at `https://<your-username>.github.io/<repo-name>/`.

```bash
git init
git add .
git commit -m "Flappy Rocket: standalone canvas game"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Running ads on it (AdSense)

Once it's live on GitHub Pages, you can drop in Google AdSense same as any
static site:

1. Sign up at https://adsense.google.com with the exact GitHub Pages URL
   (`https://<username>.github.io/<repo>/`) as your site.
2. AdSense reviews the site — for a single-page game with almost no text
   content, approval can be hit-or-miss; having a short **About** section
   or a second page (privacy policy, how-to-play) on the same domain
   noticeably improves approval odds.
3. Once approved, paste the AdSense script tag AdSense gives you into
   `index.html`'s `<head>`, and place ad unit `<ins>` tags wherever you
   want banners — e.g. above/below the `.stage` div, not inside it (don't
   cover the canvas or the tap area, Google penalizes that).
4. A common layout: keep the game centered, add a slim banner ad strip
   below it on desktop, and an anchor/sticky bottom ad on mobile — check
   AdSense's auto ad units, they handle responsive placement for you.

If AdSense rejects the site early on (common for very new/simple sites),
alternatives while you build traffic: Google AdSense for individual pages
takes time to approve — in the meantime some devs use itch.io or
CrazyGames' upload/revenue-share programs, which accept HTML5 games with
much lower barriers and still pay out ad revenue.

## Custom domain (optional)

GitHub Pages works fine on the free `github.io` subdomain, but if you want
your own domain (looks more legit for ads/AdSense review):
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In the repo: **Settings → Pages → Custom domain**, enter it
3. At your domain registrar, add a `CNAME` record pointing to
   `<your-username>.github.io`
4. Wait for DNS to propagate (up to ~24h), then GitHub Pages auto-issues
   HTTPS for it

- **Difficulty** — tweak `GRAVITY`, `THRUST`, `PIPE_SPEED`, and `PIPE_GAP`
  at the top of `js/game.js`.
- **Palette** — colors are defined once as CSS custom properties in
  `css/style.css` (`:root`) and as a `COLORS` object in `js/game.js`,
  matching the original cyan/orange/yellow neon theme.
- **Canvas size** — `CANVAS_W` / `CANVAS_H` in `js/game.js`; it scales to
  fit the viewport automatically.

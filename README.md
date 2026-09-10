# BAEMONWORLD — owner notes (private)

This file is just for you. It lives in your GitHub repo but is **not linked
from the live website**, so visitors won't see it — they'd have to go
digging through your repo's file list on github.com to find it, which
regular site visitors never do.

## Files
- `index.html` — homepage
- `members.html` — member profiles
- `about.html` — about page
- `archive.html` — full video archive + categories
- `style.css` — all shared styling
- `script.js` — mobile menu, member select, archive filter
- `favicon.svg` — the little icon in the browser tab

## Add / change a video
1. Open `archive.html` (and `index.html` if it's a "Latest Video" too)
2. Copy one whole `<a class="video-card">...</a>` block
3. Replace:
   - `href="https://www.youtube.com/watch?v=VIDEO_ID"` → the new link
   - `src="https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg"` → same VIDEO_ID
   - the title text and category label
4. Commit changes on github.com — live in about a minute

## Add a real member photo
In `members.html`, find the member's `<div class="member-detail-photo">XX</div>`
and replace it with:
```html
<img src="photos/ruka.jpg" alt="Ruka" style="width:100%;height:100%;object-fit:cover;">
```
Upload the photo into a `photos/` folder in your repo first (Add file → Upload files).

## Edit member bios
Each `<p class="member-bio-placeholder">...</p>` in `members.html` is free text — just type over it.

## Update your personal social links
In every page's footer, find:
```html
<a href="#" target="_blank" rel="noopener noreferrer">My Instagram</a>
<a href="#" target="_blank" rel="noopener noreferrer">My X/Twitter</a>
```
Replace the `#` with your real profile URLs (do this in all four HTML files).

## Getting `baemonworld.github.io` instead of `rdjr-hub.github.io/baemonworld/`
GitHub Pages gives you a clean root domain only when your **account or
organization name itself** matches, via a specially-named repo:
1. Create a free GitHub **Organization** named `baemonworld` (Settings →
   Organizations → New organization — free tier is fine), OR rename your
   personal account to `baemonworld` in Settings if that username is free.
2. Inside that org/account, create a new repo named **exactly**
   `baemonworld.github.io`
3. Upload these same files to that repo's root and enable Pages the same way
4. Your site is now live at `https://baemonworld.github.io` directly — no
   `/baemonworld/` in the URL

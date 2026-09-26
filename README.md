# guizasy.github.io

Personal site for Guilherme Zasyeki, served by GitHub Pages at <https://guizasy.github.io>.

Plain HTML and CSS, with no build step. Open `index.html` in a browser to preview it,
or run `python3 -m http.server` and go to <http://localhost:8000>.

## Applying the branding

All brand values live in a few files:

| What | Where |
| --- | --- |
| Colors (light and dark), fonts, corner radius | `assets/css/brand.css` |
| Logo (header and social preview) | `assets/img/logo.svg` |
| Favicon | `assets/img/favicon.svg` |
| Web font `<link>` | `index.html` and `404.html`, at the `BRAND FONT` comment |
| Browser UI color | `<meta name="theme-color">` in `index.html` |

The layout in `assets/css/site.css` only uses the variables from `brand.css`,
so you shouldn't need to edit it to change the look.

## Content still to fill in

Search `index.html` for `TODO`. The remaining items are the headline role, bio,
location, current job, tool list and public contact links (email, LinkedIn).

## Structure

```
index.html          home page
404.html            not-found page
assets/css/brand.css  brand tokens (edit this one)
assets/css/site.css   layout and components
assets/js/main.js     theme toggle, footer year
assets/img/           logo and favicon
.nojekyll             serve files as-is, skipping Jekyll
```

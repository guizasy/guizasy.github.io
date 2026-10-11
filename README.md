# guizasy.github.io

Personal site for Guilherme Zasyeki, served by GitHub Pages at <https://guizasy.github.io>.

It follows the Arg[3] visual identity as a derived brand: the wordmark is the name
in JetBrains Mono (no brackets), and the only reference to Arg[3] is the footer link.
Content comes from the CV and is available in Portuguese and English.

Plain HTML and CSS, with no build step. Open `index.html` in a browser to preview it,
or run `python3 -m http.server` and go to <http://localhost:8000>.

## Structure

```
index.html              home page
404.html                not-found page
assets/css/brand.css    Arg[3] color and font tokens
assets/css/site.css     layout and components
assets/js/main.js       PT/EN switch (saved in localStorage), footer year
assets/img/favicon.svg  initials on a Tinta square
assets/img/og.png       1200×630 social preview
.nojekyll               serve files as-is, skipping Jekyll
```

## Editing text

Every translatable element carries both versions in `data-pt` and `data-en`
attributes, and the element's own text is the Portuguese version, so pages read
correctly without JavaScript. When you change a sentence, update all three.
Page titles live in `data-pt-title` / `data-en-title` on `<html>`.

## Brand rules to keep

- Only the palette in `brand.css`; no gradients, shadows or rounded corners.
- Sinal (`#E8562A`) appears only in hover/focus states, the hero rule and the
  brackets of the Arg[3] logo in the footer.
- JetBrains Mono for headings, labels and numbers; Archivo for running text.
- Brackets belong to Arg[3] only; never add them to the personal wordmark.

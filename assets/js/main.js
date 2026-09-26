(function () {
  var KEY = "lang";

  // Swap every [data-pt]/[data-en] text and the few attributes that carry copy.
  function set(lang) {
    var root = document.documentElement;
    root.lang = lang === "en" ? "en" : "pt-BR";
    document.querySelectorAll("[data-" + lang + "]").forEach(function (el) {
      el.textContent = el.getAttribute("data-" + lang);
    });
    document.querySelectorAll("[data-" + lang + "-label]").forEach(function (el) {
      el.setAttribute("aria-label", el.getAttribute("data-" + lang + "-label"));
    });
    document.querySelectorAll("[data-" + lang + "-href]").forEach(function (el) {
      el.setAttribute("href", el.getAttribute("data-" + lang + "-href"));
    });
    var title = root.getAttribute("data-" + lang + "-title");
    if (title) document.title = title;
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.addEventListener("click", function () { set(b.getAttribute("data-set-lang")); });
  });

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved !== "pt" && saved !== "en") {
    saved = (navigator.language || "pt").slice(0, 2) === "pt" ? "pt" : "en";
  }
  set(saved);

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();

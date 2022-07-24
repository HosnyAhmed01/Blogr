let dropControler = document.querySelectorAll('a[data-toggle="ul-toggle"]');
const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".landing .header-nav");

dropControler.forEach((droper) => {
  droper.addEventListener("click", () => {
    if (droper.parentNode.getAttribute("aria-expanded") == "true") {
      droper.parentNode.setAttribute("aria-expanded", false);
    } else {
      dropControler.forEach((drop) => {
        drop.parentNode.setAttribute("aria-expanded", false);
      });

      droper.parentNode.setAttribute("aria-expanded", true);
    }
  });
  droper.addEventListener("blur", () => {
    dropControler.forEach((drop) => {
      drop.parentNode.setAttribute("aria-expanded", false);
    });
  });
});

burger.addEventListener("click", () => {
  if (headerNav.classList.contains("visible")) {
    headerNav.classList.remove("visible");
    headerNav.classList.add("hidden");
    burger.style.backgroundImage = "url(../images/icon-hamburger.svg)";
  } else {
    burger.style.backgroundImage = "url(../images/icon-close.svg)";
    headerNav.classList.add("visible");
    headerNav.classList.remove("hidden");
    headerNav.classList.remove("none");
  }
});

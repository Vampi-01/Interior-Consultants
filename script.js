const navToggle = document.getElementById("menutoggle");
const primaryHeader = document.getElementById("header");
const primaryNav = document.getElementById("nav");
const body = document.getElementById("body");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  navToggle.classList.toggle("opened");

  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
  body.classList.toggle("no-scroll");
});

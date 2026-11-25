const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#primary-nav");
const navLinks = document.querySelectorAll(".nav a");

// Hamburger click
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");

  menuToggle.classList.toggle("active");

  const isOpen = nav.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
});

// Close menu when a link is clicked
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
    menuToggle.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

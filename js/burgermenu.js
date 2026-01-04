const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu.querySelectorAll("a");
burgerBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  burgerBtn.setAttribute("aria-expanded", isOpen);
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    burgerBtn.setAttribute("aria-expanded", "false");
  });
});


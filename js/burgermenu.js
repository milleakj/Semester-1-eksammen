const burgerBtn = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");


if (burgerBtn && mobileNav) {

  burgerBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("active");
    burgerBtn.setAttribute("aria-expanded", isOpen);
  });


  const navLinks = mobileNav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      burgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

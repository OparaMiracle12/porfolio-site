export default function navbarInit() {
  const menuToggler = document.querySelector(".menu-toggler");
  const navBar = document.querySelector(".navigation");
  let isMenuOpen = false;

  function toggleNavBar() {
    if (!isMenuOpen) {
      navBar.classList.add("open");
      isMenuOpen = true;
    } else {
      navBar.classList.remove("open");
      isMenuOpen = false;
    }
  }

  menuToggler.addEventListener("click", toggleNavBar);
}

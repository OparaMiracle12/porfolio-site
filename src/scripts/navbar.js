export default function navbarInit() {
  const menuToggler = document.querySelector(".menu-toggler");
  const navBar = document.querySelector(".navigation");
  let isMenuOpen = false;

  function navbarToggler() {
    if (!isMenuOpen) {
      navBar.classList.add("open");
      isMenuOpen = true;
    } else {
      console.log("hello");
      navBar.classList.remove("open");
      isMenuOpen = false;
    }
  }

  menuToggler.addEventListener("click", navbarToggler);
}

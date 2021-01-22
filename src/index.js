import "./sass/main.scss";
import Carousel from "bootstrap/js/dist/carousel";
import Scrollspy from "bootstrap/js/dist/scrollspy";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";
import AOS from "aos";
import "aos/dist/aos.css";
import navbarInit from "./scripts/navbar";

/* ==================== INITIALIZING COMPONENTS ====================== */

// initializing navigation
navbarInit();

// initializing AOS library
AOS.init({
  duration: 800,
  delay: 100,
  easing: "ease-in",
});

//  initializing bootstrap carousel
const carouselContainer = document.querySelector(".carousel");

new Carousel(carouselContainer, {
  interval: 850,
  wrap: true,
});

// initializing bootstrap scrollspy
new Scrollspy(document.body, {
  target: "#header",
});

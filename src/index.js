import "./sass/main.scss";
import Carousel from "bootstrap/js/dist/carousel";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/brands";
import AOS from "aos";
import "aos/dist/aos.css";
import navbarInit from "./scripts/navbar";

// initializing components
const carouselContainer = document.querySelector(".carousel");

navbarInit();

AOS.init(); // initializing AOS library

new Carousel(carouselContainer, {
  interval: 850,
  wrap: true,
});

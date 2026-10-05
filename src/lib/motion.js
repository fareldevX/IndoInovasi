import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const goTo = (id) =>
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia(MOTION_OK).matches ? "smooth" : "auto",
  });
export { gsap, ScrollTrigger };

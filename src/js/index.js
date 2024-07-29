import { loadHeader } from "./nav/headerLoader.js";
import { loadFooter } from "./nav/footerLoader.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
});

document.addEventListener("DOMContentLoaded", () => {
  loadFooter();
});

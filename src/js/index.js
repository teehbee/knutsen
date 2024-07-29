// Import and implementation of header and footer

import { loadHeader } from "./nav/headerLoader.js";
import { loadFooter } from "./nav/footerLoader.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
});

document.addEventListener("DOMContentLoaded", () => {
  loadFooter();
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.body.id === "service-metallarbeid") {
    Fancybox.bind('[data-fancybox="gallery-metallarbeid"]', {});
  }
});

export function initFancybox() {
  document.addEventListener("DOMContentLoaded", function () {
    const url = new URL(window.location.href);
    const pathSegments = url.pathname.split("/").slice(1);
    console.log("Pathname is: ", pathSegments);
    const serviceName = pathSegments[pathSegments.length - 1].replace(".html", "");
    console.log("Servicename is: ", serviceName);
    const galleryName = `gallery-${serviceName}`;
    console.log("galleryname is: ", galleryName);

    if (document.body.id.startsWith(`service-${serviceName}`)) {
      Fancybox.bind(`[data-fancybox="${galleryName}"]`, {});
    }
  });
}

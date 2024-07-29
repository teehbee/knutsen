let headerHtml = "";

async function loadHeader() {
  try {
    const response = await fetch("/nav/header.html");
    headerHtml = await response.text();
    document.body.insertAdjacentHTML("afterbegin", headerHtml);
    console.log("header is loaded");
  } catch (error) {
    console.error("Failed to load header:", error);
  }
}

export { loadHeader };

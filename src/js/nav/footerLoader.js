let footerHtml = "";

async function loadFooter() {
  try {
    const footerResponse = await fetch("/nav/footer.html");
    footerHtml = await footerResponse.text();
    document.body.insertAdjacentHTML("beforeend", footerHtml);
  } catch (error) {
    console.error("Failed footer:", error);
  }
}

export { loadFooter };

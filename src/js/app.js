import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const products = document.querySelectorAll("p.hot")
  for (let product of products) {
      product.innerHTML += " 🔥"
  }
});

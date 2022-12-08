import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const products = document.getElementsByClassName("price")
  for (let product of products) {
    if (product.classList.contains("hot")) {
      product.innerHTML += " 🔥"
    }
  }
});

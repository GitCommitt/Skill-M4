document.querySelectorAll(".product-container__item").forEach(product => {
  const addButton = product.querySelector(".item__button__addcart");
  const removeButton = product.querySelector(".item__button__removecart");

  let productCount = 0;
  
  const cartButton = document.querySelector(".button-winkel-nav");
  let totalCount = parseInt(cartButton.getAttribute("data-items")) || 0;

  removeButton.style.display = "none";

  addButton.addEventListener("click", () => {
    productCount++;
    totalCount++;
    cartButton.setAttribute("data-items", totalCount);

    if (productCount > 0) {
      removeButton.style.display = "inline-block";
    }
  });

  removeButton.addEventListener("click", () => {
    if (productCount > 0) {
      productCount--;
      totalCount--;
      cartButton.setAttribute("data-items", totalCount);

      if (productCount === 0) {
        removeButton.style.display = "none";
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    document.getElementById(`status-${i}`).textContent = product.available ? "available" : "not available";
    document.getElementById(`img-${i}`).src = product.img;
    document.getElementById(`img-${i}`).alt = product.name;
    document.getElementById(`price-${i}`).textContent = product.price;
    document.getElementById(`name-${i}`).textContent = product.name;
    document.getElementById(`desc-${i}`).textContent = product. description;
  }
});

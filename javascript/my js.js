document.addEventListener("DOMContentLoaded", () => {
    // price updater
    const updateTotalPrice = () => {
      const totalElement = document.querySelector(".total");
      let totalPrice = 0;
      document.querySelectorAll(".card").forEach(card => {
        const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace("$", "").trim());
        const quantity = parseInt(card.querySelector(".quantity").textContent.trim());
        totalPrice += unitPrice * quantity;
      });
      totalElement.textContent = `${totalPrice} $`;
    };
  // price increaser
    document.querySelectorAll(".fa-plus-circle").forEach(button => {
      button.addEventListener("click", () => {
        const quantityElement = button.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = ++quantity;
        updateTotalPrice();
      });
    });
  // price reducer
    document.querySelectorAll(".fa-minus-circle").forEach(button => {
      button.addEventListener("click", () => {
        const quantityElement = button.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantityElement.textContent = --quantity;
          updateTotalPrice();
        }
      });
    });
  // deleting product card
    document.querySelectorAll(".fa-trash-alt").forEach(button => {
      button.addEventListener("click", () => {
        const cardBody = button.closest(".dell");
        const cardImg = document.querySelector('card-img-top');
        cardBody.parentElement.removeChild(cardBody);
      //   const removeCardBodyChildren = (cardBody) => {
      //   while (cardBody.firstChild) {
      //   cardBody.removeChild(cardBody.firstChild);
      // }
    // };
      });
    });
  // price updater
    document.querySelectorAll(".fa-heart").forEach(button => {
      button.addEventListener("click", () => {
        button.classList.toggle("liked");
        button.style.color = button.classList.contains("liked") ? "red" : "black";
      });
    });
  
    updateTotalPrice();
  });
  

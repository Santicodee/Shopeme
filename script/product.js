"use strict";
//Data structure
const products = [
  {
    image: "./Assets/Products images/shoes.png",
    name: "Nike Spark Women's Shoes",
    rating: { stars: 40, count: 276 },
    price: "4,999",
  },
  {
    image: "./Assets/Products images/shoes2.png",
    name: "Freak 4 Basketball Shoes",
    rating: {
      stars: 50,
      count: 1206,
    },
    price: "12,999",
  },
  {
    image: "./Assets/Products images/Shoes3.png",
    name: "Nike Go FlyEase Easy On/Off Shoes",
    rating: {
      stars: 25,
      count: 83,
    },
    price: "6,999",
  },
  {
    image: "./Assets/Products images/Shoes5.png",
    name: "Nike Air Max AP Men's Shoes",
    rating: {
      stars: 35,
      count: 183,
    },
    price: "8,999",
  },
];

let productsHTML = "";

products.forEach((product) => {
  //acumulator pattern
  //productsHTML=productsHTML+
  productsHTML += `
  <div class="product">
        <img
          class="product-img"
          src="${product.image}"
          >
        <h3>${product.name}</h3>
        <div class="rating">
          <img src="./Assets/Rating Icon/rating-${product.rating.stars}.png">
          <h3>${product.rating.count}</h3>
        </div>
        <h3>₱${product.price}</h3>
        <form action="#">
          <select name="numberOfpurchase" id="Purchase">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </form>
        <div class="button"><button class="button-icon"  data-product="${product.name}">Add to cart</button></div>
      </div>`;
});

document.querySelector(".products").innerHTML = productsHTML;
document.querySelectorAll(".button-icon").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.dataset.product;

    let matchingItem;

    cart.forEach((item) => {
      if (productName === item.productName) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productName: productName,
        quantity: 1,
      });
    }
    let totalAddToCart = 0;

    cart.forEach((item) => {
      totalAddToCart += item.quantity;
    });

    document.querySelector(".number").innerHTML = totalAddToCart;
  });
});

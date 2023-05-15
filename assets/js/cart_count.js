import { user_id } from "./is_logged.js";

const cart_number = document.getElementById("cart-count");

const mobile_cart_number = document.getElementById("mobile-cart-count");

function cart_count_fun() {
  const cart_items_user = JSON.parse(localStorage.getItem("cart_items"));

  let cart_count = 0;

  cart_number.innerText = "";

  mobile_cart_number.innerText = "";

  if (cart_items_user != null) {
    cart_items_user.forEach((obj) => {
      if (user_id === obj.user_id) {
        ++cart_count;
      }
    });
  }

  cart_number.innerText = cart_count;

  mobile_cart_number.innerText = cart_count;
}

cart_count_fun();

export { cart_count_fun };

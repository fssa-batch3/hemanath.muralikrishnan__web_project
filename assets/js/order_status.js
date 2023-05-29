import { user_id } from "./is_logged.js";
import { cart_count_fun } from "./cart_count.js";

const cart_items = JSON.parse(localStorage.getItem("cart_items"));

for (let i = 0; i < cart_items.length; i++) {
  delete_cart_products();

  cart_count_fun();
}

// to delete the cart items of the current user

function delete_cart_products() {
  const get_cart_items = JSON.parse(localStorage.getItem("cart_items"));

  get_cart_items.forEach((item, index) => {
    if (user_id === item.user_id) {
      get_cart_items.splice(index, 1);

      localStorage.setItem("cart_items", JSON.stringify(get_cart_items));
    }
  });
}

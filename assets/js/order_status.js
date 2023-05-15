import { user_id } from "./is_logged.js";

const cart_items = JSON.parse(localStorage.getItem("cart_items"));

// to delete the cart items of the current user
for (let i = 0; i < cart_items.length; i++) {
  const get_cart_items = JSON.parse(localStorage.getItem("cart_items"));

  get_cart_items.forEach((item, index) => {
    if (user_id === item.user_id) {
      get_cart_items.splice(index, 1);

      localStorage.setItem("cart_items", JSON.stringify(get_cart_items));
    }
  });
}

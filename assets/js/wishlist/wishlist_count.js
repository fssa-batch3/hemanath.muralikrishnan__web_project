import { user_id } from "../is_logged.js";

const wishlist_element = document.getElementById("wishlist-count");
const mobile_wishlist_elemetn = document.getElementById(
  "mobile-wishlist-count"
);

function wishlist_count_fun() {
  const wishlist_list = JSON.parse(localStorage.getItem("wishlist"));

  let wish_pro_count_se = 0;

  wishlist_element.innerText = "";
  mobile_wishlist_elemetn.innerText = "";

  if (wishlist_list != null) {
    wishlist_list
      .filter((obj) => user_id === obj.user_id)
      .forEach(() => {
        ++wish_pro_count_se;
      });
  }

  wishlist_element.innerText = wish_pro_count_se;
  mobile_wishlist_elemetn.innerText = wish_pro_count_se;
}

wishlist_count_fun();

export { wishlist_count_fun };

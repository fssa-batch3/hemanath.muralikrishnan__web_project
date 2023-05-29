import { user_id } from "../is_logged.js";
import { Notify } from "../vendor/notify.js";
import { wishlist_count_fun } from "./wishlist_count.js";

// getting the element to append the div
const appen_div = document.querySelector(".wishlist-cont");

// from localstorage get the favourite list

const wishlist = JSON.parse(localStorage.getItem("wishlist"));

// element to display the number of wishlist products available

const wish_title = document.getElementById("wish-title");

function check_wishlist() {
  let user_pro_check = false;

  if (wishlist !== null) {
    wishlist.find((obj) => {
      if (user_id === obj.user_id) {
        user_pro_check = true;
      }

      return user_pro_check;
    });

    show_the_wishlist_pro(user_pro_check);
  } else {
    show_the_wishlist_pro(user_pro_check);
  }
}

function show_the_wishlist_pro(user_pro_check) {
  let wish_pro_count = 0;

  if (user_pro_check) {
    wishlist.filter((obj, index) => {
      if (user_id === obj.user_id) {
        wish_list(obj, index);
        wish_pro_count++;
        return true;
      }
      return false;
    });
  } else {
    appen_div.innerHTML = `<p class="no-wishlist-pro">No favourite products</p>`;
  }

  // my title count increasing

  wish_title.innerText = `My Wishlist(${wish_pro_count})`;
}

function wish_list(item, index) {
  const product_id = item.product_id;
  const product_cat = item.category.id;

  const href_link =
    `product_details/details.html?` +
    `id=${product_id}&` +
    `cat=${product_cat}`;

  const wishlistSec = document.createElement("div");
  wishlistSec.classList.add("wishlist-sec");

  const wishlistContent = document.createElement("div");
  wishlistContent.classList.add("wishlist-content");

  const wishlistProImage = document.createElement("div");
  wishlistProImage.classList.add("wishlist-pro-image");

  const aLink = document.createElement("a");
  aLink.href = href_link;

  const wishlistImg = document.createElement("img");
  wishlistImg.src = item.product_image.source;
  wishlistImg.alt = `image of ${item.product_image.alt}`;

  aLink.appendChild(wishlistImg);
  wishlistProImage.appendChild(aLink);

  const wishlistText = document.createElement("div");
  wishlistText.classList.add("wishlist-text");

  const wishProTitle = document.createElement("p");
  wishProTitle.classList.add("wish-pro-title");
  wishProTitle.innerText = item.product_eng_name;

  const wishCat = document.createElement("p");
  wishCat.classList.add("wish-cat");
  wishCat.innerText = item.category.name;

  const wishlistQuantity = document.createElement("div");
  wishlistQuantity.classList.add("wishlist-quantity");

  const quantity = document.createElement("p");
  quantity.innerHTML = `<b>Qty:</b> ${item.quantity[0].qty}`;

  const wishPrice = document.createElement("p");
  wishPrice.classList.add("wish-price");
  wishPrice.innerText = `₹ ${item.quantity[0].rs}`;

  wishlistQuantity.appendChild(quantity);
  wishlistQuantity.appendChild(wishPrice);

  wishlistText.appendChild(wishProTitle);
  wishlistText.appendChild(wishCat);
  wishlistText.appendChild(wishlistQuantity);

  const iconDel = document.createElement("div");
  iconDel.classList.add("icon-del");

  const delIcon = document.createElement("i");
  delIcon.classList.add("fa-solid", "fa-trash");
  delIcon.onclick = () => deletewishlist(index);

  iconDel.appendChild(delIcon);

  wishlistContent.appendChild(wishlistProImage);
  wishlistContent.appendChild(wishlistText);

  wishlistSec.appendChild(wishlistContent);
  wishlistSec.appendChild(iconDel);

  appen_div.appendChild(wishlistSec);
}

function deletewishlist(index) {
  wishlist.splice(index, 1);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  Notify.success("Product Removed");

  appen_div.innerHTML = "";

  check_wishlist();

  wishlist_count_fun();
}

check_wishlist();

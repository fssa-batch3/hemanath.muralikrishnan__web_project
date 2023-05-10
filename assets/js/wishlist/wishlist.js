// getting the element to append the div
const appen_div = document.querySelector(".wishlist-cont");

// empty string to have the wishlist items

let wishlist_output = "";

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
  }

  else{
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

        return wish_pro_count;
      }
    });
  } else {
    appen_div.innerHTML = `<p class="no-wishlist-pro">No favourite products</p>`;
  }

  // my title count increasing

  wish_title.innerText = `My Wishlist(${wish_pro_count})`;
}

function wish_list(item, index) {
  const { product_id } = item;
  const product_cat = item.category.id;

  const href_link =
    `product_details/details.html?` +
    `id=${product_id}&` +
    `cat=${product_cat}`;

  wishlist_output += `<div class="wishlist-sec">

                <div class="wishlist-content">

                    <div class="wishlist-pro-image">

                        <a href="${href_link}">
                            <img src="${item.product_image.source}" alt="image of" + ${item.product_image.alt}>
                        </a>
                    </div>



                    <div class="wishlist-text">

                      
                        <p class="wish-pro-title">${item.product_eng_name}</p>
                        <p class="wish-cat">${item.category.name}</p>

                        <div class="wishlist-quantity">
                            <p><b>Qty:</b> ${item.quantity[0].qty}</p>
                            <p class="wish-price">₹ ${item.quantity[0].rs}</p>
                        </div>

                    </div>

                </div>

                <div class="icon-del">
                        <i class="fa-solid fa-trash" onclick=deletewishlist(${index})></i>
                </div>


            </div>`;

  appen_div.innerHTML = wishlist_output;
}

function deletewishlist(index) {
  wishlist.splice(index, 1);

  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  Notify.success("Product Removed");

  wishlist_output = "";

  check_wishlist();

  wishlist_count_fun();
}

check_wishlist();

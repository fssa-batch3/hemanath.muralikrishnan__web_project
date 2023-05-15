import { Notify } from "../vendor/notify.js";
import { cart_count_fun } from "../cart_count.js";
import { user_id } from "../is_logged.js";

const root_loc = window.location.origin;

const cart_items = JSON.parse(localStorage.getItem("cart_items")) ?? [];

// get the user id

const logged_email_one = localStorage.getItem("logged_in");

const user_records_one = JSON.parse(localStorage.getItem("users"));

let user_id_one;

if (user_records_one !== null) {
  user_records_one.find((obj) => {
    if (logged_email_one === obj.emailid) {
      user_id_one = obj.user_id;

      return user_id_one;
    }
    return undefined;
  });
}

function list_products(array = []) {
  document.querySelector(".append_the_products").innerHTML = "";

  array.forEach((item, index) => {
    // product_container_div
    const product_container_div = document.createElement("div");
    product_container_div.setAttribute("class", "product-container");

    // product_main_div
    const product_main_div = document.createElement("div");
    product_main_div.setAttribute("class", "product-main");
    product_container_div.append(product_main_div);

    const product_id = item.id;
    const product_cat = item.category.id;
    const href_link =
      `${root_loc}/pages/product_details/details.html?` +
      `id=${product_id}&` +
      `cat=${product_cat}`;

    // indv product link
    const indv_product_link = document.createElement("a");
    indv_product_link.setAttribute("href", href_link);
    product_main_div.append(indv_product_link);

    // product_image_div
    const product_image_div = document.createElement("div");
    product_image_div.setAttribute("class", "product-img");
    indv_product_link.append(product_image_div);

    // product_image_creating
    const product_image_src = document.createElement("img");
    product_image_src.setAttribute("src", item.image.source);
    product_image_src.setAttribute("alt", item.image.alt);
    product_image_div.append(product_image_src);

    // product category title
    const product_cat_title = document.createElement("p");
    product_cat_title.setAttribute("class", "category-title");
    product_cat_title.innerHTML = item.category.name;
    indv_product_link.append(product_cat_title);

    // product_name_div
    const product_name_div = document.createElement("div");
    product_name_div.setAttribute("class", "product-name");
    indv_product_link.append(product_name_div);

    // product_names

    // product eng name
    const product_eng_name_p = document.createElement("p");
    product_eng_name_p.setAttribute("class", "product_english_name");
    product_eng_name_p.innerText = item.name.eng;
    product_name_div.append(product_eng_name_p);

    // product tam name
    const product_tam_name_p = document.createElement("p");
    product_tam_name_p.innerText = item.name.tam;
    product_name_div.append(product_tam_name_p);

    const select_tag = document.createElement("select");
    select_tag.setAttribute("class", "amount_dropdown");
    product_main_div.append(select_tag);

    const list_qty = item.quantity;

    list_qty.forEach((data) => {
      const option_tag = document.createElement("option");
      option_tag.setAttribute("value", data.rs);
      option_tag.innerHTML = data.text;
      select_tag.appendChild(option_tag);
    });

    // amount
    const amount = document.createElement("div");
    amount.className = "amount";
    amount.innerText = `Rs. ${item.quantity[0].rs}`;
    product_main_div.append(amount);

    select_tag.addEventListener("change", (e) => {
      const selectvalue = select_tag.value;
      amount.innerText = `Rs. ${selectvalue}`;
    });

    let qty_value = 1;

    let qty_plus_value;

    let qty_minus_value;

    // quantity cart div
    const quantity_cart_div = document.createElement("div");
    quantity_cart_div.setAttribute("class", "qty-cat");
    product_main_div.append(quantity_cart_div);

    const qty_div = document.createElement("div");
    qty_div.setAttribute("class", "qty");
    quantity_cart_div.append(qty_div);

    const qty_minus = document.createElement("div");
    qty_minus.innerHTML = `<img src="../../assets/images/minus-sign.png" alt="minus-sing">`;
    qty_minus.className = "qty-minus";
    qty_div.append(qty_minus);

    const qty_number = document.createElement("div");
    qty_number.innerText = "1";
    qty_number.className = "qty-number";
    qty_div.append(qty_number);

    const qty_plus = document.createElement("div");
    qty_plus.innerHTML = `<img src="../../assets/images/add.png" alt="add-sign">`;
    qty_plus.className = "qty-plus";
    qty_div.append(qty_plus);

    // add button div

    const add_to_cart = document.createElement("div");
    add_to_cart.setAttribute("class", "fa-solid fa-cart-plus list_cart");
    quantity_cart_div.append(add_to_cart);

    qty_plus.addEventListener("click", () => {
      const elem = document.querySelectorAll(".list_cart");
      qty_value++;
      qty_plus_value = qty_value;
      qty_number.innerText = qty_plus_value;

      updatequantity(
        select_tag.value,
        JSON.stringify(item),
        qty_number.innerText,
        elem,
        index
      );
    });

    qty_minus.addEventListener("click", () => {
      if (qty_value > 1) {
        const elem = document.querySelectorAll(".list_cart");
        qty_value--;
        qty_minus_value = qty_value;
        qty_number.innerText = qty_minus_value;

        updatequantity(
          select_tag.value,
          JSON.stringify(item),
          qty_number.innerText,
          elem,
          index
        );
      }
    });

    add_to_cart.addEventListener("click", () => {
      // pass the parameters to the add to cart functionality

      get_cart_ele(
        select_tag.value,
        JSON.stringify(item),
        qty_number.innerText
      );
    });

    document
      .querySelector(".append_the_products")
      .append(product_container_div);
  });
}

function updatequantity(rs, item, qty, elem, index) {
  const par = JSON.parse(item);

  par.quantity.find((obj) => {
    if (rs === obj.rs) {
      if (obj.unit === "kg") {
        checkwithkg(rs, item, qty, elem, index);
      } else if (obj.unit === "gm") {
        checkwithgm(rs, item, qty, elem, index);
      } else {
        checkwithbase(rs, item, qty, elem, index);
      }
      return true; // return a value when the condition is met
    }
    return false; // return a value when the condition is not met
  });
}

// check with kig
function checkwithkg(rs, item, qty, elem, index) {
  const par = JSON.parse(item);

  par.quantity.find((obj) => {
    if (rs === obj.rs) {
      const check = qty * obj.into_gram;

      if (Number(check) > Number(par.avail_stock.into_gram)) {
        elem[index].classList.add("disabled");

        Notify.error("Required quantity not available");
      } else {
        elem[index].classList.remove("disabled");
      }
      return true;
    }
    return false;
  });
}

// check with gm
function checkwithgm(rs, item, qty, elem, index) {
  const par = JSON.parse(item);

  par.quantity.find((obj) => {
    if (rs === obj.rs) {
      const check = qty * obj.qty;

      if (Number(check) > Number(par.avail_stock.into_gram)) {
        elem[index].classList.add("disabled");

        Notify.error("Required quantity not available");
      } else {
        elem[index].classList.remove("disabled");
      }
      return true;
    }
    return false;
  });
}

// check with base

function checkwithbase(rs, item, qty, elem, index) {
  const par = JSON.parse(item);

  par.quantity.find((obj) => {
    if (rs === obj.rs) {
      const check = qty * obj.qty;

      if (Number(check) > Number(par.avail_stock.num)) {
        elem[index].classList.add("disabled");

        Notify.error("Required quantity not available");
      } else {
        elem[index].classList.remove("disabled");
      }
      return true;
    }

    return false;
  });
}

let cart_check = true;

function get_cart_ele(pro_rs, item, no_qty) {
  const to_json = JSON.parse(item);

  if (user_id_one !== undefined) {
    cart_check = true;

    check_qty(pro_rs, item);
  } else {
    cart_check = false;

    Notify.error("Please login to add products to cart");

    return cart_check;
  }

  if (cart_check) {
    to_json.quantity.find((qty_obj) => {
      if (pro_rs === qty_obj.rs) {
        const cart_obj = {
          cart_product_id: to_json.id,
          cart_item_id: Math.random().toString(16).slice(2),
          user_id,
          product_details: {
            image: to_json.image,
            name: to_json.name,
            farmer: to_json.farmer,
            selected_qty: qty_obj,
          },
          quantity: no_qty,
          cart_pro_category: to_json.category,
          product_added_date: new Date().toLocaleDateString(),
          product_added_time: new Date().toLocaleTimeString(),
          ready_for_checkout: true,
        };

        cart_items.push(cart_obj);

        Notify.success(
          `Item added to cart ${to_json.name.eng} ${qty_obj.qty}${qty_obj.unit}`
        );

        localStorage.setItem("cart_items", JSON.stringify(cart_items));

        return cart_obj; // add this line
      }
      return null; // add this line
    });

    cart_count_fun();
  }

  return undefined;
}

// check in the cart the selected the cart qty already added

function check_qty(pro_rs, item) {
  const par = JSON.parse(item);

  const cart_item_arr = JSON.parse(localStorage.getItem("cart_items"));

  if (cart_item_arr != null) {
    const foundItem = cart_item_arr.find((obj) => {
      if (user_id_one === obj.user_id) {
        if (par.id === obj.cart_product_id) {
          if (pro_rs === obj.product_details.selected_qty.rs) {
            Notify.error(
              `Item already added to cart ${obj.product_details.name.eng} ${obj.product_details.selected_qty.qty}${obj.product_details.selected_qty.unit}`
            );
            return true;
          }
        }
      }
      return false;
    });
    if (foundItem) {
      cart_check = false;
      return cart_check;
    }
  }

  return undefined;
}

export { list_products, get_cart_ele, updatequantity };

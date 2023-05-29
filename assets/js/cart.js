import { user_id } from "./is_logged.js";
import { Notify } from "./vendor/notify.js";
import { cart_count_fun } from "./cart_count.js";

const product_details = JSON.parse(localStorage.getItem("product_list"));

const cart_append_div = document.querySelector(".body_table");

const cart_items = JSON.parse(localStorage.getItem("cart_items"));

const elem = document.querySelector(".checkout-btn");

function show_the_cart_pro(user_pro_check) {
  if (user_pro_check) {
    cart_items.filter((obj, index) => {
      if (user_id === obj.user_id) {
        cart_list(obj, index);

        return true; // Return a value indicating that the condition is true
      }

      return false; // Return a value indicating that the condition is false
    });
  } else {
    document.querySelector(".table__body").style.display = "none";

    document.querySelector(".show-total").style.display = "none";

    document.querySelector(
      ".cart-main"
    ).innerHTML = `<h1 class="notify-user">No Cart items</h1>`;
  }
}

function check_cart() {
  let user_pro_check = false;

  if (cart_items !== null) {
    cart_items.find((obj) => {
      if (user_id === obj.user_id) {
        user_pro_check = true;
      }

      return user_pro_check;
    });

    show_the_cart_pro(user_pro_check);
  } else {
    show_the_cart_pro(user_pro_check);
  }
}

function cart_list(item, index) {
  const cart_tr = document.createElement("tr");
  cart_append_div.appendChild(cart_tr);

  const cart_td_for_img = document.createElement("td");
  cart_tr.appendChild(cart_td_for_img);

  const pro_img = document.createElement("img");
  pro_img.setAttribute("src", `${item.product_details.image.source}`);
  pro_img.setAttribute("alt", `image of " + ${item.product_details.image.alt}`);
  cart_td_for_img.appendChild(pro_img);

  const pro_details_div = document.createElement("div");
  pro_details_div.setAttribute("class", "cart_item_detail");
  cart_td_for_img.appendChild(pro_details_div);

  const p_one = document.createElement("p");
  p_one.innerHTML = `${item.product_details.name.eng}`;
  pro_details_div.appendChild(p_one);

  const p_two = document.createElement("p");
  p_two.innerHTML = `<b>Qty:</b> ${item.product_details.selected_qty.qty}${item.product_details.selected_qty.unit}`;
  pro_details_div.appendChild(p_two);

  const td_unit_price = document.createElement("td");
  td_unit_price.innerHTML = `₹${item.product_details.selected_qty.rs}`;
  cart_tr.appendChild(td_unit_price);

  const total_qty = document.createElement("td");
  cart_tr.appendChild(total_qty);

  const td_input = document.createElement("td");
  cart_tr.appendChild(td_input);

  const td_qty_div = document.createElement("div");
  td_qty_div.setAttribute("class", "td_qty");
  td_input.appendChild(td_qty_div);

  let qty_value = `${item.quantity}`;

  let qty_plus_value;

  let qty_minus_value;

  const qty_minus = document.createElement("div");
  qty_minus.innerText = "-";
  qty_minus.className = "qty-minus";
  td_qty_div.appendChild(qty_minus);

  const qty_number = document.createElement("div");
  qty_number.innerText = `${item.quantity}`;
  qty_number.className = "qty-number";
  td_qty_div.appendChild(qty_number);

  const qty_plus = document.createElement("div");
  qty_plus.innerText = "+";
  qty_plus.className = "qty-plus";
  td_qty_div.appendChild(qty_plus);

  qty_plus.addEventListener("click", () => {
    qty_value++;
    qty_plus_value = qty_value;
    qty_number.innerText = qty_plus_value;

    cart_update_quantity(
      item.cart_item_id,
      item.cart_product_id,
      qty_number.innerText
    );
  });

  qty_minus.addEventListener("click", () => {
    if (qty_value > 1) {
      qty_value--;
      qty_minus_value = qty_value;
      qty_number.innerText = qty_minus_value;

      cart_update_quantity(
        item.cart_item_id,
        item.cart_product_id,
        qty_number.innerText
      );
    }
  });

  if (item.product_details.selected_qty.unit === "kg") {
    total_qty.innerHTML = `${(
      item.product_details.selected_qty.qty * item.quantity
    ).toFixed(1)} kg`;
  }

  if (item.product_details.selected_qty.unit === "gm") {
    if (item.product_details.selected_qty.qty * item.quantity < 1000) {
      total_qty.innerHTML = `${
        item.product_details.selected_qty.qty * item.quantity
      } gm`;
    } else if (item.product_details.selected_qty.qty * item.quantity >= 1000) {
      total_qty.innerHTML = `${
        (item.product_details.selected_qty.qty * item.quantity) / 1000
      } kg`;
    }
  }

  if (item.product_details.selected_qty.unit === "nos") {
    total_qty.innerHTML = `${item.quantity} nos`;
  }

  if (item.product_details.selected_qty.unit === "pkt") {
    total_qty.innerHTML = `${item.quantity} pkt`;
  }

  const td_subtotal = document.createElement("td");
  td_subtotal.setAttribute("class", "get_subtotal");
  td_subtotal.innerHTML = `₹${
    item.product_details.selected_qty.rs * item.quantity
  }`;
  cart_tr.appendChild(td_subtotal);

  const td_remove = document.createElement("td");
  cart_tr.appendChild(td_remove);

  const td_delete = document.createElement("i");
  td_delete.setAttribute("class", "fa-solid fa-trash");
  td_delete.onclick = () => deletecartitem(index);
  td_remove.appendChild(td_delete);

  td_input.addEventListener("click", () => {
    cart_items.find((obj, index_num) => {
      if (item.cart_item_id === obj.cart_item_id) {
        const updatedObj = { ...obj }; // Create a copy of the object

        updatedObj.quantity = qty_number.innerText;

        cart_items[index_num] = updatedObj; // Replace the original object with the updated object

        localStorage.setItem("cart_items", JSON.stringify(cart_items));

        cart_append_div.innerHTML = "";

        check_cart();

        show_total();

        return true; // Return a value to satisfy the requirements of Array.prototype.find()
      }

      return false; // Return a value to satisfy the requirements of Array.prototype.find()
    });
  });

  // check the available quantity

  check_ready();
}

function cart_update_quantity(id, pro_id, qty) {
  const find_pro = product_details.find((obj) => {
    if (pro_id === obj.id) {
      return obj;
    }

    return undefined; // Return a value (e.g., undefined) when the condition is not met
  });

  find_which_unit(id, JSON.stringify(find_pro), qty);
}

function find_which_unit(id, item, qty) {
  cart_items.find((obj) => {
    if (id === obj.cart_item_id) {
      if (obj.product_details.selected_qty.unit === "kg") {
        cart_kg(id, item, qty);
      } else if (obj.product_details.selected_qty.unit === "gm") {
        cart_gm(id, item, qty);
      } else {
        cart_base(id, item, qty);
      }
      return true; // Return a value indicating that the condition is true
    }
    return false; // Return a value indicating that the condition is false
  });
}

// check with kg

function cart_kg(id, item, qty) {
  const par = JSON.parse(item);

  cart_items.find((obj, index) => {
    if (id === obj.cart_item_id) {
      par.quantity.find((qty_obj) => {
        if (obj.product_details.selected_qty.rs === qty_obj.rs) {
          const check = qty * qty_obj.into_gram;

          const updatedObj = { ...obj }; // Create a copy of the object

          if (Number(check) > Number(par.avail_stock.into_gram)) {
            updatedObj.ready_for_checkout = false;

            Notify.error("Required quantity not available");
          } else {
            updatedObj.ready_for_checkout = true;
          }

          cart_items[index] = updatedObj;
        }
        return false; // Return a value indicating that the condition is false
      });
      return true; // Return a value indicating that the condition is true
    }
    return false; // Return a value indicating that the condition is false
  });

  localStorage.setItem("cart_items", JSON.stringify(cart_items));

  check_ready();
}

// check with gm
function cart_gm(id, item, qty) {
  const par = JSON.parse(item);

  cart_items.find((obj, index) => {
    if (id === obj.cart_item_id) {
      par.quantity.find((qty_obj) => {
        if (obj.product_details.selected_qty.rs === qty_obj.rs) {
          const check = qty * qty_obj.qty;

          const updatedObj = { ...obj }; // Create a copy of the object

          if (Number(check) > Number(par.avail_stock.into_gram)) {
            updatedObj.ready_for_checkout = false;

            Notify.error("Required quantity not available");
          } else {
            updatedObj.ready_for_checkout = true;
          }
          cart_items[index] = updatedObj;
        }
        return false; // Return a value indicating that the condition is false
      });
      return true; // Return a value indicating that the condition is true
    }
    return false; // Return a value indicating that the condition is false
  });

  localStorage.setItem("cart_items", JSON.stringify(cart_items));

  check_ready();
}

// check with nos and pkt

function cart_base(id, item, qty) {
  const par = JSON.parse(item);

  cart_items.find((obj, index) => {
    if (id === obj.cart_item_id) {
      par.quantity.find((qty_obj) => {
        if (obj.product_details.selected_qty.rs === qty_obj.rs) {
          const check = qty * qty_obj.qty;

          const updatedObj = { ...obj }; // Create a copy of the object

          if (Number(check) > Number(par.avail_stock.num)) {
            updatedObj.ready_for_checkout = false;

            Notify.error("Required quantity not available");
          } else {
            updatedObj.ready_for_checkout = true;
          }

          cart_items[index] = updatedObj;
        }
        return false; // Return a value indicating that the condition is false
      });
      return true; // Return a value indicating that the condition is true
    }
    return false; // Return a value indicating that the condition is false
  });

  localStorage.setItem("cart_items", JSON.stringify(cart_items));

  check_ready();
}

// delete cart item

function deletecartitem(index) {
  cart_items.splice(index, 1);

  localStorage.setItem("cart_items", JSON.stringify(cart_items));

  cart_append_div.innerHTML = "";

  check_cart();

  show_total();

  cart_count_fun();
}

// show the total

function show_total() {
  // show total logic

  const get_subtotal = document.querySelectorAll(".get_subtotal");

  let total = 0;

  const total_rs_arr = [];

  if (get_subtotal !== null) {
    get_subtotal.forEach((subtotal) => {
      const split_subtotal = subtotal.innerHTML.split("₹");
      const splice_space = split_subtotal.splice(1, 1);
      const join_total = splice_space.join("");
      total_rs_arr.push(join_total);
    });
  }

  if (total_rs_arr != null) {
    total_rs_arr.forEach((total_rs) => {
      total += Number(total_rs);
    });
  }

  document.querySelector(".cart-total").innerHTML = `Total: ₹ ${total}`;
}

function check_ready() {
  let count = 0;

  let check_chekout = 0;

  if (cart_items !== null) {
    cart_items.filter((obj) => {
      if (user_id === obj.user_id) {
        count++;
        return true;
      }
      return false;
    });

    cart_items.filter((obj) => {
      if (user_id === obj.user_id) {
        if (obj.ready_for_checkout) {
          check_chekout++;
          return true;
        }
      }

      return false;
    });

    if (count === check_chekout) {
      elem.classList.remove("disabled");
    } else {
      elem.classList.add("disabled");
    }
  }
}

check_cart();

show_total();

check_ready();

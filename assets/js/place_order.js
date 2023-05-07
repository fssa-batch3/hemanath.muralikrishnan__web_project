let place_order_items = JSON.parse(localStorage.getItem("cart_items"));

let order_histroy = JSON.parse(localStorage.getItem("order_histroy")) ?? [];


let get_place_order_form = document.getElementById("place-order-form");

let now = new Date();

let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);


let today_input = document.getElementById("today");
let tomorrow_input = document.getElementById("tomorrow");

let today_label = document.getElementById("today_label");
let tomorrow_label = document.getElementById("tomorrow_label");


today_label.innerHTML = `${now.toLocaleDateString()}`;
today_input.value = `${now.toLocaleDateString()}`;

// tomorrow date
tomorrow_label.innerHTML = `${tomorrow.toLocaleDateString()}`;
tomorrow_input.value = `${tomorrow.toLocaleDateString()}`;


//creating the input the lable regarding available address
user_records.find(function (obj) {

  if (user_id == obj.user_id) {

    let find_user_address = obj.address;

    if (find_user_address.length === 0) {

      document.querySelector(".append_available_address").innerHTML = `<a href="../profile.html" class="place_order_address_add">Please add address in profile page to checkout</a>`;

      document.querySelector(".checkout_btn").classList.add("disabled");
    }

    else {

      document.querySelector(".checkout_btn").classList.remove("disabled");

      find_user_address.forEach((item, index) => {

        let address_div = document.createElement("div");
        address_div.setAttribute("class", "address_div");
        document.querySelector(".append_available_address").append(address_div);

        let address_input = document.createElement("input");
        address_input.setAttribute("type", "radio");
        address_input.setAttribute("name", "select_address");
        address_input.setAttribute("value", index);
        address_input.setAttribute("id", item.address_id);
        address_input.setAttribute("required", "true");
        address_input.setAttribute("title", "please select address");
        address_div.append(address_input);

        let address_label = document.createElement("label");
        address_label.setAttribute("for", item.address_id);
        address_label.innerHTML = item.street + " " + item.district + " " + item.state + " " + item.pincode;
        address_div.append(address_label);


      });

    }
  }
});


// show the cart items on the place order table

place_order_items.filter(function (obj, index) {

  if (user_id == obj.user_id) {

    append_order_items(obj, index);

  }
});

function append_order_items(item, index) {

  let table_tr = document.createElement("tr");
  document.querySelector(".body_table").append(table_tr);

  let td_pro_detail = document.createElement("td");
  table_tr.appendChild(td_pro_detail);

  let td_pro_div = document.createElement("div");
  td_pro_div.setAttribute("class", "show-order-items");
  td_pro_detail.appendChild(td_pro_div);

  let pro_img = document.createElement("img");
  pro_img.setAttribute("src", `${item.product_details.image.source}`);
  pro_img.setAttribute("alt", `image of ${item.product_details.image.alt}`);
  td_pro_div.appendChild(pro_img);

  let pro_name = document.createElement("p");
  pro_name.innerHTML = `${item.product_details.name.eng}`;
  td_pro_div.appendChild(pro_name);

  let pro_weight = document.createElement("p");
  pro_weight.innerHTML = `Qty: ${item.product_details.selected_qty.qty}${item.product_details.selected_qty.unit}`;
  td_pro_div.appendChild(pro_weight);

  let unit_price_td = document.createElement("td");
  unit_price_td.innerHTML = `₹${item.product_details.selected_qty.rs}`;
  table_tr.appendChild(unit_price_td);

  let qty_td = document.createElement("td");
  qty_td.innerHTML = `${item.quantity}`;
  table_tr.append(qty_td);

  let td_subtotal = document.createElement("td");
  td_subtotal.setAttribute("class", "place-item-money")
  td_subtotal.innerHTML = `₹${item.product_details.selected_qty.rs * item.quantity}`;
  table_tr.appendChild(td_subtotal);
}

// show the total in the summary table

let get_subtotal = document.querySelectorAll(".place-item-money");

let total = 0;

let total_rs_arr = [];

if (get_subtotal != null) {

  for (let i = 0; i < get_subtotal.length; i++) {

    let split_subtotal = get_subtotal[i].innerHTML.split("₹");

    let splice_space = split_subtotal.splice(1, 1);


    let join_total = splice_space.join("");

    total_rs_arr.push(join_total);


  }
}

if (total_rs_arr != null) {

  for (let i = 0; i < total_rs_arr.length; i++) {

    total += Number(total_rs_arr[i]);
  }
}

document.querySelector(".main-total").innerHTML = `Total: ₹ ${total}`;


// place order full logic

let order_array = []

get_place_order_form.addEventListener("submit", function (e) {

  e.preventDefault();

  push_cart_to_order();


  let get_date = document.querySelector('input[name="select_date"]:checked').value;
  let get_day = document.querySelector('input[name="select_date"]:checked').getAttribute("id");


  let get_delivery_address = document.querySelector('input[name="select_address"]:checked').getAttribute("id");
  let delivery_address;

  user_records.find(function (obj) {

    if (user_id == obj.user_id) {

      let find_add = obj.address;

      find_add.find(function (obj) {

        if (get_delivery_address == obj.address_id) {

          delivery_address = obj;

          return delivery_address;
        }
      })
    }
  })

  let get_payment_type = document.querySelector('input[name="payment-type"]:checked').value;

  let order_json = {

    "user_id": user_id,
    "delivery_address": delivery_address,
    "which_day": get_day,
    "which_date": get_date,
    "payment_type": get_payment_type,
    "payment_status": true,
    "order_histroy": order_array,
    "created_date": new Date().toLocaleDateString(),
    "created_time": new Date().toLocaleTimeString(),
    "total_amount": total
  }


  order_histroy.push(order_json);

  localStorage.setItem("order_histroy", JSON.stringify(order_histroy));

  window.location.href = "order_status.html";

});

function push_cart_to_order() {

  place_order_items.filter(function (obj) {

    if (user_id == obj.user_id) {

      order_array.push(obj);

    }

  });

}


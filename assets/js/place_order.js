

let place_order_items = JSON.parse(localStorage.getItem("cart_items"));

// user records json
let user_records = JSON.parse(localStorage.getItem("users"));

// user logged_in value
let user_details = localStorage.getItem("logged_in");

let placed_cart_items = JSON.parse(localStorage.getItem("cart_items"));

let order_histroy = JSON.parse(localStorage.getItem("order_histroy")) ?? [];

let user_id;

if (user_records !== null) {

  user_records.find(function (obj) {

    if (user_details === obj.emailid) {

      user_id = obj.user_id;

      return user_id;


    }
  });
}


let get_place_order_form = document.getElementById("place-order-form");

let now = new Date();

let tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);


let slots = [
  { start: "08:00", end: "11:00", situ: "morning" },
  { start: "12:00", end: "18:00", situ: "afternoon" }
];

// Convert delivery slot times to 24-hour format
for (let i = 0; i < slots.length; i++) {
  slots[i].start = convertTo24HourFormat(slots[i].start);
  slots[i].end = convertTo24HourFormat(slots[i].end);
}

// Function to convert time to 24-hour format
function convertTo24HourFormat(time) {
  let hours = parseInt(time.split(":")[0]);
  let minutes = parseInt(time.split(":")[1]);
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + " " + ampm;
  return formattedTime;
}

// Check if it's still possible to order for today's delivery slots
let todaySlotsAvailable = false;

let lastSlotEndTime = new Date();

let lastSlot = slots[slots.length - 1];


lastSlotEndTime.setHours(lastSlot.end.split(":")[0], lastSlot.end.split(":")[1], 0);
if (now < lastSlotEndTime) {
  todaySlotsAvailable = true;
}


let get_today_label = document.getElementById("today_date");
let get_today_input = document.getElementById("today_input");

let get_tomorrow_label = document.getElementById("tomorrow_date");
let get_tomorrow_input = document.getElementById("tomorrow_input");

//   for today dates
get_today_label.innerHTML = `${now.toLocaleDateString()}`;
get_today_input.value = `${now.toLocaleDateString()}`;

// tomorrow date
get_tomorrow_label.innerHTML = `${tomorrow.toLocaleDateString()}`;
get_tomorrow_input.value = `${tomorrow.toLocaleDateString()}`;

// for today slots
if (todaySlotsAvailable) {

  alert("hi");

  for (let i = 0; i < slots.length; i++) {

    let div_for_slot = document.createElement("div");
    div_for_slot.setAttribute("class", "today_div_for_slot");
    document.querySelector(".append_today_slots").append(div_for_slot);

    let today_slot_input = document.createElement("input");
    today_slot_input.setAttribute("type", "radio");
    today_slot_input.setAttribute("id", `today ${slots[i].situ}`);
    today_slot_input.setAttribute("name", "select_today_slot");
    today_slot_input.setAttribute("value", `${slots[i].start + " - " + slots[i].end}`);
    div_for_slot.appendChild(today_slot_input);

    let today_input_label = document.createElement("label");
    today_input_label.setAttribute("for", `today ${slots[i].situ}`);
    today_input_label.innerHTML = `${slots[i].start + " - " + slots[i].end}`
    div_for_slot.appendChild(today_input_label);
  }
}

else {
  document.querySelector(".today-cont").style.display = "none";
}


//   for tomorrow slots

for (let i = 0; i < slots.length; i++) {

  let div_for_slot = document.createElement("div");
  div_for_slot.setAttribute("class", "tomorrow_div_for_slot")
  document.querySelector(".append_tomorrow_slots").append(div_for_slot);

  let tomorrow_slot_input = document.createElement("input");
  tomorrow_slot_input.setAttribute("type", "radio");
  tomorrow_slot_input.setAttribute("id", `tomorrow  ${slots[i].situ}`);
  tomorrow_slot_input.setAttribute("name", "select_tomorrow_slot");
  tomorrow_slot_input.setAttribute("value", `${slots[i].start + " - " + slots[i].end}`);
  div_for_slot.appendChild(tomorrow_slot_input);

  let tomorrow_input_label = document.createElement("label");
  tomorrow_input_label.setAttribute("for", `tomorrow  ${slots[i].situ}`);
  tomorrow_input_label.innerHTML = `${slots[i].start + " - " + slots[i].end}`
  div_for_slot.appendChild(tomorrow_input_label);
}




//   logic for the selected input 
get_today_input.addEventListener("click", function (e) {

  document.querySelector(".append_today_slots").classList.remove("toggle_div");

  document.querySelector(".append_tomorrow_slots").classList.add("toggle_div");

  let remove_get_inputs = document.querySelectorAll('input[type="radio"][name="select_tomorrow_slot"]');

  remove_get_inputs.forEach(item => {

    item.removeAttribute("required");

    console.log(item);


  })

  let get_inputs = document.querySelectorAll('input[type="radio"][name="select_today_slot"]');

  get_inputs.forEach(item => {

    item.setAttribute("required", true);


  });

});

get_tomorrow_input.addEventListener("click", function (e) {

  document.querySelector(".append_tomorrow_slots").classList.remove("toggle_div");

  document.querySelector(".append_today_slots").classList.add("toggle_div");

  let remove_get_inputs = document.querySelectorAll('input[type="radio"][name="select_today_slot"]');

  remove_get_inputs.forEach(item => {

    item.removeAttribute("required");

  });

  let get_inputs = document.querySelectorAll('input[type="radio"][name="select_tomorrow_slot"]');

  get_inputs.forEach(item => {

    item.setAttribute("required", true);

  });
});



//creating the input the lable regarding available address
user_records.find(function (obj) {

  if (user_id == obj.user_id) {

    let find_user_address = obj.address;

    if (find_user_address.length === 0) {

      document.querySelector(".append_available_address").innerHTML = `<a href="../profile.html" class="place_order_address_add">Please add address in profile page</a>`
    }

    else {
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


let order_array = []

get_place_order_form.addEventListener("submit", function (e) {

  e.preventDefault();

  place_order_items.filter(function (obj) {

    if (user_id == obj.user_id) {

      order_array.push(obj);

    }

  });

  let get_date;

  let get_situ;

  if(get_today_input.checked){

    get_date =  document.querySelector('input[type="radio"][name="select_today_slot"]:checked').value;

    get_situ =  document.querySelector('input[type="radio"][name="select_today_slot"]:checked').getAttribute("id");

  }

  else if(get_tomorrow_input.checked){

   get_date =  document.querySelector('input[type="radio"][name="select_tomorrow_slot"]:checked').value;

    get_situ = document.querySelector('input[type="radio"][name="select_tomorrow_slot"]:checked').getAttribute("id");


  }


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

    "user_id" : user_id,
    "delivery_address" : delivery_address,
    "which_day" : get_situ,
    "which_date" : get_date,
    "payment_type": get_payment_type,
    "payment_status" : true,
    "order_histroy" : order_array,
    "created_date" : new Date().toLocaleDateString(),
    "created_time" : new Date().toLocaleTimeString(),
    "total_amount" : total
  }
  

  order_histroy.push(order_json);

  localStorage.setItem("order_histroy", JSON.stringify(order_histroy));

  window.location.href = "order_status.html";

});

document.querySelector(".append_today_slots").classList.add("toggle_div");

document.querySelector(".append_tomorrow_slots").classList.add("toggle_div");
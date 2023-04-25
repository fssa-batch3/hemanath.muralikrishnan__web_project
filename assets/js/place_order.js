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


// creating elements for today and tomorrow date
let create_current_date = new Date();
let this_month = create_current_date.getMonth() + 1;
let this_year = create_current_date.getFullYear();
let today_date = create_current_date.getDate();
let tomorrow_date = create_current_date.getDate()+1;

let one_current_date = `${this_month}/${today_date}/${this_year}`;

let two_current_date = `${this_month}/${tomorrow_date}/${this_year}`;




let today_date_div = document.createElement("div");
today_date_div.setAttribute("class", "today_date_div");
document.querySelector(".dates-cont").append(today_date_div);

let today_input_radio = document.createElement("input");
today_input_radio.setAttribute("type", "radio");
today_input_radio.setAttribute("name", "select-date");
today_input_radio.setAttribute("id", "today");
today_input_radio.setAttribute("value", one_current_date);
today_input_radio.setAttribute("required", "true");
today_date_div.append(today_input_radio);

let today_input_label = document.createElement("label");
today_input_label.setAttribute("for", "today");
today_input_label.innerHTML = one_current_date
today_date_div.append(today_input_label);

let tomorrow_input_radio = document.createElement("input");
tomorrow_input_radio.setAttribute("type", "radio");
tomorrow_input_radio.setAttribute("name", "select-date");
tomorrow_input_radio.setAttribute("id", "tomorrow");
tomorrow_input_radio.setAttribute("value", two_current_date);
tomorrow_input_radio.setAttribute("required", "true");
today_date_div.append(tomorrow_input_radio);

let tomorrow_input_label = document.createElement("label");
tomorrow_input_label.setAttribute("for", "tomorrow");
tomorrow_input_label.innerHTML = two_current_date;
today_date_div.append(tomorrow_input_label);


//creating the input the lable regarding available address

user_records.find(function(obj){

    if(user_id == obj.user_id){

       let find_user_address = obj.address;

       if(find_user_address.length===0){
       
            document.querySelector(".append_available_address").innerHTML = `<a href="../profile.html" class="place_order_address_add">Please add address in profile page</a>`
       }

       else {
        find_user_address.forEach((item,index) => {
            
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

place_order_items.filter(function(obj,index){

    if(user_id == obj.user_id){

        append_order_items(obj,index);

    }
});

function append_order_items(item,index){
    
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
    td_subtotal.innerHTML= `₹${item.product_details.selected_qty.rs*item.quantity}`;
    table_tr.appendChild(td_subtotal);
}

let get_subtotal = document.querySelectorAll(".place-item-money");

let total=0;

let total_rs_arr = [];

if(get_subtotal !=null){

for(let i=0; i < get_subtotal.length; i++){

   let split_subtotal = get_subtotal[i].innerHTML.split("₹");

    let splice_space = split_subtotal.splice(1,1);

   
    let join_total = splice_space.join("");
    
    total_rs_arr.push(join_total);


}
}

if(total_rs_arr !=null){

    for(let i=0; i < total_rs_arr.length; i++){

        total += Number(total_rs_arr[i]);
    }
}

document.querySelector(".main-total").innerHTML = `Total: ₹ ${total}`;


let order_array = []

get_place_order_form.addEventListener("submit", function(e){

    e.preventDefault();


   place_order_items.filter(function(obj){

    if(user_id == obj.user_id){

      order_array.push(obj);

    }

   });

   let get_delivery_date = document.querySelector('input[name="select-date"]:checked').value;
   let get_day_of_delivery = document.querySelector('input[name="select-date"]:checked').getAttribute("id");


   let get_delivery_time = document.querySelector('input[name="select_time"]:checked').value;
   let get_delivery_situ = document.querySelector('input[name="select_time"]:checked').getAttribute("id");


   let get_delivery_address = document.querySelector('input[name="select_address"]:checked').getAttribute("id");
   let delivery_address;

   user_records.find(function(obj){

    if(user_id == obj.user_id){

        let find_add = obj.address;

        find_add.find(function(obj){

            if(get_delivery_address == obj.address_id){

                delivery_address = obj;
                
                return delivery_address;
            }
        })
    }
   })
   
   let get_payment_type = document.querySelector('input[name="payment-type"]:checked').value;

   console.log(get_delivery_date);
   console.log(get_day_of_delivery);

   console.log(get_delivery_time);
   console.log(get_delivery_situ);

   console.log(delivery_address);
   console.log(get_payment_type);


  

});
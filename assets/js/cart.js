// user records json
let user_records = JSON.parse(localStorage.getItem("users"));

// user logged_in value
let user_details = localStorage.getItem("logged_in");


let product_details = JSON.parse(localStorage.getItem("product_list"));

let user_id;

if(user_records !== null){

user_records.find(function (obj) {

    if (user_details === obj.emailid) {

        user_id = obj.user_id;

        return user_id;


    }
});
}

let cart_append_div = document.querySelector(".body_table");


let cart_items = JSON.parse(localStorage.getItem("cart_items"));

let elem = document.querySelector(".checkout-btn");


function check_cart(){

    let wish_pro_count = 0;
    
    let user_pro_check = false;
    
    if(cart_items !== null){
    
        cart_items.find(function(obj){
    
        if(user_id === obj.user_id){
    
            user_pro_check = true;
        }
    
        return user_pro_check;
    })
    
    }
    
    if(user_pro_check){
    
        cart_items.filter(function (obj,index) {
        
            if (user_id === obj.user_id) {
    
                cart_list(obj,index);
    
                wish_pro_count++;
    
                return wish_pro_count;
            }
    
        })
    }
    
    else {
    
        document.querySelector(".table__body").style.display="none";

        document.querySelector(".show-total").style.display="none"

        document.querySelector(".cart-main").innerHTML = `<h1 class="notify-user">No Cart items</h1>`
    }
}

function cart_list(item,index){

    let cart_tr = document.createElement("tr");
    cart_append_div.appendChild(cart_tr);

    let cart_td_for_img = document.createElement("td");
    cart_tr.appendChild(cart_td_for_img);

    let pro_img = document.createElement("img");
    pro_img.setAttribute("src", `${item.product_details.image.source}`);
    pro_img.setAttribute("alt", `image of " + ${item.product_details.image.alt}`);
    cart_td_for_img.appendChild(pro_img);

    let pro_details_div = document.createElement("div");
    pro_details_div.setAttribute("class","cart_item_detail");
    cart_td_for_img.appendChild(pro_details_div);

    let p_one = document.createElement("p");
    p_one.innerHTML = `${item.product_details.name.eng}`;
    pro_details_div.appendChild(p_one);

    let p_two = document.createElement("p");
    p_two.innerHTML = `<b>Qty:</b> ${item.product_details.selected_qty.qty}${item.product_details.selected_qty.unit}`;
    pro_details_div.appendChild(p_two);

    let td_unit_price = document.createElement("td");
    td_unit_price.innerHTML = `₹${item.product_details.selected_qty.rs}`;
    cart_tr.appendChild(td_unit_price);

    let td_input = document.createElement("td");
    cart_tr.appendChild(td_input);

    let td_qty_div = document.createElement("div");
    td_qty_div.setAttribute("class", "td_qty");
    td_input.appendChild(td_qty_div);

    let qty_value = `${item.quantity}`;

    let qty_plus_value;

    let qty_minus_value;
   
    let qty_minus = document.createElement("div");
    qty_minus.innerText = "-";
    qty_minus.className = "qty-minus";
    td_qty_div.append(qty_minus);


    let qty_number = document.createElement("div");
    qty_number.innerText = `${item.quantity}`;
    qty_number.className = "qty-number";
    td_qty_div.append(qty_number);


    let qty_plus = document.createElement("div");
    qty_plus.innerText = "+";
    qty_plus.className = "qty-plus";
    td_qty_div.append(qty_plus);

    qty_plus.addEventListener("click", function (e) {
        qty_value++;
        qty_plus_value = qty_value;
        qty_number.innerText = qty_plus_value;

        updatequantity();

    });

    qty_minus.addEventListener("click", function (e) {
        if (qty_value > 1) {
            qty_value--;
            qty_minus_value = qty_value
            qty_number.innerText = qty_minus_value;

            updatequantity();

        }
    });


    let td_subtotal = document.createElement("td");
    td_subtotal.setAttribute("class", "get_subtotal");
    td_subtotal.innerHTML = `₹${item.product_details.selected_qty.rs*item.quantity}`;
    cart_tr.appendChild(td_subtotal);

    let td_remove = document.createElement("td");
    td_remove.innerHTML = `<i class="fa-solid fa-trash" onclick="deletecartitem(${index})"></i>`;
    cart_tr.appendChild(td_remove);

    td_input.addEventListener("click", function(e){

       cart_items.find(function(obj){

        if(item.cart_item_id == obj.cart_item_id){

           obj.quantity =  qty_number.innerText;

           localStorage.setItem("cart_items", JSON.stringify(cart_items));

           cart_append_div.innerHTML = "";

           check_cart();

           show_total();
        }
       })
      
    });

   
    // check the available quantity

    function updatequantity() {

        let after_rs = item.product_details.selected_qty.rs;

        let selected_qunt = qty_number.innerText;

        product_details.find(function (obj) {

            if (obj.id == item.cart_product_id) {

                let find_qty = obj.quantity;

                find_qty.find(function (qty_obj) {

                    if (after_rs == qty_obj.rs) {

                        if (qty_obj.unit == "kg") {

                            let check = selected_qunt * qty_obj.into_gram;

                            if (Number(check) > Number(obj.avail_stock.into_gram)) {

                                item.ready_for_checkout  = false;

                                Notify.error("Required quantity not available");

                            }

                            else {

                                item.ready_for_checkout = true;


                            }
                        }
                        else if (qty_obj.unit == "gm") {

                            let check = selected_qunt * qty_obj.qty;

                            if (Number(check) > Number(obj.avail_stock.into_gram)) {

                                item.ready_for_checkout  = false;

                                Notify.error("Required quantity not available");

                            }

                            else {

                                item.ready_for_checkout = true;
                            }
                        }

                        else if((qty_obj.unit == "nos")||(qty_obj.unit == "pkt")){

                            let check = selected_qunt * qty_obj.qty;

                            if (Number(check) > Number(obj.avail_stock.num)) {

                                item.ready_for_checkout  = false;

                                Notify.error("Required quantity not available");

                            }

                            else {

                                item.ready_for_checkout = true;
                            }

                        }

                    }
                });

            }

            localStorage.setItem("cart_items", JSON.stringify(cart_items));
        });

    }

    check_ready();
}





function deletecartitem(index){

    cart_items.splice(index,1);

    localStorage.setItem("cart_items", JSON.stringify(cart_items));

    cart_append_div.innerHTML = "";

    check_cart();

    show_total();
}


function show_total(){

// show total logic

let get_subtotal = document.querySelectorAll(".get_subtotal");

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

document.querySelector(".cart-total").innerHTML = `Total: ₹ ${total}`;

}

check_cart();

show_total();


function check_ready(){

    let count = 0;

    let check_chekout = 0;

    cart_items.filter(function(obj){

        if(user_id == obj.user_id){

            count++;
            
        }
    });

    cart_items.filter(function(obj){

        if(user_id == obj.user_id){

           if(obj.ready_for_checkout==true){

            check_chekout++;
           }
            
        }
    });
    

    if(count == check_chekout){

        elem.classList.remove("disabled");

    }

    else {

        elem.classList.add("disabled");
    }
    
}


check_ready();










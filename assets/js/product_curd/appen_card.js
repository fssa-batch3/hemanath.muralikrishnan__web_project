const root_loc = window.location.origin;

let cart_items = JSON.parse(localStorage.getItem("cart_items")) ?? [];

let product_json = JSON.parse(localStorage.getItem("product_list"));

// get the user id

const logged_email_one = localStorage.getItem("logged_in");

let user_records_one = JSON.parse(localStorage.getItem("users"));

let user_id_one;

if (user_records_one !== null) {

    user_records_one.find(function (obj) {

        if (logged_email_one === obj.emailid) {

            user_id_one = obj.user_id;

            return user_id_one;


        }
    });

}


function list_products(array = []) {

    document.querySelector(".append_the_products").innerHTML = "";

    array.forEach((item, index) => {

        // product_container_div
        let product_container_div = document.createElement("div");
        product_container_div.setAttribute("class", "product-container");


        // product_main_div
        let product_main_div = document.createElement("div");
        product_main_div.setAttribute("class", "product-main");
        product_container_div.append(product_main_div);

        let product_id = item["id"];
        let product_cat = item["category"]["id"]
        let href_link = `${root_loc}/pages/product_details/details.html?` + "id=" + product_id + "&" + "cat=" + product_cat;


        // indv product link
        let indv_product_link = document.createElement("a");
        indv_product_link.setAttribute("href", href_link);
        product_main_div.append(indv_product_link);


        // product_image_div
        let product_image_div = document.createElement("div");
        product_image_div.setAttribute("class", "product-img");
        indv_product_link.append(product_image_div);

        //product_image_creating
        let product_image_src = document.createElement("img");
        product_image_src.setAttribute("src", item["image"]["source"]);
        product_image_src.setAttribute("alt", item["image"]["alt"]);
        product_image_div.append(product_image_src);

        // product category title
        let product_cat_title = document.createElement("p");
        product_cat_title.setAttribute("class", "category-title");
        product_cat_title.innerHTML = item["category"]["name"];
        indv_product_link.append(product_cat_title);

        // product_name_div
        let product_name_div = document.createElement("div");
        product_name_div.setAttribute("class", "product-name");
        indv_product_link.append(product_name_div);

        // product_names

        // product eng name
        let product_eng_name_p = document.createElement("p");
        product_eng_name_p.setAttribute("class", "product_english_name");
        product_eng_name_p.innerText = item["name"]["eng"];
        product_name_div.append(product_eng_name_p);

        // product tam name
        let product_tam_name_p = document.createElement("p");
        product_tam_name_p.innerText = item["name"]["tam"];
        product_name_div.append(product_tam_name_p);



        let select_tag = document.createElement("select");
        select_tag.setAttribute("class", "amount_dropdown");
        product_main_div.append(select_tag);


        let list_qty = item.quantity;

        list_qty.forEach(data => {

            let option_tag = document.createElement("option");
            option_tag.setAttribute("value", data.rs);
            option_tag.innerHTML = data.text;
            select_tag.appendChild(option_tag);
        })


        // amount
        let amount = document.createElement("div");
        amount.className = "amount";
        amount.innerText = "Rs. " + item.quantity[0].rs;
        product_main_div.append(amount);


        select_tag.addEventListener("change", function (e) {

            let selectvalue = select_tag.value;
            amount.innerText = "Rs. " + selectvalue;

        })


        let qty_value = 1;

        let qty_plus_value;

        let qty_minus_value;


        // quantity cart div
        let quantity_cart_div = document.createElement("div");
        quantity_cart_div.setAttribute("class", "qty-cat");
        product_main_div.append(quantity_cart_div);

        let qty_div = document.createElement("div");
        qty_div.setAttribute("class", "qty");
        quantity_cart_div.append(qty_div);

        let qty_minus = document.createElement("div");
        qty_minus.innerHTML = `<img src="../../assets/images/minus-sign.png" alt="minus-sing">`;
        qty_minus.className = "qty-minus";
        qty_div.append(qty_minus);


        let qty_number = document.createElement("div");
        qty_number.innerText = "1";
        qty_number.className = "qty-number";
        qty_div.append(qty_number);


        let qty_plus = document.createElement("div");
        qty_plus.innerHTML = `<img src="../../assets/images/add.png" alt="add-sign">`;
        qty_plus.className = "qty-plus";
        qty_div.append(qty_plus);


        // add button div

        let add_to_cart = document.createElement("div");
        add_to_cart.setAttribute("class", "fa-solid fa-cart-plus list_cart");
        quantity_cart_div.append(add_to_cart);


        qty_plus.addEventListener("click", function (e) {

            let elem = document.querySelectorAll(".list_cart");
            qty_value++;
            qty_plus_value = qty_value;
            qty_number.innerText = qty_plus_value;

            updatequantity(select_tag.value, JSON.stringify(item), qty_number.innerText, elem, index);


        });

        qty_minus.addEventListener("click", () => {

            if (qty_value > 1) {
                let elem = document.querySelectorAll(".list_cart");
                qty_value--;
                qty_minus_value = qty_value;
                qty_number.innerText = qty_minus_value;

                updatequantity(select_tag.value, JSON.stringify(item), qty_number.innerText, elem, index);
            }
        });


        add_to_cart.addEventListener('click', function (e) {

            // pass the parameters to the add to cart functionality

            get_cart_ele(select_tag.value, JSON.stringify(item), qty_number.innerText);

        })

        document.querySelector(".append_the_products").append(product_container_div);

    });

}


function updatequantity(rs, item, qty, elem, index) {

    let par = JSON.parse(item);

    par["quantity"].find(function (obj) {

        if (rs === obj.rs) {

            if (obj.unit === "kg") {

                checkwithkg(rs, item, qty, elem, index);
            }

            else if (obj.unit === "gm") {

                checkwithgm(rs, item, qty, elem, index);
            }

            else{
                checkwithbase(rs, item, qty, elem, index);
            }

        }


    })

}

// check with kig
function checkwithkg(rs, item, qty, elem, index) {

    let par = JSON.parse(item);

    par["quantity"].find(function (obj) {

        if (rs === obj.rs) {

                let check = qty * obj.into_gram;

                if (Number(check) > Number(par.avail_stock.into_gram)) {

                    elem[index].classList.add("disabled");

                    Notify.error("Required quantity not available");

                }

                else {

                    elem[index].classList.remove("disabled");

                }

        }

    });
}

// check with gm
function checkwithgm(rs, item, qty, elem, index) {

    let par = JSON.parse(item);

    par["quantity"].find(function (obj) {

        if (rs === obj.rs) {

                let check = qty * obj.qty;

                if (Number(check) > Number(par.avail_stock.into_gram)) {

                    elem[index].classList.add("disabled");

                    Notify.error("Required quantity not available");

                }

                else {

                    elem[index].classList.remove("disabled");

                }

        }

    });
}


// check with base 

function checkwithbase(rs, item, qty, elem, index) {

    let par = JSON.parse(item);

    par["quantity"].find(function (obj) {

        if (rs === obj.rs) {

                let check = qty * obj.qty;

                if (Number(check) > Number(par.avail_stock.num)) {

                    elem[index].classList.add("disabled");

                    Notify.error("Required quantity not available");

                }

                else {

                    elem[index].classList.remove("disabled");

                }

        }

    });

}


// check the available quantity

// function updatequantitytwo() {



//     let rs = amount.innerText.split(" ");
//     let after_rs = rs.splice(1, 1);

//     let selected_qunt = qty_number.innerText;

//     product_json.find(function (obj) {

//         if (obj.id == item.id) {

//             let find_qty = obj.quantity;

//             find_qty.find(function (qty_obj) {

//                 if (after_rs[0] == qty_obj.rs) {

//                     if (qty_obj.unit == "kg") {

//                         let check = selected_qunt * qty_obj.into_gram;

//                         if (Number(check) > Number(obj.avail_stock.into_gram)) {

//                             elem[index].classList.add("disabled");

//                             Notify.error("Required quantity not available");

//                         }

//                         else {

//                             elem[index].classList.remove("disabled");

//                         }
//                     }
//                     else if (qty_obj.unit == "gm") {

//                         let check = selected_qunt * qty_obj.qty;

//                         if (Number(check) > Number(obj.avail_stock.into_gram)) {

//                             elem[index].classList.add("disabled");

//                             Notify.error("Required quantity not available");

//                         }

//                         else {

//                             elem[index].classList.remove("disabled");
//                         }
//                     }

//                     else if ((qty_obj.unit == "nos") || (qty_obj.unit == "pkt")) {

//                         let check = selected_qunt * qty_obj.qty;

//                         if (Number(check) > Number(obj.avail_stock.num)) {

//                             elem[index].classList.add("disabled");

//                             Notify.error("Required quantity not available");

//                         }

//                         else {

//                             elem[index].classList.remove("disabled");
//                         }

//                     }

//                 }
//             });

//         }
//     });

// }


let cart_check = true;

function get_cart_ele(pro_rs, item, no_qty) {

    let to_json = JSON.parse(item);

    if (user_id_one !== undefined) {

        cart_check = true;

        check_qty(pro_rs, item);

    }
    else {

        cart_check = false;

        Notify.error("Please login to add products to cart");

        return cart_check;

    }

    if (cart_check) {

        to_json["quantity"].find(function (qty_obj) {

            if (pro_rs == qty_obj.rs) {

                let cart_obj = {
                    "cart_product_id": to_json.id,
                    "cart_item_id": Math.random().toString(16).slice(2),
                    "user_id": user_id,
                    "product_details": { "image": to_json.image, "name": to_json.name, "farmer": to_json.farmer, "selected_qty": qty_obj },
                    "quantity": no_qty,
                    "cart_pro_category": to_json.category,
                    "product_added_date": new Date().toLocaleDateString(),
                    "product_added_time": new Date().toLocaleTimeString(),
                    "ready_for_checkout": true
                }

                cart_items.push(cart_obj);

                Notify.success("Item added to cart " + to_json.name.eng + " " + qty_obj.qty + qty_obj.unit);

                localStorage.setItem("cart_items", JSON.stringify(cart_items));
            }
        });

        cart_count_fun();
    }
}

// check in the cart the selected the cart qty already added

function check_qty(pro_rs, item) {

    let par = JSON.parse(item);

    let cart_item_arr = JSON.parse(localStorage.getItem("cart_items"));

    if (cart_item_arr != null) {
        cart_item_arr.find(function (obj) {

            if (user_id_one === obj.user_id) {

                if (par["id"] === obj.cart_product_id) {

                    if (pro_rs === obj["product_details"]["selected_qty"]["rs"]) {

                        Notify.error("Item already added to cart " + obj["product_details"]["name"]["eng"] + " " + obj["product_details"]["selected_qty"]["qty"] + obj["product_details"]["selected_qty"]["unit"]);

                        cart_check = false;

                        return cart_check;

                    }

                }
            }

        });
    }


}
let product_details = JSON.parse(localStorage.getItem("product_list"));

let cart_items = JSON.parse(localStorage.getItem("cart_items")) ?? [];

// user records json
let user_records = JSON.parse(localStorage.getItem("users"));

// user logged_in value
let user_details = localStorage.getItem("logged_in");

let user_id;

if (user_records !== null) {

    user_records.find(function (obj) {

        if (user_details === obj.emailid) {

            user_id = obj.user_id;

            return user_id;

        }
    });
}

let mobile_filter = document.getElementById("mobile_filter");
let show_mobile_filter = document.querySelector(".items");

let mobile_sort_by = document.getElementById("mobile_sort_by");
let show_sort_by = document.querySelector(".sort-items");

// show_mobile_filter.style.display="none";

// show_sort_by.style.display="none";


mobile_filter.addEventListener("click", function(e){

    if((show_mobile_filter.style.display)=="none"){
        show_mobile_filter.style.display="block";
    }
    else {
        show_mobile_filter.style.display="none";
    }
})


mobile_sort_by.addEventListener("click", function(e){

    if((show_sort_by.style.display)=="none"){
        show_sort_by.style.display="block";
    }
    else {
        show_sort_by.style.display="none";
    }
})



let product_container_div;
let product_main_div;

let indv_product_link;

let product_image_div;
let product_image_src;
let product_cat_title;

let product_name_div;
let product_eng_name_p;
let product_tam_name_p;


let quantity_cart_div;
let add_to_cart;

const url = window.location.search;                // ?name=Arun
const urlParams = new URLSearchParams(url);        // converting string into key value pair
const product_cat = urlParams.get("cat");

let url_params_products;

let filter_array = [];

let url_products = [];

if (product_cat === "00") {

    list_products(product_details);
}

else {
    product_details.filter(function (item) {

        if ((item["category"]["id"] === product_cat) && (item["status"])) {

            url_products.push(item);

        }

        list_products(url_products);
    });

}

function list_products(array = []) {

    document.querySelector(".products-list-container").innerHTML = "";

    array.forEach((item) => {

        // product_container_div
        product_container_div = document.createElement("div");
        product_container_div.setAttribute("class", "product-container");


        // product_main_div
        product_main_div = document.createElement("div");
        product_main_div.setAttribute("class", "product-main");
        product_container_div.append(product_main_div);

        let product_id = item["id"];
        let product_cat = item["category"]["id"]
        let href_link = "../product_details/details.html?" + "id=" + product_id + "&" + "cat=" + product_cat;


        // indv product link
        indv_product_link = document.createElement("a");
        indv_product_link.setAttribute("href", href_link);
        product_main_div.append(indv_product_link);


        // product_image_div
        product_image_div = document.createElement("div");
        product_image_div.setAttribute("class", "product-img");
        indv_product_link.append(product_image_div);

        //product_image_creating
        product_image_src = document.createElement("img");
        product_image_src.setAttribute("src", item["image"]["source"]);
        product_image_src.setAttribute("alt", item["image"]["alt"]);
        product_image_div.append(product_image_src);

        // product category title
        product_cat_title = document.createElement("p");
        product_cat_title.setAttribute("class", "category-title");
        product_cat_title.innerHTML = item["category"]["name"];
        indv_product_link.append(product_cat_title);

        // product_name_div
        product_name_div = document.createElement("div");
        product_name_div.setAttribute("class", "product-name");
        indv_product_link.append(product_name_div);

        // product_names

        // product eng name
        product_eng_name_p = document.createElement("p");
        product_eng_name_p.setAttribute("class", "product_english_name");
        product_eng_name_p.innerText = item["name"]["eng"];
        product_name_div.append(product_eng_name_p);

        // product tam name
        product_tam_name_p = document.createElement("p");
        product_tam_name_p.innerText = item["name"]["tam"];
        product_name_div.append(product_tam_name_p);

        // dropdown_div
        let dropdown_div = document.createElement("div");
        dropdown_div.className = "dropdown";
        product_main_div.appendChild(dropdown_div);

        // dropdown_header
        let dropdown_header = document.createElement("div");
        dropdown_header.className = "dropdown-header";
        dropdown_header.innerHTML = item["quantity"][0].text + '<i class="fas fa-caret-down"></i>';
        dropdown_div.appendChild(dropdown_header);
        // dropdown_options
        let dropdown_options = document.createElement("div");
        dropdown_options.className = "dropdown-options";
        dropdown_div.appendChild(dropdown_options);

        let selectedValue;

        for (let item_qty of item.quantity) {

            let option = item_qty;

            let dropdown_option = document.createElement("div");
            dropdown_option.className = "dropdown-option";
            dropdown_option.innerText = option.text;

            dropdown_option.addEventListener("click", function () {

                selectedValue = option.rs;
                amount.innerText = "Rs. " + selectedValue;
                dropdown_header.innerHTML = option.text + '<i class="fas fa-caret-down"></i>';
                dropdown_options.classList.remove("show");

            });

            dropdown_options.appendChild(dropdown_option);

        }

        // amount
        let amount = document.createElement("div");
        amount.className = "amount";
        amount.innerText = "Rs. " + item.quantity[0].rs;
        product_main_div.append(amount);

        // toggle dropdown options on header click
        dropdown_header.addEventListener("click", function () {
            dropdown_options.classList.toggle("show");
        });


        let qty_value = 1;

        let qty_plus_value;

        let qty_minus_value;


        // quantity cart div
        quantity_cart_div = document.createElement("div");
        quantity_cart_div.setAttribute("class", "qty-cat");
        product_main_div.append(quantity_cart_div);

        qty_div = document.createElement("div");
        qty_div.setAttribute("class", "qty");
        quantity_cart_div.append(qty_div);

        let qty_minus = document.createElement("div");
        qty_minus.innerText = "-";
        qty_minus.className = "qty-minus";
        qty_div.append(qty_minus);


        let qty_number = document.createElement("div");
        qty_number.innerText = "1";
        qty_number.className = "qty-number";
        qty_div.append(qty_number);


        let qty_plus = document.createElement("div");
        qty_plus.innerText = "+";
        qty_plus.className = "qty-plus";
        qty_div.append(qty_plus);

        qty_plus.addEventListener("click", function (e) {
            qty_value++;
            qty_plus_value = qty_value;
            qty_number.innerText = qty_plus_value;

        });

        qty_minus.addEventListener("click", function (e) {
            if (qty_value > 1) {
                qty_value--;
                qty_minus_value = qty_value
                qty_number.innerText = qty_minus_value;
            }
        });




        // add button div

        add_to_cart = document.createElement("div");
        add_to_cart.setAttribute("class", "fa-solid fa-cart-plus");
        quantity_cart_div.append(add_to_cart);

        add_to_cart.addEventListener("click", function (e) {

            if (user_id != null) {

                let rs = amount.innerText.split(" ");
                let after_rs = rs.splice(1, 1);

                let cart_check = true;

                let cart_item_arr = JSON.parse(localStorage.getItem("cart_items"));

                if (cart_item_arr != null) {
                    cart_item_arr.find(function (obj) {

                        if (user_id == obj.user_id) {

                            if (product_id == obj.cart_product_id) {


                                if (after_rs[0] == obj["product_details"]["selected_qty"]["rs"]) {


                                    cart_check = false;

                                    Notify.error("Item already added to cart " + obj["product_details"]["name"]["eng"] + " " + obj["product_details"]["selected_qty"]["qty"] + obj["product_details"]["selected_qty"]["unit"]);

                                    return cart_check;

                                }
                            }
                        }



                    });
                }

                if (cart_check) {
                    product_details.find(function (obj) {

                        if (product_id == obj.id) {

                            let find_qty = obj.quantity;

                            find_qty.find(function (qty_obj) {


                                if (after_rs[0] == qty_obj.rs) {

                                    let cart_obj = {
                                        "cart_product_id": product_id,
                                        "cart_item_id": cart_items.length + Math.random().toString(16).slice(2),
                                        "user_id": user_id,
                                        "product_details": { "image": obj.image, "name": obj.name, "farmer": obj.farmer, "selected_qty": qty_obj },
                                        "quantity": qty_number.innerText,
                                        "cart_pro_category": obj.category
                                    }

                                    cart_items.push(cart_obj);

                                    Notify.success("Item added to cart " + obj.name.eng + " " + qty_obj.qty + qty_obj.unit);

                                    localStorage.setItem("cart_items", JSON.stringify(cart_items));
                                }
                            });

                        }
                    });
                }
            }

            else {
                Notify.error("Please login to add products to cart")
            }

        });


        document.querySelector(".products-list-container").appendChild(product_container_div);

    });



}



let checkboxes = document.querySelectorAll("input[type=checkbox][name=filter_cat]");

checkboxes.forEach(function (checkbox) {


    checkbox.addEventListener('click', function () {

        if (checkbox.checked) {

            filter_array = [];

            let convert_array = Array.from(checkboxes);

            let checked_input = convert_array.filter(i => i.checked);

            let map_input = checked_input.map(i => i.value);

            map_input.forEach(item => {

                product_details.filter(function (obj) {

                    let cat_id = obj.category.id;

                    if (item === cat_id) {

                        filter_array.push(obj);

                        list_products(filter_array);
                    }
                });
            });
        }
        else {
            list_products(product_details);
        }
    });
});


function sortbyatoz() {

    let switching;

    let shouldSwitch;

    let product_container;

    switching = true;

    while (switching) {

        switching = false;

        product_container = document.querySelectorAll(".product-container");

        for (i = 0; i < (product_container.length - 1); i++) {

            shouldSwitch = false;

            if (product_container[i].querySelector(".product_english_name").innerHTML.toLowerCase() > product_container[i + 1].querySelector(".product_english_name").innerHTML.toLowerCase()) {

                shouldSwitch = true;

                break;
            }
        }
        if (shouldSwitch) {

            product_container[i].parentNode.insertBefore(product_container[i + 1], product_container[i]);

            switching = true;
        }
    }


}


function sortbyztoa() {

    let switching;

    let shouldSwitch;

    let product_container;

    switching = true;

    while (switching) {

        switching = false;

        product_container = document.querySelectorAll(".product-container");

        for (i = 0; i < (product_container.length - 1); i++) {

            shouldSwitch = false;

            if (product_container[i].querySelector(".product_english_name").innerHTML.toLowerCase() < product_container[i + 1].querySelector(".product_english_name").innerHTML.toLowerCase()) {

                shouldSwitch = true;

                break;
            }
        }
        if (shouldSwitch) {

            product_container[i].parentNode.insertBefore(product_container[i + 1], product_container[i]);

            switching = true;
        }
    }


}


function sortbycostlowtohigh(){

    let switching;

    let shouldSwitch;

    let product_container;

    switching = true;

    while (switching) {

        switching = false;

        product_container = document.querySelectorAll(".product-container");

        for (i = 0; i < (product_container.length - 1); i++) {

            shouldSwitch = false;

            let one_value = product_container[i].querySelector(".amount").innerHTML.split(" ");
            let two_value = product_container[i + 1].querySelector(".amount").innerHTML.split(" ");


            if (Number(one_value[1]) > Number(two_value[1])) {

                shouldSwitch = true;

                break;
            }
        }
        if (shouldSwitch) {

            product_container[i].parentNode.insertBefore(product_container[i + 1], product_container[i]);

            switching = true;
        }
    }


}

function sortbycosthightolow(){

    let switching;

    let shouldSwitch;

    let product_container;

    switching = true;

    while (switching) {

        switching = false;

        product_container = document.querySelectorAll(".product-container");

        for (i = 0; i < (product_container.length - 1); i++) {

            shouldSwitch = false;

            let one_value = product_container[i].querySelector(".amount").innerHTML.split(" ");
            let two_value = product_container[i + 1].querySelector(".amount").innerHTML.split(" ");


            if (Number(one_value[1]) < Number(two_value[1])) {

                shouldSwitch = true;

                break;
            }
        }
        if (shouldSwitch) {

            product_container[i].parentNode.insertBefore(product_container[i + 1], product_container[i]);

            switching = true;
        }
    }


}

// elements for mobile fiter 






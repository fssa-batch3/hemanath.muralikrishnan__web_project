// product details JSON
let product_details = JSON.parse(localStorage.getItem("product_list"));

// wishlist json
let favourite_list = JSON.parse(localStorage.getItem("wishlist")) ?? [];

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

let cart_items = JSON.parse(localStorage.getItem("cart_items")) ?? [];

const url = window.location.search;                // ?name=Arun
const urlParams = new URLSearchParams(url);        // converting string into key value pair
const product_id = Number(urlParams.get("id"));             // return value of the "name" key
const product_cat = urlParams.get("cat");

let k;
let success = false;
for (k = 0; k < product_details.length; k++) {
    if ((product_id === product_details[k].id) && (product_details[k].status)) {

        success = true;
        break;
    }
}

if (success) {

    // start of left side
    let indv_product_left_side_div;

    let indv_img_div;
    let indv_product_image;

    let indv_product_name_div;
    let product_name_english_p;
    let product_name_tamil_p;

    let indv_rating_part_div;
    let indv_rating_div;


    let healthy_div;

    let heal_div_one;
    let pro_circle_div;
    let pro_circle_p;
    let sci_p_one;

    let heal_div_two;
    let carbo_circle_div;
    let carbo_circle_p;
    let sci_p_two;

    let heal_div_three;
    let kcal_circle_div;
    let kcal_circle_p;
    let sci_p_three;

    // start of right side

    let indv_products_right_side;
    let indv_products_right_side_two;

    let right_side_three_div;

    let indv_category_title_p;

    let indv_farmer_part_div;
    let indv_farmer_img;
    let indv_farmer_p;

    let indv_product_name_english_p;
    let indv_product_name_tamil_p;

    let indv_dropdown_values_div;
    let select_tag;


    let indv_product_price_div;
    let indv_amount_one_p;

    let indv_qty_cat_div;
    let qty_div;

    let indv_add_button_div;
    let indv_add_to_cart;


    let favorite_div;
    let favorite_i;

    let desc_div;
    let desc_cont_div;
    let desc_title_p;
    let desc_content_p;


    // start of left side

    // indv product left side div
    indv_product_left_side_div = document.createElement("div");
    indv_product_left_side_div.setAttribute("class", "indv-products-left-side");
    document.querySelector(".indv-products-cont").append(indv_product_left_side_div);

    // product image div
    indv_img_div = document.createElement("div");
    indv_img_div.setAttribute("class", "indv-img");
    indv_product_left_side_div.append(indv_img_div);

    // product image tag
    indv_product_image = document.createElement("img");
    indv_product_image.setAttribute("src", product_details[k]["image"]["source"]);
    indv_product_image.setAttribute("alt", "image of " + product_details[k]["image"]["alt"]);
    indv_img_div.append(indv_product_image);


    // product name div
    indv_product_name_div = document.createElement("div");
    indv_product_name_div.setAttribute("class", "product-name-rat");
    indv_product_left_side_div.append(indv_product_name_div);

    //english name p
    product_name_english_p = document.createElement("p");
    product_name_english_p.setAttribute("class", "indv-product-title");
    product_name_english_p.innerText = product_details[k]["name"]["eng"];
    indv_product_name_div.append(product_name_english_p);

    //tamil name p
    product_name_tamil_p = document.createElement("p");
    product_name_tamil_p.setAttribute("class", "indv-product-title");
    product_name_tamil_p.innerText = product_details[k]["name"]["tam"];
    indv_product_name_div.append(product_name_tamil_p);

    // indv rating part div
    indv_rating_part_div = document.createElement("div");
    indv_rating_part_div.setAttribute("class", "indv-rating-part");
    indv_product_left_side_div.append(indv_rating_part_div);

    // indv rating div
    indv_rating_div = document.createElement("div");
    indv_rating_div.setAttribute("class", "indv-rating");
    indv_rating_part_div.append(indv_rating_div);



    // healthy div
    healthy_div = document.createElement("div");
    healthy_div.setAttribute("class", "healthy");
    indv_product_left_side_div.append(healthy_div);


    // heal_one div
    heal_div_one = document.createElement("div");
    heal_div_one.setAttribute("class", "heal");
    healthy_div.append(heal_div_one);

    // pro circle div
    pro_circle_div = document.createElement("div");
    pro_circle_div.setAttribute("class", "pro circle");
    heal_div_one.append(pro_circle_div);

    // pro circle p
    pro_circle_p = document.createElement("p");
    pro_circle_p.innerText = product_details[k]["nutritions"]["protein"]["num"] + "g";
    pro_circle_div.append(pro_circle_p);

    // heal one protein
    sci_p_one = document.createElement("p");
    sci_p_one.setAttribute("class", "sci");
    sci_p_one.innerText = "Protein";
    heal_div_one.append(sci_p_one);

    // 

    // heal_two div
    heal_div_two = document.createElement("div");
    heal_div_two.setAttribute("class", "heal");
    healthy_div.append(heal_div_two);

    // pro circle div
    carbo_circle_div = document.createElement("div");
    carbo_circle_div.setAttribute("class", "carbo circle");
    heal_div_two.append(carbo_circle_div);

    // pro circle p
    carbo_circle_p = document.createElement("p");
    carbo_circle_p.innerText = product_details[k]["nutritions"]["carbo"]["num"] + "g";
    carbo_circle_div.append(carbo_circle_p);

    // heal one protein
    sci_p_two = document.createElement("p");
    sci_p_two.setAttribute("class", "sci");
    sci_p_two.innerText = "Carbohydrates";
    heal_div_two.append(sci_p_two);

    //

    // heal_three div
    heal_div_three = document.createElement("div");
    heal_div_three.setAttribute("class", "heal");
    healthy_div.append(heal_div_three);

    // pro circle div
    kcal_circle_div = document.createElement("div");
    kcal_circle_div.setAttribute("class", "kcal circle");
    heal_div_three.append(kcal_circle_div);

    // pro circle p
    kcal_circle_p = document.createElement("p");
    kcal_circle_p.innerText = product_details[k]["nutritions"]["kcal"];
    kcal_circle_div.append(kcal_circle_p);

    // heal one protein
    sci_p_three = document.createElement("p");
    sci_p_three.setAttribute("class", "sci");
    sci_p_three.innerText = "Kcal";
    heal_div_three.append(sci_p_three);

    // start of right side

    // indv products right side
    indv_products_right_side = document.createElement("div");
    indv_products_right_side.setAttribute("class", "indv-products-right-side");
    document.querySelector(".indv-products-cont").append(indv_products_right_side);


    // indv products right side two
    indv_products_right_side_two = document.createElement("div");
    indv_products_right_side_two.setAttribute("class", "indv-products-right-side-two");
    indv_products_right_side.append(indv_products_right_side_two);


    // right side three
    right_side_three_div = document.createElement("div");
    right_side_three_div.setAttribute("class", "right-side-three");
    indv_products_right_side_two.append(right_side_three_div)

    // indv category title
    indv_category_title_p = document.createElement("p");
    indv_category_title_p.setAttribute("class", "indv-category-title")
    indv_category_title_p.innerText = product_details[k]["category"]["name"];
    right_side_three_div.append(indv_category_title_p);

    // indv farmer part
    indv_farmer_part_div = document.createElement("div");
    indv_farmer_part_div.setAttribute("class", "indv-farmer-part");
    right_side_three_div.append(indv_farmer_part_div);

    // indv farmer image
    indv_farmer_img = document.createElement("img");
    indv_farmer_img.setAttribute("src", product_details[k]["farmer"]["image"]["source"]);
    indv_farmer_img.setAttribute("alt", "image of farmer " + product_details[k]["farmer"]["image"]["alt"]);
    indv_farmer_part_div.append(indv_farmer_img);

    // indv farmer name
    indv_farmer_p = document.createElement("p");
    indv_farmer_p.setAttribute("class", "indv-farmer-name");
    indv_farmer_p.innerText = "Farmer - " + product_details[k]["farmer"]["name"];
    indv_farmer_part_div.append(indv_farmer_p);

    // indv product name div
    indv_product_name_div = document.createElement("div");
    indv_product_name_div.setAttribute("class", "indv-product-name");
    right_side_three_div.append(indv_product_name_div);

    // indv product english name
    indv_product_name_english_p = document.createElement("p");
    indv_product_name_english_p.innerText = product_details[k]["name"]["eng"];
    indv_product_name_div.append(indv_product_name_english_p);

    // indv product tamil name
    indv_product_name_tamil_p = document.createElement("p");
    indv_product_name_tamil_p.innerText = product_details[k]["name"]["tam"];
    indv_product_name_div.append(indv_product_name_tamil_p);


    // indv dropdown values 
    indv_dropdown_values_div = document.createElement('div');
    indv_dropdown_values_div.setAttribute("class", "indv-dropdown-values");
    right_side_three_div.append(indv_dropdown_values_div);


    // select tag
    select_tag = document.createElement("select");
    select_tag.setAttribute("id", "mySelect");
    indv_dropdown_values_div.append(select_tag);

    // options creating

    let dropdown_values = product_details[k]["quantity"];

    dropdown_values.forEach((item) => {
        const option = document.createElement("option");
        option.value = item.rs;
        option.text = item.text;
        select_tag.appendChild(option);
    });


    select_tag.addEventListener("change", function () {
        // Get the selected value
        let selectedValue = select_tag.value;

        // Log the selected value to the console
        indv_amount_one_p.innerText = "₹ " + selectedValue;
    });

    // indv product price
    indv_product_price_div = document.createElement("div");
    indv_product_price_div.setAttribute("class", "indv-product-price");
    right_side_three_div.append(indv_product_price_div);

    // indv product price p
    indv_amount_one_p = document.createElement("p");
    indv_amount_one_p.setAttribute("class", "indv-amount-one");
    indv_amount_one_p.innerText = "₹ " + product_details[k]["quantity"][0]["rs"];
    indv_product_price_div.append(indv_amount_one_p);

    let qty_value = 1;
    let qty_plus_value;
    let qty_minus_value;


    indv_qty_cat_div = document.createElement("div");
    indv_qty_cat_div.setAttribute("class", "indv-qty-cat");
    right_side_three_div.append(indv_qty_cat_div);

    qty_div = document.createElement("div");
    qty_div.setAttribute("class", "qty");
    indv_qty_cat_div.append(qty_div);

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

    qty_plus.addEventListener("click", () => {
        qty_value++;
        qty_plus_value = qty_value;
        qty_number.innerText = qty_plus_value;

        updatequantity();
    });

    qty_minus.addEventListener("click", () => {
        if (qty_value > 1) {
            qty_value--;
            qty_minus_value = qty_value;
            qty_number.innerText = qty_minus_value;

            updatequantity();
        }
    });

    // indv add button div
    indv_add_button_div = document.createElement("div");
    indv_add_button_div.setAttribute("class", "indv-add-button");
    indv_qty_cat_div.append(indv_add_button_div);


    indv_add_to_cart = document.createElement("div");
    indv_add_to_cart.setAttribute("class", "fa-solid fa-cart-plus indv-add-to-cart-btn");
    indv_add_button_div.append(indv_add_to_cart);

    // favorite div
    favorite_div = document.createElement("div");
    favorite_div.setAttribute("class", "favorite");
    indv_qty_cat_div.append(favorite_div);


    // favorite i
    favorite_i = document.createElement("i");
    favorite_i.setAttribute("class", "fa-regular fa-heart");
    favorite_i.setAttribute("id", "indv-fav-btn");
    favorite_div.append(favorite_i);

    // description div
    desc_div = document.createElement("div");
    desc_div.setAttribute("class", "description");
    indv_products_right_side_two.append(desc_div);

    // description cont
    desc_cont_div = document.createElement("div");
    desc_cont_div.setAttribute("class", "desc-cont");
    desc_div.append(desc_cont_div);

    // desc title p
    desc_title_p = document.createElement("p");
    desc_title_p.setAttribute("class", "desc-title");
    desc_title_p.innerText = "Description"
    desc_cont_div.append(desc_title_p);

    // desc content p
    desc_content_p = document.createElement("p");
    desc_content_p.setAttribute("class", "desc-content");
    desc_content_p.innerText = product_details[k]["description"];
    desc_cont_div.append(desc_content_p);


    // even listner for add to wishlist

    favorite_i.addEventListener('click', function () {

        if (user_id != null) {
            
            let fav_check = false;
            favourite_list.find(function (obj) {

                if (user_id === obj.user_id) {

                    if (product_details[k].id === obj.product_id) {

                        fav_check = true;
                    }

                }

                return fav_check;

            });

            if (fav_check) {

                Notify.error("Product was already added to wishlist");

            }

            else {

                favourite_list.push({
                    "user_id": user_id,
                    "wishlist_item_id": favourite_list.length + Math.random().toString(16).slice(2),
                    "product_id": product_details[k].id,
                    "category": product_details[k].category,
                    "product_eng_name": product_details[k].name.eng,
                    "product_image": product_details[k].image,
                    "quantity": product_details[k]["quantity"],
                    "product_added_date": new Date().toLocaleDateString(),
                    "product_added_time": new Date().toLocaleTimeString(),

                });

                localStorage.setItem("wishlist", JSON.stringify(favourite_list));

                Notify.success("Added to Wishlist");


                wishlist_count_fun();

            }

        }

        else {
            Notify.error("Please login to add product to wishlist");
        }

    })


    
        // check the available quantity

        function updatequantity() {

            let elem = document.querySelector(".indv-add-to-cart-btn");

            let get_amount = select_tag.value;

            let selected_qunt = qty_number.innerText;

            product_details.find(function (obj) {

                if (obj.id == product_details[k].id) {

                    let find_qty = obj.quantity;

                    find_qty.find(function (qty_obj) {

                        if (get_amount == qty_obj.rs) {

                            if (qty_obj.unit == "kg") {

                                let check = selected_qunt * qty_obj.into_gram;

                                if (Number(check) > Number(obj.avail_stock.into_gram)) {

                                    elem.classList.add("disabled");

                                    Notify.error("Required quantity not available");

                                }

                                else {

                                    elem.classList.remove("disabled");

                                }
                            }
                            else if (qty_obj.unit == "gm") {

                                let check = selected_qunt * qty_obj.qty;

                                if (Number(check) > Number(obj.avail_stock.into_gram)) {

                                    elem.classList.add("disabled");

                                    Notify.error("Required quantity not available");

                                }

                                else {

                                    elem.classList.remove("disabled");
                                }
                            }

                            else if((qty_obj.unit == "nos")||(qty_obj.unit == "pkt")){

                                let check = selected_qunt * qty_obj.qty;

                                if (Number(check) > Number(obj.avail_stock.num)) {

                                    elem.classList.add("disabled");

                                    Notify.error("Required quantity not available");

                                }

                                else {

                                    elem.classList.remove("disabled");
                                }

                            }

                        }
                    });

                }
            });

        }





    indv_add_to_cart.addEventListener("click", function (e) {

        if (user_id != null) {

            let get_amount = select_tag.value;

            let cart_check = true;

            let cart_item_arr = JSON.parse(localStorage.getItem("cart_items"));

            if (cart_item_arr != null) {
                cart_item_arr.find(function (obj) {

                    if (user_id == obj.user_id) {

                        if (product_id == obj.cart_product_id) {

                            if (get_amount == obj["product_details"]["selected_qty"]["rs"]) {

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

                            if (get_amount == qty_obj.rs) {

                                let cart_obj = {
                                    "cart_product_id": product_id,
                                    "cart_item_id": cart_items.length + Math.random().toString(16).slice(2),
                                    "user_id": user_id,
                                    "product_details": { "image": obj.image, "name": obj.name, "farmer": obj.farmer, "selected_qty": qty_obj },
                                    "quantity": qty_number.innerText,
                                    "cart_pro_category": obj.category,
                                    "product_added_date": new Date().toLocaleDateString(),
                                    "product_added_time": new Date().toLocaleTimeString(),
                                    "avail_stock": obj.avail_stock,
                                    "ready_for_checkout" : true
                                }

                                cart_items.push(cart_obj);

                                Notify.success("Item added to cart " + obj.name.eng + " " + qty_obj.qty + qty_obj.unit);

                                localStorage.setItem("cart_items", JSON.stringify(cart_items));
                            }
                        });

                        cart_count_fun();
                    }
                });
            }

        }

        else {
            Notify.error("Please login to add products to cart")
        }

    });


}



else {
    alert("product not found")
}


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


product_details.filter(function (rel,index) {

    if ((rel["category"]["id"] === product_cat) && (rel["status"])) {

        let product = rel;

        real_products(product,index);

        return product;
    }

});

function real_products(product,index) {


    // product_container_div
    product_container_div = document.createElement("div");
    product_container_div.setAttribute("class", "product-container");


    // product_main_div
    product_main_div = document.createElement("div");
    product_main_div.setAttribute("class", "product-main");
    product_container_div.append(product_main_div);

    let product_id = product["id"];
    let product_cat = product["category"]["id"]

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
    product_image_src.setAttribute("src", product["image"]["source"]);
    product_image_src.setAttribute("alt", product["image"]["alt"]);
    product_image_div.append(product_image_src);

    // product category title
    product_cat_title = document.createElement("p");
    product_cat_title.setAttribute("class", "category-title");
    product_cat_title.innerHTML = product["category"]["name"];
    indv_product_link.append(product_cat_title);

    // product_name_div
    product_name_div = document.createElement("div");
    product_name_div.setAttribute("class", "product-name");
    indv_product_link.append(product_name_div);

    // product_names

    // product eng name
    product_eng_name_p = document.createElement("p");
    product_eng_name_p.innerText = product["name"]["eng"];
    product_name_div.append(product_eng_name_p);

    // product tam name
    product_tam_name_p = document.createElement("p");
    product_tam_name_p.innerText = product["name"]["tam"];
    product_name_div.append(product_tam_name_p);


    // dropdown_div
    let dropdown_div = document.createElement("div");
    dropdown_div.className = "dropdown";
    product_main_div.appendChild(dropdown_div);

    // dropdown_header
    let dropdown_header = document.createElement("div");
    dropdown_header.className = "dropdown-header";
    dropdown_header.innerHTML = product["quantity"][0].text + '<i class="fas fa-caret-down"></i>';
    dropdown_div.appendChild(dropdown_header);
    // dropdown_options
    let dropdown_options = document.createElement("div");
    dropdown_options.className = "dropdown-options";
    dropdown_div.appendChild(dropdown_options);

    let selectedValue;
    for (let item_qty of product.quantity) {
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
    amount.innerText = "Rs. " + product.quantity[0].rs;
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

    qty_plus.addEventListener("click", () => {
        qty_value++;
        qty_plus_value = qty_value;
        qty_number.innerText = qty_plus_value;

        updatequantity();
    });

    qty_minus.addEventListener("click", () => {
        if (qty_value > 1) {
            qty_value--;
            qty_minus_value = qty_value;
            qty_number.innerText = qty_minus_value;

            updatequantity();
        }
    });

    let rs = amount.innerText.split(" ");
    let after_rs = rs.splice(1, 1);
    let before_rs = after_rs.join("");


    // add button div

    add_to_cart = document.createElement("div");
    add_to_cart.setAttribute("class", "fa-solid fa-cart-plus main-rel-products")
    quantity_cart_div.append(add_to_cart);


      // check the available quantity

      function updatequantity() {

        let elem = document.querySelectorAll(".main-rel-products");

        let rs = amount.innerText.split(" ");
        let after_rs = rs.splice(1, 1);

        let selected_qunt = qty_number.innerText;

        product_details.find(function (obj) {

            if (obj.id == product.id) {

                let find_qty = obj.quantity;

                find_qty.find(function (qty_obj) {

                    if (after_rs[0] == qty_obj.rs) {

                        if (qty_obj.unit == "kg") {

                            let check = selected_qunt * qty_obj.into_gram;

                            if (Number(check) > Number(obj.avail_stock.into_gram)) {

                                elem[index].classList.add("disabled");

                                Notify.error("Required quantity not available");

                            }

                            else {

                                elem[index].classList.remove("disabled");

                            }
                        }
                        else if (qty_obj.unit == "gm") {

                            let check = selected_qunt * qty_obj.qty;

                            if (Number(check) > Number(obj.avail_stock.into_gram)) {

                                elem[index].classList.add("disabled");

                                Notify.error("Required quantity not available");

                            }

                            else {

                                elem[index].classList.remove("disabled");
                            }
                        }

                        else if((qty_obj.unit == "nos")||(qty_obj.unit == "pkt")){

                            let check = selected_qunt * qty_obj.qty;

                            if (Number(check) > Number(obj.avail_stock.num)) {

                                elem[index].classList.add("disabled");

                                Notify.error("Required quantity not available");

                            }

                            else {

                                elem[index].classList.remove("disabled");
                            }

                        }

                    }
                });

            }
        });

    }




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
                                    "cart_pro_category": obj.category,
                                    "product_added_date": new Date().toLocaleDateString(),
                                    "product_added_time": new Date().toLocaleTimeString(),
                                    "avail_stock": obj.avail_stock,
                                    "ready_for_checkout" : true
                                }

                                cart_items.push(cart_obj);

                                Notify.success("Item added to cart " + obj.name.eng + " " + qty_obj.qty + qty_obj.unit);

                                localStorage.setItem("cart_items", JSON.stringify(cart_items));
                            }
                        });

                        cart_count_fun();
                    }
                });
            }
        }

        else {
            Notify.error("Please login to add products to cart")
        }

    });




    document.querySelector(".products-container-indv").append(product_container_div);
}













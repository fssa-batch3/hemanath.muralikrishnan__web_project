// product details JSON
let product_details = JSON.parse(localStorage.getItem("product_list"));

// wishlist json
let favourite_list = JSON.parse(localStorage.getItem("wishlist")) ?? [];

let cart_items = JSON.parse(localStorage.getItem("cart_items")) ?? [];

const url = window.location.search;                // ?name=Arun
const urlParams = new URLSearchParams(url);        // converting string into key value pair
const product_id = Number(urlParams.get("id"));             // return value of the "name" key
const product_cat = urlParams.get("cat");

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


product_details.find(function (obj, index) {

    if ((product_id === obj.id) && (obj.status)) {

        show_indv(JSON.stringify(obj), index);
    }
})



function show_indv(obj, index) {

    let item = JSON.parse(obj);

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
    indv_product_image.setAttribute("src", item["image"]["source"]);
    indv_product_image.setAttribute("alt", "image of " + item["image"]["alt"]);
    indv_img_div.append(indv_product_image);


    // product name div
    indv_product_name_div = document.createElement("div");
    indv_product_name_div.setAttribute("class", "product-name-rat");
    indv_product_left_side_div.append(indv_product_name_div);

    //english name p
    product_name_english_p = document.createElement("p");
    product_name_english_p.setAttribute("class", "indv-product-title");
    product_name_english_p.innerText = item["name"]["eng"];
    indv_product_name_div.append(product_name_english_p);

    //tamil name p
    product_name_tamil_p = document.createElement("p");
    product_name_tamil_p.setAttribute("class", "indv-product-title");
    product_name_tamil_p.innerText = item["name"]["tam"];
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
    pro_circle_p.innerText = item["nutritions"]["protein"]["num"] + "g";
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
    carbo_circle_p.innerText = item["nutritions"]["carbo"]["num"] + "g";
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
    kcal_circle_p.innerText = item["nutritions"]["kcal"];
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
    indv_category_title_p.innerText = item["category"]["name"];
    right_side_three_div.append(indv_category_title_p);

    // indv farmer part
    indv_farmer_part_div = document.createElement("div");
    indv_farmer_part_div.setAttribute("class", "indv-farmer-part");
    right_side_three_div.append(indv_farmer_part_div);

    // indv farmer image
    indv_farmer_img = document.createElement("img");
    indv_farmer_img.setAttribute("src", item["farmer"]["image"]["source"]);
    indv_farmer_img.setAttribute("alt", "image of farmer " + item["farmer"]["image"]["alt"]);
    indv_farmer_part_div.append(indv_farmer_img);

    // indv farmer name
    indv_farmer_p = document.createElement("p");
    indv_farmer_p.setAttribute("class", "indv-farmer-name");
    indv_farmer_p.innerText = "Farmer - " + item["farmer"]["name"];
    indv_farmer_part_div.append(indv_farmer_p);

    // indv product name div
    indv_product_name_div = document.createElement("div");
    indv_product_name_div.setAttribute("class", "indv-product-name");
    right_side_three_div.append(indv_product_name_div);

    // indv product english name
    indv_product_name_english_p = document.createElement("p");
    indv_product_name_english_p.innerText = item["name"]["eng"];
    indv_product_name_div.append(indv_product_name_english_p);

    // indv product tamil name
    indv_product_name_tamil_p = document.createElement("p");
    indv_product_name_tamil_p.innerText = item["name"]["tam"];
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

    let dropdown_values = item["quantity"];

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
    indv_amount_one_p.innerText = "₹ " + item["quantity"][0]["rs"];
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


    // indv add button div
    indv_add_button_div = document.createElement("div");
    indv_add_button_div.setAttribute("class", "indv-add-button");
    indv_qty_cat_div.append(indv_add_button_div);


    indv_add_to_cart = document.createElement("div");
    indv_add_to_cart.setAttribute("class", "fa-solid fa-cart-plus indv_add_cart_btn");
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
    desc_content_p.innerText = item["description"];
    desc_cont_div.append(desc_content_p);


    qty_plus.addEventListener("click", () => {

        let elem = document.querySelectorAll(".indv_add_cart_btn");

        qty_value++;
        qty_plus_value = qty_value;
        qty_number.innerText = qty_plus_value;

        updatequantity(select_tag.value, JSON.stringify(item), qty_number.innerText, elem, index);

    });

    qty_minus.addEventListener("click", () => {

        if (qty_value > 1) {

            let elem = document.querySelectorAll(".indv_add_cart_btn");

            qty_value--;
            qty_minus_value = qty_value;
            qty_number.innerText = qty_minus_value;

            updatequantity(select_tag.value, JSON.stringify(item), qty_number.innerText, elem, index);
        }
    });

    // favourite list

    favorite_i.addEventListener("click", function (e) {

        add_fav(JSON.stringify(item));
    })

    // add to cart event listner

    indv_add_to_cart.addEventListener("click", function (e) {

        get_cart_ele(select_tag.value, JSON.stringify(item), qty_number.innerText);
    })

}


let rel_products = product_details.filter(function (rel) {

    if ((rel["category"]["id"] === product_cat) && (rel["status"])) {


        return rel;
    }

});

list_products(rel_products);


let wishlist_check = true;

function add_fav(item) {

    let par = JSON.parse(item);

    if (user_id !== undefined) {

        wishlist_check = true;

        check_in_wishlist(item);
    }

    else {

        wishlist_check = false;

        Notify.error("Please login to add product to wishlist");

        return wishlist_check;
    }

    if (wishlist_check) {

        favourite_list.push({
            "user_id": user_id,
            "wishlist_item_id": Math.random().toString(16).slice(2),
            "product_id": par.id,
            "category": par.category,
            "product_eng_name": par.name.eng,
            "product_image": par.image,
            "quantity": par["quantity"],
            "product_added_date": new Date().toLocaleDateString(),
            "product_added_time": new Date().toLocaleTimeString(),

        });

        localStorage.setItem("wishlist", JSON.stringify(favourite_list));

        Notify.success("Added to Wishlist");


        wishlist_count_fun();

    }

}

function check_in_wishlist(item) {

    let par = JSON.parse(item);

    let fav_list = JSON.parse(localStorage.getItem("wishlist"));

    if (fav_list !== null) {
        fav_list.find(function (obj) {

            if (user_id === obj.user_id) {

                if (par.id === obj.product_id) {

                    wishlist_check = false;

                    Notify.error("Product was already added to wishlist");

                    return wishlist_check;
                }
            }
        });
    }

}
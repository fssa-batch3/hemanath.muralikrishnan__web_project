let product_details = JSON.parse(localStorage.getItem("product_list"));


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
let qty_div;
let add_cart_div;
let add_cart;
let add_text;
let add_bag;


const url = window.location.search;                // ?name=Arun
const urlParams = new URLSearchParams(url);        // converting string into key value pair
const product_cat = urlParams.get("cat");


if(product_cat === "00"){

        for(let i =0; i <=10; i++){

            if(product_details[i+1].status){

                let random_product = product_details[i+1];

                list_products(random_product);

            }
        

            

        }
    }

product_details.filter( function(item) {

    if(product_details !== null){

    if ((item["category"]["id"] === product_cat) && (item["status"])) {

        list_products(item);

    }


}

    

   
});




function list_products(item) {

    // product_container_div
    product_container_div = document.createElement("div");
    product_container_div.setAttribute("class", "product-container");


    // product_main_div
    product_main_div = document.createElement("div");
    product_main_div.setAttribute("class", "product-main");
    product_container_div.append(product_main_div);

   let product_id = item["id"];
   let product_cat = item["category"]["id"]

   let href_link = "../product_details/details.html?" + "id=" + product_id  + "&" + "cat=" + product_cat;


    // indv product link
    indv_product_link = document.createElement("a");
    indv_product_link.setAttribute("href",href_link);
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
    qty_number.innerText = "01";
    qty_number.className = "qty-number";
    qty_div.append(qty_number);


    let qty_plus = document.createElement("div");
    qty_plus.innerText = "+";
    qty_plus.className = "qty-plus";
    qty_div.append(qty_plus);

    qty_plus.addEventListener("click", () => {
        qty_value++;
        qty_plus_value = (qty_value < 10) ? "0" + qty_value : qty_value;
        qty_number.innerText = qty_plus_value;
    });

    qty_minus.addEventListener("click", () => {
        if (qty_value > 1) {
            qty_value--;
            qty_minus_value = (qty_value < 10) ? "0" + qty_value : qty_value;
            qty_number.innerText = qty_minus_value;
        }
    });


    // add button div

    add_cart_div = document.createElement("div");
    add_cart_div.setAttribute("class", "add-button");
    quantity_cart_div.append(add_cart_div);

    // add cart 
    add_cart = document.createElement("a");
    add_cart.setAttribute("href", "../cart.html");
    add_cart.setAttribute("class", "add-to-cart")
    add_cart_div.append(add_cart);

    // add text
    add_text = document.createElement("b");
    add_text.innerText = "Add ";
    add_cart.append(add_text);

    // add bag
    add_bag = document.createElement("i");
    add_bag.setAttribute("class", "fa-solid fa-bag-shopping");
    add_cart.append(add_bag);



    document.querySelector(".products-list-container").appendChild(product_container_div);


}




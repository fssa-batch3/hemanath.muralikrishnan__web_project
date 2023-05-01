let created_products = JSON.parse(localStorage.getItem("product_list"));

let sorty_json = JSON.parse(localStorage.getItem("product_list"));

let table_body = document.querySelector(".table_body");


// getting input elements from the form

const edit_form = document.getElementById("edit_product_form");

// image url input
const product_image_url = document.getElementById("edit-product-image-url");


// product names inputs
const product_english_name = document.getElementById("edit-product-english-name");
const product_tamil_name = document.getElementById("edit-product-tamil-name");

// radio buttons

const cat_exotic_fruits = document.getElementById("exotic-fruits");
const cat_exotic_veggies = document.getElementById("exotic-veggies");
const cat_fresh_veggies = document.getElementById("fresh-veggies");
const cat_fresh_fruits = document.getElementById("fresh-fruits");
const cat_leafy_green = document.getElementById("leafy-green");
const cat_tubers = document.getElementById("tubers");


// product description textarea
const product_description = document.getElementById("edit-product-description");

// healthy part

const protein_input = document.getElementById("edit-product-protein");

const carbo_input = document.getElementById("edit-product-carbo");

const kcal_input = document.getElementById("edit-product-kcal");


// available stock
const available_stock_input = document.getElementById("edit-product-available-stock");

// available stock units

const avail_kg = document.getElementById("aval-kg");
const avail_nos = document.getElementById("aval-nos");
const avail_pkt = document.getElementById("aval-pkt");


// quantity and price
const quantity_input = document.getElementById("edit-weight-number");

// quantity unit select
const quantity_unit_select = document.getElementById("edit-weight-unit");

// quantity price
const quantity_price_input = document.getElementById("edit-quantity-price");

// save button getting by id
const edit_save_btn = document.getElementById("edit-product-save");

// quantity div

const quantity_price_div = document.getElementById("quantity-price-div");

// div all the elements of the form

const all_elements = document.querySelector(".edit-product-all");


// close the form

const close_icon = document.getElementById("close_form");


// delete the copy of the product
window.onload = localStorage.removeItem("copy");

// close the edit the form

close_icon.addEventListener("click", function () {

    all_elements.style.display = "none";

    localStorage.removeItem("copy");

});


// function it will append the table rows from the above list products function

function list_products(array = []) {

    let k = 1;

    table_body.innerHTML = "";

    array.forEach((item, index) => {

        let table_tr = document.createElement("tr");

        if (item.status) {

            table_tr.setAttribute("class", "success");

        }
        else {

            table_tr.setAttribute("class", "fail");
        }

        let td_ser_no = document.createElement("td");
        td_ser_no.innerHTML = `${k}`
        table_tr.appendChild(td_ser_no);

        let td_pro_id = document.createElement("td");
        td_pro_id.innerHTML = `${item.id}`
        table_tr.appendChild(td_pro_id);

        let td_cat_name = document.createElement("td");
        td_cat_name.innerHTML = `${item.category.name}`;
        table_tr.appendChild(td_cat_name);

        let td_pro_img = document.createElement("td");
        td_pro_img.innerHTML = `<img src="${item.image.source}" alt="image of " + ${item.name.eng}>`;
        table_tr.appendChild(td_pro_img);

        let td_pro_name = document.createElement("td");
        td_pro_name.innerHTML = `${item.name.eng}<br>(${item.name.tam})`;
        table_tr.appendChild(td_pro_name);

        let td_avail_stock = document.createElement("td");
        td_avail_stock.innerHTML = `${item.avail_stock.num} ${item.avail_stock.unit}`;
        table_tr.appendChild(td_avail_stock);

        let td_pro_view = document.createElement("td");
        td_pro_view.setAttribute("onclick", `viewproduct(${item.id})`);
        td_pro_view.innerHTML = `<i class="fa-solid fa-eye"></i>`;
        table_tr.appendChild(td_pro_view);


        let td_pro_edit = document.createElement("td");
        td_pro_edit.setAttribute("onclick", `editproduct(${item.id})`);
        td_pro_edit.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
        table_tr.appendChild(td_pro_edit);

        let td_pro_avail_or_not = document.createElement("td");

        if (item.status) {

            td_pro_avail_or_not.setAttribute("onclick", `notavailableproduct(${item.id})`);
            td_pro_avail_or_not.innerHTML = `<i class="fa-solid fa-check"></i><br>Available`;

        }

        else {
            td_pro_avail_or_not.setAttribute("onclick", `availableproduct(${item.id})`);
            td_pro_avail_or_not.innerHTML = `<i class="fa-solid fa-xmark"></i><br>Not Available`;
        }
        table_tr.appendChild(td_pro_avail_or_not);


        let td_pro_dele = document.createElement("td");
        td_pro_dele.setAttribute("onclick", `deleteproduct(${index})`);
        td_pro_dele.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        table_tr.appendChild(td_pro_dele);


        k++;

        table_body.appendChild(table_tr);

    });


}

// filter by category logic

let filter_by_cat = document.getElementById("select-category-filter");

let newarray = [];

let status_array = [];

let search_array = [];


filter_by_cat.addEventListener("change", function () {

    newarray = [];

    let selectedValue = filter_by_cat.value;

    if (selectedValue !== "00") {

        created_products.filter(function (val) {

            if (val["category"]["id"] === selectedValue) {

                newarray.push(val);

            }

        })
    }

    else if (selectedValue === "00") {


        created_products.filter(function (val) {

            if (val["category"]["id"] !== selectedValue) {

                newarray.push(val);

            }

        })
    }

    list_products(newarray);

});

let select_status = document.getElementById("select-status");

select_status.addEventListener('change', function () {

    status_array = [];

    let selectedValue = select_status.value;

    let filter_cat_value = filter_by_cat.value;


    if (selectedValue === "yes") {

        created_products.filter(function (status_obj) {

            if ((status_obj["category"]["id"] === filter_cat_value) && (status_obj["status"] === true)) {

                status_array.push(status_obj);

                list_products(status_array);
            }

            else if ((filter_cat_value === "00") && (status_obj["status"] === true)) {

                status_array.push(status_obj);

                list_products(status_array);
            }
        });
    }

    else if (selectedValue === "no") {

        created_products.filter(function (status_obj) {

            if ((status_obj["category"]["id"] === filter_cat_value) && (status_obj["status"] === false)) {

                status_array.push(status_obj);

                list_products(status_array);
            }
            else if ((filter_cat_value === "00") && (status_obj["status"] === false)) {

                status_array.push(status_obj);

                list_products(status_array);
            }
        });
    }

    else if (selectedValue === "default") {

        created_products.filter(function (status_obj) {

            if (status_obj["category"]["id"] === filter_cat_value) {

                status_array.push(status_obj);

                list_products(status_array);
            }
            else if (filter_cat_value === "00") {

                status_array.push(status_obj);

                list_products(status_array);
            }
        });

    }


});



// search by selected category

let search_by_pro_name = document.getElementById("site-search");


search_by_pro_name.addEventListener("keyup", function () {

    // search_array = [];

    let search = this.value.toLowerCase();

    let get_cat_value = filter_by_cat.value;


    if (get_cat_value !== "00") {

        created_products.filter(function (search_fil) {

            let pro_name = search_fil["name"]["eng"];

            let lc_pro_name = pro_name.toLowerCase();


            if ((search_fil["category"]["id"] === get_cat_value) && (lc_pro_name.includes(search))) {


                search_array.push(search_fil);

                list_products(search_array);

            }


        });
    }

    else if (get_cat_value === "00") {

        created_products.filter(function (val) {

            let pro_name = val["name"]["eng"];

            let lc_pro_name = pro_name.toLowerCase();

            if ((val["category"]["id"] !== get_cat_value) && (lc_pro_name.includes(search))) {

                search_array.push(val);

                list_products(search_array);

            }

        });
    }


});


// sorty by logic

let sortyby = document.getElementById("sorty-by");

sortyby.addEventListener('change', function () {

    let sortby;

    let sortybyvalue = sortyby.value;

    if (sortybyvalue === "default") {

        list_products(created_products);

    }

    else if (sortybyvalue === "nameatoz") {

        sortby = sorty_json.sort((a, b) => {


            let x = a["name"]["eng"].toLowerCase();

            let y = b["name"]["eng"].toLowerCase();

            if (x < y) {

                return -1;

            }

            else if (x > y) {

                return 1;
            }

            else {
                return 0;
            }

        });

        list_products(sortby);

    }

    else if (sortybyvalue === "nameztoa") {

        sortby = sorty_json.sort((a, b) => {


            let x = a["name"]["eng"].toLowerCase();

            let y = b["name"]["eng"].toLowerCase();

            if (x > y) {

                return -1;

            }

            else if (x < y) {

                return 1;
            }

            else {
                return 0;
            }

        });

        list_products(sortby);

    }

    else if (sortybyvalue === "availlowtohigh") {

        sortby = sorty_json.sort((a, b) => {

            let x = a["avail_stock"]["num"];

            let y = b["avail_stock"]["num"];

            if (x < y) {

                return -1;

            }

            else if (x > y) {

                return 1;
            }

            else {
                return 0;
            }


        });
        list_products(sortby);

    }

    else if (sortybyvalue === "availhightolow") {

        sortby = sorty_json.sort((a, b) => {

            let x = a["avail_stock"]["num"];

            let y = b["avail_stock"]["num"];

            if (x > y) {

                return -1;

            }

            else if (x < y) {

                return 1;
            }

            else {
                return 0;
            }

        });

        list_products(sortby);
    }


});




// function view product
function viewproduct(id) {

    created_products.find(function (obj) {

        if (id === obj.id) {

            all_elements.style.display = "block";

            edit_save_btn.style.display = "none";

            quantity_price_div.style.display = "none";

            product_image_url.disabled = true;
            product_image_url.value = obj.image.source;

            product_english_name.disabled = true;
            product_english_name.value = obj.name.eng;

            product_tamil_name.disabled = true;
            product_tamil_name.value = obj.name.tam;

            cat_exotic_fruits.disabled = true;
            cat_exotic_veggies.disabled = true;
            cat_fresh_veggies.disabled = true;
            cat_fresh_fruits.disabled = true;
            cat_leafy_green.disabled = true;
            cat_tubers.disabled = true;

            check_cat(obj);

            product_description.disabled = true;
            product_description.innerText = obj.description;

            protein_input.disabled = true;
            protein_input.value = obj.nutritions.protein.num;

            carbo_input.disabled = true;
            carbo_input.value = obj.nutritions.carbo.num;

            kcal_input.disabled = true;
            kcal_input.value = obj.nutritions.kcal;

            available_stock_input.disabled = true;
            available_stock_input.value = obj.avail_stock.num;

            avail_kg.disabled = true;
            avail_nos.disabled = true;
            avail_pkt.disabled = true;

            check_unit_cat(obj);


            // show the already having quantities

            let output = '';

            let list_show = document.querySelector(".quantity-price-list");

            if (obj !== null) {

                obj.quantity.forEach((element) => {

                    output += `<div class="quantity_price_list_item">
                        <p class="quantity_price_p">${element.text}</p>
                    </div>`

                });

                list_show.innerHTML = output;

            }

        }
    })




}

// function for edit product

function editproduct(id) {

    created_products.find(function (obj) {

        if (id === obj.id) {

            all_elements.style.display = "block";

            edit_save_btn.style.display = "";

            quantity_price_div.style.display = "";

            let copy_product = obj;

            localStorage.setItem("copy", JSON.stringify(copy_product));

            let edit_product = JSON.parse(localStorage.getItem("copy"));

            product_image_url.disabled = false;
            product_image_url.value = edit_product.image.source;

            product_english_name.disabled = false;
            product_english_name.value = edit_product.name.eng;

            product_tamil_name.disabled = false;
            product_tamil_name.value = edit_product.name.tam;

            cat_exotic_fruits.disabled = false;
            cat_exotic_veggies.disabled = false;
            cat_fresh_veggies.disabled = false;
            cat_fresh_fruits.disabled = false;
            cat_leafy_green.disabled = false;
            cat_tubers.disabled = false;

            check_cat(obj);

            product_description.disabled = false;
            product_description.innerText = edit_product.description;

            protein_input.disabled = false;
            protein_input.value = edit_product.nutritions.protein.num;

            carbo_input.disabled = false;
            carbo_input.value = edit_product.nutritions.carbo.num;

            kcal_input.disabled = false;
            kcal_input.value = edit_product.nutritions.kcal;

            available_stock_input.disabled = false;
            available_stock_input.value = edit_product.avail_stock.num;

            avail_kg.disabled = false;
            avail_nos.disabled = false;
            avail_pkt.disabled = false;

            check_unit_cat(obj);


            // showing the pricelist in the edit form
            displaypricelist();

            // adding price list

            add_quantity_list();


        }

    })

}

// checked cat the category

function check_cat(obj) {

    if (obj.category.id === "01") {

        cat_exotic_fruits.checked = true;
    }
    if (obj.category.id === "02") {

        cat_exotic_veggies.checked = true;
    }

    if (obj.category.id === "03") {

        cat_fresh_veggies.checked = true;
    }

    if (obj.category.id === "04") {

        cat_fresh_fruits.checked = true;

    }

    if (obj.category.id === "05") {

        cat_leafy_green.checked = true;
    }

    if (obj.category.id === "06") {

        cat_tubers.checked = true;
    }

}

// checked the available stock

function check_unit_cat(obj) {

    if (obj.avail_stock.unit === "kg") {
        avail_kg.checked = true;
    }

    if (obj.avail_stock.unit === "nos") {
        avail_nos.checked = true;
    }

    if (obj.avail_stock.unit === "pkt") {
        avail_pkt.checked = true;
    }
}

// function for not product available or not

function notavailableproduct(id) {

    created_products.find(function (obj) {

        if (id === obj.id) {

            obj.status = false;

            localStorage.setItem("product_list", JSON.stringify(created_products));

            Notify.success("Status Updated");

            list_products(created_products);

            search_by_pro_name.value = "";

        }
    })


}


// function for product available

function availableproduct(id) {

    created_products.find(function (obj) {

        if (id === obj.id) {

            obj.status = true;

            localStorage.setItem("product_list", JSON.stringify(created_products));

            Notify.success("Status Updated");

            list_products(created_products);

            search_by_pro_name.value = "";

        }
    })


}

// function to delete the product 

function deleteproduct(index) {

    created_products.splice(index, 1);

    localStorage.setItem("product_list", JSON.stringify(created_products));

    Notify.success("Product Deleted");

    list_products(created_products);

    search_by_pro_name.value = "";

}

// add price list in the popup form box
function add_quantity_list() {

    let copy = JSON.parse(localStorage.getItem("copy"));

    const quantity_input_value = quantity_input.value.trim();

    let selectedValue = quantity_unit_select.value;

    const quantity_price_input_value = quantity_price_input.value.trim();

    let price_list_check = true;


    let new_obj;


    if(selectedValue == "kg"){

        let into_gram = quantity_input_value*1000;

        new_obj = {
            "text": quantity_input_value + selectedValue + " - " + "₹" + quantity_price_input_value,
            "unit": selectedValue,
            "qty": quantity_input_value,
            "rs": quantity_price_input_value,
            "into_gram" : into_gram
        }
        
    }

    else {

        new_obj = {
            "text": quantity_input_value + selectedValue + " - " + "₹" + quantity_price_input_value,
            "unit": selectedValue,
            "qty": quantity_input_value,
            "rs": quantity_price_input_value
        }
    }

    copy.quantity.find(function (obj) {

        if (quantity_input_value == obj.qty) {

            price_list_check = false;
        }
    })

    if (price_list_check) {

        if ((quantity_input_value !== "") && (quantity_price_input_value !== "")) {

            copy.quantity.push(new_obj);

            localStorage.setItem("copy", JSON.stringify(copy));

            Notify.success("Quantity Added");

            displaypricelist();

        }

        else {

            Notify.error("Enter Valid quanity and price");
        }
    }

    else {

        Notify.error("Already" + " " + quantity_input_value + selectedValue + " " + "Added")
    }

}

// dispaly the pricelist from the localstorage

function displaypricelist() {

    let output = '';

    let list_show = document.querySelector(".quantity-price-list");

    let list_type = JSON.parse(localStorage.getItem("copy"));

    if (list_type !== null) {

        list_type.quantity.forEach((element, index) => {

            output += `<div class="quantity_price_list_item">
            <p class="quantity_price_p">${element.text}</p>
            <p class="quantity_price_delete" onclick="deletepricelist(${index})"><i class="fa-solid fa-trash"></i></p>
        </div>`

        });

        list_show.innerHTML = output;

    }

}

function deletepricelist(index) {

    let localitems = JSON.parse(localStorage.getItem("copy"));

    localitems.quantity.splice(index, 1);

    localStorage.setItem("copy", JSON.stringify(localitems));

    Notify.success("Quantity Deleted");

    displaypricelist();
}


// save the updated data in the already having object

edit_form.addEventListener("submit", function (e) {

    e.preventDefault();

    let copy = JSON.parse(localStorage.getItem("copy"));

    const image_url = product_image_url.value.trim();

    const english_name = product_english_name.value.trim();

    const tamil_name = product_tamil_name.value.trim();

    const category_id = document.querySelector('input[name="pro_cat"]:checked').value;

    let cat_name = "";

    if (category_id === "01") {

        cat_name += "Exotic Fruits";
    }

    if (category_id === "02") {

        cat_name += "Exotic Veggies";
    }

    if (category_id === "03") {

        cat_name += "Fresh Veggies";
    }

    if (category_id === "04") {

        cat_name += "Fresh Fruits";
    }

    if (category_id === "05") {

        cat_name += "Leafy Green";
    }

    if (category_id === "06") {

        cat_name += "Tubers";
    }

    const category_name = cat_name;

    const product_desc = product_description.value.trim();

    const protein_value = protein_input.value.trim();

    const carbon_value = carbo_input.value.trim();

    const kcal_input_value = kcal_input.value.trim();

    const available_stock_input_value = available_stock_input.value.trim();

    const available_stock_input_unit = document.querySelector('input[name="aval_unit"]:checked').value;

    if(available_stock_input_unit == "kg"){

        let into_gram = available_stock_input_value*1000;
        
        new_obj = {

            "avail_num" : available_stock_input_value,
            "avail_unit" : available_stock_input_unit,
            "into_gram" : into_gram
        }

    }

    else {

        new_obj = {

            "avail_num" : available_stock_input_value,
            "avail_unit" : available_stock_input_unit
        }
    }


    let one_product = {

        "id": copy.id,

        "name": {
            "eng": english_name,
            "tam": tamil_name
        },

        "image": {
            "source": image_url,
            "alt": english_name,
        },

        "category": {
            "id": category_id,
            "name": category_name
        },

        "description": product_desc,

        "nutritions": {
            "protein": {
                "num": protein_value,
                "unit": copy.nutritions.protein.unit
            },
            "carbo": {
                "num": carbon_value,
                "unit": copy.nutritions.carbo.unit
            },

            "kcal": kcal_input_value
        },

        "avail_stock": new_obj,

        "quantity": copy.quantity,

        "status": copy.status,

        "farmer": {
            "id": copy.farmer.id,
            "name": copy.farmer.name,
            "image": {
                "source": copy.farmer.image.source,
                "alt": copy.farmer.image.alt
            }

        }

    }



    if (copy["quantity"].length <= 0) {

        Notify.error("Please Add product quantity and price");

    }

    else {


        for (let i = 0; i <= created_products.length - 1; i++) {

            if (copy["id"] === created_products[i]["id"]) {

                created_products[i] = one_product;

                localStorage.setItem("product_list", JSON.stringify(created_products));

                Notify.success("Product Updated");

                all_elements.style.display = "none";

                localStorage.removeItem("copy");

                list_products(created_products);

                search_by_pro_name.value = "";

                break;
            }
        }

    }

});


list_products(created_products);
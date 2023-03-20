let created_products = JSON.parse(localStorage.getItem("product_list"));

let table_body = document.querySelector(".table_body");

let select_category_filter = document.getElementById("select-category-filter");

let search_input = document.getElementById("site-search")

let k = 1;





// show the products regarding the selected value

select_category_filter.addEventListener('input', function(e) {

    table_body.innerHTML = "";

    k = 1;

    let selectedvalue = select_category_filter.value;




    if (selectedvalue != 00) {

        created_products.filter( function(item,index) {

            if (item.category.id.includes(selectedvalue)) {

                list(item,index);

            }

        });

    }

    else {
            created_products.forEach((item,index) => {
                
                list(item,index);
            });
        }



});

search_input.addEventListener("keydown", function(e){

    let search_value = search_input.value.trim().toLowerCase();
    console.log(search_value)

    created_products.filter((item,index) => {


    })


})

created_products.forEach((item, index) => {
    
    list(item,index);

});




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
const protein_unit = document.getElementById("product-protein-unit");

const carbo_input = document.getElementById("edit-product-carbo");
const carbo_unit = document.getElementById("edit-product-carbo-unit");

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


// farmer user id
const farmer_user_id = document.getElementById("edit-farmer-user-id");

// farmer name 
const farmer_name = document.getElementById("edit-farmer-name");

// farmer image url
const famer_image_url = document.getElementById("edit-farmer-image-url");

// save button getting by id
const edit_save_btn = document.getElementById("edit-product-save");

// quantity div

const quantity_price_div = document.getElementById("quantity-price-div");

// div all the elements of the form

const all_elements = document.querySelector(".edit-product-all");


// close the form

const close_icon = document.getElementById("close_form");


// delete the copy of the product
window.onload = localStorage.removeItem("copy");;

// close the edit the form

close_icon.addEventListener("click", function (e) {

    all_elements.style.display = "none";

    localStorage.removeItem("copy");

})



function list(item,index) {

    let table_tr = document.createElement("tr");

    if (item.status === true) {

        table_tr.setAttribute("class", "success");
    }

    else if(item.status == false) {

        table_tr.setAttribute("class", "fail");

    }
    table_body.append(table_tr);

    let sn_no = document.createElement("td");
    sn_no.innerText = k + ".";
    table_tr.append(sn_no);


    let pro_id = document.createElement("td");
    pro_id.innerText = item.id;
    table_tr.append(pro_id);

    let pro_cat = document.createElement("td");
    pro_cat.innerText = item.category.name
    table_tr.append(pro_cat);

    let img_td = document.createElement("td");
    table_tr.append(img_td);

    let pro_img = document.createElement("img");
    pro_img.setAttribute("src", item.image.source);
    pro_img.setAttribute("alt", "image of" + item.name.eng);
    img_td.append(pro_img);

    let pro_name_td = document.createElement("td");
    pro_name_td.innerHTML = item.name.eng + `<br>` + item.name.tam;
    table_tr.append(pro_name_td);

    let pro_avail = document.createElement("td");
    pro_avail.innerText = item.avail_stock.num + " " +item.avail_stock.unit;
    table_tr.append(pro_avail);

    let pro_view = document.createElement("td");
    pro_view.setAttribute("id", "viewproduct");
    pro_view.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    table_tr.append(pro_view);

    let pro_edit = document.createElement("td");
    pro_edit.setAttribute("id", "editproduct")
    pro_edit.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    table_tr.append(pro_edit);

    let pro_available = document.createElement("td");
    pro_available.setAttribute("id", "proavailable");
    pro_available.innerHTML = `<i class="fa-solid fa-check"></i><br>` + "Available";

    let pro_notavailable = document.createElement("td");
    pro_notavailable.setAttribute("id", "pronotavailable");
    pro_notavailable.innerHTML = `<i class="fa-solid fa-xmark"></i><br>` + "NotAvailable";

    if (item.status == true) {

        table_tr.append(pro_available);
    }

    else {

        table_tr.append(pro_notavailable);
    }


    let pro_delete = document.createElement("td");
    pro_delete.setAttribute("id", "deleteproduct");
    pro_delete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    table_tr.append(pro_delete);

    k++;

    // view product logic
    pro_view.addEventListener("click", function (e) {

        all_elements.style.display = "block";

        edit_save_btn.style.display = "none";

        quantity_price_div.style.display = "none";

        product_image_url.disabled = true;
        product_image_url.value = item.image.source;

        product_english_name.disabled = true;
        product_english_name.value = item.name.eng;

        product_tamil_name.disabled = true;
        product_tamil_name.value = item.name.tam;

        cat_exotic_fruits.disabled = true;
        cat_exotic_veggies.disabled = true;
        cat_fresh_veggies.disabled = true;
        cat_fresh_fruits.disabled = true;
        cat_leafy_green.disabled = true;
        cat_tubers.disabled = true;

        if(item.category.id == 01){

            cat_exotic_fruits.checked = true;
        }
        if(item.category.id == 02){
            
            cat_exotic_veggies.checked = true;
        }

        if(item.category.id == 03){
            
            cat_fresh_veggies.checked = true;
        }

        if(item.category.id == 04){

            cat_fresh_fruits.checked = true;

        }

        if(item.category.id == 05){
            
            cat_leafy_green.checked = true;
        }

        if(item.category.id == 06){
            
            cat_tubers.checked = true;
        }


        product_description.disabled = true;
        product_description.innerText = item.description;

        protein_input.disabled = true;
        protein_input.value = item.nutritions.protein.num;

        carbo_input.disabled = true;
        carbo_input.value = item.nutritions.carbo.num;

        kcal_input.disabled = true;
        kcal_input.value = item.nutritions.kcal;

        available_stock_input.disabled = true;
        available_stock_input.value = item.avail_stock.num;

        avail_kg.disabled = true;
        avail_nos.disabled = true;
        avail_pkt.disabled = true;

        if(item.avail_stock.unit == "kg"){
            avail_kg.checked = true;
        }

        if(item.avail_stock.unit == "nos"){
            avail_nos.checked = true;
        }

        if(item.avail_stock.unit == "pkt"){
            avail_pkt.checked = true;
        }
       



        // show the already having quantities

        let output = '';

        let list_show = document.querySelector(".quantity-price-list");

        if (item != null) {

            item.quantity.forEach((element) => {

                output += `<div class="quantity_price_list_item">
                <p class="quantity_price_p">${element.text}</p>
            </div>`

            });

            list_show.innerHTML = output;

        }


    });


    // edit or update product
    pro_edit.addEventListener("click", function (e) {

        all_elements.style.display = "block";


        edit_save_btn.style.display = "";

        quantity_price_div.style.display = "";

        let copy_product = item;

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

        if(item.category.id == 01){

            cat_exotic_fruits.checked = true;
        }
        if(item.category.id == 02){
            
            cat_exotic_veggies.checked = true;
        }

        if(item.category.id == 03){
            
            cat_fresh_veggies.checked = true;
        }

        if(item.category.id == 04){

            cat_fresh_fruits.checked = true;

        }

        if(item.category.id == 05){
            
            cat_leafy_green.checked = true;
        }

        if(item.category.id == 06){
            
            cat_tubers.checked = true;
        }

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

        if(item.avail_stock.unit == "kg"){
            avail_kg.checked = true;
        }

        if(item.avail_stock.unit == "nos"){
            avail_nos.checked = true;
        }

        if(item.avail_stock.unit == "pkt"){
            avail_pkt.checked = true;
        }


        // showing the pricelist in the edit form
        displaypricelist();

        // adding price list

        add_quantity_list();

    })

    // product available

    pro_available.addEventListener("click", function(e){

        item.status = false;

        localStorage.setItem("product_list", JSON.stringify(created_products));
    
        self.location.assign(window.location);

    });


    // not available

    pro_notavailable.addEventListener("click", function(e){

        item.status = true;

        localStorage.setItem("product_list", JSON.stringify(created_products));
    
        self.location.assign(window.location);

    });


    // delete product 
    pro_delete.addEventListener("click", function(e){

        created_products.splice(index, 1);

        localStorage.setItem("product_list", JSON.stringify(created_products));
    
        Notify.success("Product Deleted");

        self.location.assign(window.location);
    
    })


}


// add price list in the popup form box
function add_quantity_list(e) {

    let copy = JSON.parse(localStorage.getItem("copy"));

    const quantity_input_value = quantity_input.value.trim();

    let selectedValue = quantity_unit_select.value;

    const quantity_price_input_value = quantity_price_input.value.trim();

    // hello["text"] = quantity_input_value + selectedValue + " - " + "₹" + quantity_price_input_value;
    // hello["value"] = quantity_price_input_value;

    if ((quantity_input_value != "") && (quantity_price_input_value != "")) {

        copy.quantity.push({
            "text": quantity_input_value + selectedValue + " - " + "₹" + quantity_price_input_value,
            "unit": selectedValue,
            "qty": quantity_input_value,
            "rs": quantity_price_input_value
        });

        localStorage.setItem("copy", JSON.stringify(copy));

        Notify.success("Quantity Added");

        displaypricelist();

    }

    else {

        Notify.error("Enter Valid quanity and price");
    }


}

// dispaly the pricelist from the localstorage

function displaypricelist() {

    let output = '';

    let list_show = document.querySelector(".quantity-price-list");

    let list_type = JSON.parse(localStorage.getItem("copy"));

    if (list_type != null) {

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

    if(category_id == 01){

        cat_name += "Exotic Fruits";
    }

    if(category_id == 02){

        cat_name += "Exotic Veggies";
    }

    if(category_id == 03){

        cat_name += "Fresh Veggies";
    }

    if(category_id == 04){

        cat_name += "Fresh Fruits";
    }

    if(category_id == 05){

        cat_name += "Leafy Green";
    }

    if(category_id == 06){

        cat_name += "Tubers";
    }

    const category_name = cat_name;


    const product_desc = product_description.value.trim();

    const protein_value = protein_input.value.trim();

    const carbon_value = carbo_input.value.trim();

    const kcal_input_value = kcal_input.value.trim();

    const available_stock_input_value = available_stock_input.value.trim();

    const available_stock_input_unit = document.querySelector('input[name="aval_unit"]:checked').value;

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

        "avail_stock": {
            "num": available_stock_input_value,
            "unit": available_stock_input_unit
        },

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

    for (let i = 0; i <= created_products.length - 1; i++) {

        if (copy["id"] == created_products[i]["id"]) {

            created_products[i] = one_product;

            localStorage.setItem("product_list", JSON.stringify(created_products));

            Notify.success("Product Updated");

            self.location.assign(window.location);

            break;
        }
    }

});



// getting the element to append the div
let appen_div = document.querySelector(".wishlist-cont");

// from localstorage get the favourite list

let wishlist_list = JSON.parse(localStorage.getItem("wishlist"));


// element to display the number of wishlist products available

let wish_pro_count = 0;

const wish_title = document.getElementById("wish-title");



// user records json
let user_records = JSON.parse(localStorage.getItem("users"));

// user logged_in value
let user_details = localStorage.getItem("logged_in");

let user_id;

user_records.find(function (obj) {

    if (user_details == obj.emailid) {

        user_id = obj.user_id;

        return user_id;


    }
});

let user_pro_check = false;

for(let i=0; i < wishlist_list.length; i++){

    if(user_id == wishlist_list[i].user_id){

        user_pro_check = true;

        break;
    }

}


if(user_pro_check){

    wishlist_list.filter(function (obj,index) {
    
        if (user_id == obj.user_id) {

            wish_list(obj,index);

            wish_pro_count++;

            return wish_pro_count;
        }



    })
}

else {

    appen_div.innerHTML = `<h1 style="text-align:center;">No favourite products</h1>`;
}
    
   



// my title count increasing

wish_title.innerText = "My Wishlist(" + wish_pro_count + ")";



function wish_list(item,index) {

    let wishlist_sec_div = document.createElement("div");
    wishlist_sec_div.setAttribute("class", "wishlist-sec");
    appen_div.append(wishlist_sec_div);


    let wishlist_content_div = document.createElement("div");
    wishlist_content_div.setAttribute("class", "wishlist-content");
    wishlist_sec_div.append(wishlist_content_div);

    let wishlist_prog_image_div = document.createElement("div");
    wishlist_prog_image_div.setAttribute("class", "wishlist-pro-image");
    wishlist_content_div.append(wishlist_prog_image_div);

    let product_id = item["product_id"];
    let product_cat = item["category"]["id"]

    let href_link = "product_details/details.html?" + "id=" + product_id + "&" + "cat=" + product_cat;

    let wishlist_pro_a = document.createElement("a");
    wishlist_pro_a.setAttribute("href", href_link);
    wishlist_prog_image_div.append(wishlist_pro_a);


    let wishlist_pro_image = document.createElement("img");
    wishlist_pro_image.setAttribute("src", item.product_image.source);
    wishlist_pro_image.setAttribute("alt", "image of " + item.product_image.alt);
    wishlist_pro_a.append(wishlist_pro_image);

    let wishlist_text_div = document.createElement("div");
    wishlist_text_div.setAttribute("class", "wishlist-text");
    wishlist_content_div.append(wishlist_text_div);

    let wishlist_pro_title_p = document.createElement("p");
    wishlist_pro_title_p.setAttribute("class", "wish-pro-title");
    wishlist_pro_title_p.innerText = item.product_eng_name;
    wishlist_text_div.append(wishlist_pro_title_p);

    let wishlist_pro_cat_p = document.createElement("p");
    wishlist_pro_cat_p.setAttribute("class", "wish-cat");
    wishlist_pro_cat_p.innerText = item.category.name;
    wishlist_text_div.append(wishlist_pro_cat_p);

    let wishlist_quantity_div = document.createElement("div");
    wishlist_quantity_div.setAttribute("class", "wishlist-quantity");
    wishlist_text_div.append(wishlist_quantity_div);

    let wishlist_qty_p = document.createElement("p");
    wishlist_qty_p.innerHTML = `<b>Qty:</b> ` + item.quantity[0].qty;
    wishlist_quantity_div.append(wishlist_qty_p);

    let wishlist_pro_price_p = document.createElement("p");
    wishlist_pro_price_p.setAttribute("class", "wish-price");
    wishlist_pro_price_p.innerHTML = `₹ ` + item.quantity[0].rs;
    wishlist_quantity_div.append(wishlist_pro_price_p);


    let wishlist_pro_delete_div = document.createElement("div");
    wishlist_pro_delete_div.setAttribute("class", "icon-del");
    wishlist_sec_div.append(wishlist_pro_delete_div);

    let wishlist_pro_delete_icon = document.createElement("i");
    wishlist_pro_delete_icon.setAttribute("class", "fa-solid fa-trash");
    wishlist_pro_delete_div.append(wishlist_pro_delete_icon);


    wishlist_pro_delete_icon.addEventListener('click', function(e){


        wishlist_list.splice(index, 1);

        localStorage.setItem("wishlist", JSON.stringify(wishlist_list));

        wishlist_sec_div.remove();

        Notify.success("Product Removed");

        // self.location.assign(window.location);

    })



}
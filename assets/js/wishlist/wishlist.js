import Notify from "../notify";

// getting the element to append the div
let appen_div = document.querySelector(".wishlist-cont");

// empty string to have the wishlist items

let wishlist_output = "";

// from localstorage get the favourite list

let wishlist_list = JSON.parse(localStorage.getItem("wishlist"));


// element to display the number of wishlist products available

const wish_title = document.getElementById("wish-title");

// user records json
let user_records = JSON.parse(localStorage.getItem("users"));

// user logged_in value
let user_details = localStorage.getItem("logged_in");

let user_id;

user_records.find(function (obj) {

    if (user_details === obj.emailid) {

        user_id = obj.user_id;

        return user_id;


    }
});

function check_wishlist(){


let wish_pro_count = 0;

let user_pro_check = false;

if(wishlist_list !== null){

wishlist_list.find(function(obj){

    if(user_id === obj.user_id){

        user_pro_check = true;
    }

    return user_pro_check;
})

}

if(user_pro_check){

    wishlist_list.filter(function (obj,index) {
    
        if (user_id === obj.user_id) {

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

}   

function wish_list(item,index) {

    let product_id = item["product_id"];
    let product_cat = item["category"]["id"]

    let href_link = "product_details/details.html?" + "id=" + product_id + "&" + "cat=" + product_cat;

    wishlist_output += `<div class="wishlist-sec">

                <div class="wishlist-content">

                    <div class="wishlist-pro-image">

                        <a href="${href_link}">
                            <img src="${item.product_image.source}" alt="image of" + ${item.product_image.alt}>
                        </a>
                    </div>



                    <div class="wishlist-text">

                      
                        <p class="wish-pro-title">${item.product_eng_name}</p>
                        <p class="wish-cat">${item.category.name}</p>

                        <div class="wishlist-quantity">
                            <p><b>Qty:</b> ${item.quantity[0].qty}</p>
                            <p class="wish-price">₹ ${item.quantity[0].rs}</p>
                        </div>

                    </div>

                </div>

                <div class="icon-del">
                        <i class="fa-solid fa-trash" onclick=deletewishlist(${index})></i>
                </div>


            </div>`

            appen_div.innerHTML = wishlist_output;

}


function deletewishlist(index){

    wishlist_list.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist_list));

    Notify.success("Product Removed");

    wishlist_output = "";

    check_wishlist();
}

check_wishlist();
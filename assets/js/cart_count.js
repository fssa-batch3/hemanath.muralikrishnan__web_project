let cart_number = document.getElementById("cart-count");

let mobile_cart_number = document.getElementById("mobile-cart-count")

function cart_count_fun() {

    let cart_items_user = JSON.parse(localStorage.getItem("cart_items"));

    let cart_count = 0;

    let current_user_id;

    cart_number.innerText = "";

    mobile_cart_number.innerText = "";
    

    if (cart_items_user != null) {

        cart_items_user.filter(function (obj) {

            if (user_id == obj.user_id) {

                return ++cart_count;
            }
        })
    }


    if (cart_count <= 10) {

        cart_number.innerText = cart_count;

        mobile_cart_number.innerText = cart_count;
    }

    else {
        cart_number.innerText = "10+";

        mobile_cart_number.innerText = "10+";
    }

}

cart_count_fun();
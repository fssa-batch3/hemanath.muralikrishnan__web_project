let cart_items_user = JSON.parse(localStorage.getItem("cart_items"));

let cart_number = document.getElementById("cart-count");

let mobile_cart_number = document.getElementById("mobile-cart-count")


let cart_count = 0;

let get_user_records = JSON.parse(localStorage.getItem("users"));

let get_logged_in = localStorage.getItem("logged_in");;

let current_user_id;

if(get_user_records != null){

    get_user_records.find(function (obj){

        if (get_logged_in === obj.emailid) {

            current_user_id = obj.user_id;
    
            return current_user_id;
        }

    })
}

let check_for_current_user_cart_item = false;

if(cart_items_user!=null){

    cart_items_user.find(function(obj){

        if(current_user_id == obj.user_id){

            check_for_current_user_cart_item = true;


        }

        return check_for_current_user_cart_item;
    })
}


if(check_for_current_user_cart_item){

    cart_items_user.filter(function(obj){

        if(current_user_id == obj.user_id){

            return ++cart_count;
        }
    })
}


if(cart_count <=10){

    cart_number.innerText = cart_count;

    mobile_cart_number.innerText = cart_count;
}

else {
    cart_number.innerText = "10+";

    mobile_cart_number.innerText = "10+";
}
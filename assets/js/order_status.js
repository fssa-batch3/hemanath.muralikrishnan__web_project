// user records json
let user_records = JSON.parse(localStorage.getItem("users"));

// user logged_in value
let user_details = localStorage.getItem("logged_in");

let placed_cart_items = JSON.parse(localStorage.getItem("cart_items"));

let order_histroy = JSON.parse(localStorage.getItem("order_histroy"));

let user_id;

if (user_records !== null) {

    user_records.find(function (obj) {

        if (user_details === obj.emailid) {

            user_id = obj.user_id;

            return user_id;


        }
    });
}


// to delete the cart items of the current user

for(let i=0; i < placed_cart_items.length; i++) {

    let get_cart_items = JSON.parse(localStorage.getItem("cart_items"));

    get_cart_items.forEach((item, index) => {

        if (user_id == item.user_id) {

            get_cart_items.splice(index, 1);

            localStorage.setItem("cart_items", JSON.stringify(get_cart_items));
        }
    });
}

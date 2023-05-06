let wishlist_element = document.getElementById("wishlist-count");
let mobile_wishlist_elemetn = document.getElementById("mobile-wishlist-count");

function wishlist_count_fun() {

    let wishlist_list = JSON.parse(localStorage.getItem("wishlist"));

    let wish_pro_count_se = 0;

    wishlist_element.innerText = "";

    mobile_wishlist_elemetn.innerText = "";


    if(wishlist_list !=null){

        wishlist_list.filter(function (obj) {

            if (user_id === obj.user_id) {
    
                return ++wish_pro_count_se;
            }
    
        });
    }
   

    // my title count increasing


    if (wish_pro_count_se <= 10) {

        wishlist_element.innerText = wish_pro_count_se;

        mobile_wishlist_elemetn.innerText = wish_pro_count_se;
    }

    else {
        wishlist_element.innerText = "10+";

        mobile_wishlist_elemetn.innerText = "10+";

    }

}



wishlist_count_fun();
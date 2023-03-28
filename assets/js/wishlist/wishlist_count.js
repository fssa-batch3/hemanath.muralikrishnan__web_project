let wishlist_element = document.getElementById("wishlist-count");

let wishlist_list_count = JSON.parse(localStorage.getItem("wishlist"));

// element to display the number of wishlist products available

let wish_pro_count_se = 0;

// user records json
let user_records_se = JSON.parse(localStorage.getItem("users"));

// user logged_in value
let user_details_se = localStorage.getItem("logged_in");

let user_id_se;

user_records_se.find(function (obj) {

    if (user_details_se === obj.emailid) {

        user_id_se = obj.user_id;

        return user_id_se;


    }
});



let user_pro_check_se = false;

if(wishlist_list_count !== null){

    wishlist_list_count.find(function(obj){

        if(user_id_se === obj.user_id){
    
            user_pro_check_se = true;
        }
    
        return user_pro_check_se;
    })
    

}


if(user_pro_check_se){

    wishlist_list_count.filter(function (obj) {
    
        if (user_id_se === obj.user_id) {

            return ++wish_pro_count_se;
        }



    });

}

// my title count increasing


if(wish_pro_count_se <=10){

    wishlist_element.innerText = wish_pro_count_se;
}

else {
    wishlist_element.innerText = "10+";
}




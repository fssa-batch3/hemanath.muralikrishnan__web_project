let localdata = JSON.parse(localStorage.getItem("users"));

let profile_email = localStorage.getItem("logged_in");

// profile form

const profile_form = document.getElementById("profile_form");

const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const gender_male = document.getElementById("male");
const gender_female = document.getElementById("female")
const email_Input = document.getElementById("email-address");
const mobile_Input = document.getElementById("mobile-number");
const profile_user_name = document.getElementById("user-profile-name");

window.onload = remove_address();

function remove_address() {

    localStorage.removeItem("copy_address");
}


// showing data from already having data
let Success = false, i;


for (i = 0; i < localdata.length; i++) {
    if (localdata[i].emailid === profile_email) {
        Success = true;
        break;
    }
}




if (Success) {


    let profile_img = document.createElement("img");
    profile_img.setAttribute("src", "https://ui-avatars.com/api/?name=" + localdata[i].firstname + " " + localdata[i].lastname + "&background=0D8ABC&color=fff");
    profile_img.setAttribute("alt", "user image of " + localdata[i].firstname + " " + localdata[i].lastname);
    document.querySelector(".profile-img").append(profile_img);

    first_name.value = localdata[i].firstname;
    last_name.value = localdata[i].lastname;
    email_Input.value = localdata[i].emailid;
    mobile_Input.value = localdata[i].mobilenumber;
    profile_user_name.innerText = localdata[i].firstname + " " + localdata[i].lastname

}

else {

    Notify.error("Error");

}

// edit profile starts

// edit button for profile section only
const profile_edit_button = document.getElementById("edit-profile");
const profile_save_button = document.getElementById("save-profile");
// save button display none
profile_save_button.style.display = "none";


// edit button
profile_edit_button.addEventListener('click', function (e) {


    e.preventDefault();

    // assign disable values to input
    first_name.disabled = false;
    last_name.disabled = false;
    gender_male.disabled = false;
    gender_female.disabled = false;
    mobile_Input.disabled = false;

    // save button display block
    profile_save_button.style.display = "";
    // edit button display none
    profile_edit_button.style.display = "none";

});

// save button

profile_form.addEventListener('submit', function (e) {

    const profile_first_name = first_name.value.trim();
    const profile_last_name = last_name.value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profile_mobile_number = mobile_Input.value.trim();

    e.preventDefault();

    localdata.find(function (obj) {

        if (profile_email === obj.emailid) {

            obj.firstname = profile_first_name;
            obj.lastname = profile_last_name;
            obj.gender = gender;
            obj.mobilenumber = profile_mobile_number;

            localStorage.setItem("users", JSON.stringify(localdata));

            Notify.success("Profile Details Updated");
        }
    })



    // assign disable values to input
    first_name.disabled = true;
    last_name.disabled = true;
    gender_male.disabled = true;
    gender_female.disabled = true;
    mobile_Input.disabled = true;

    // save button display block
    profile_save_button.style.display = "none";
    // edit button display none
    profile_edit_button.style.display = "";



});

// gender radio checked button

if (localdata !== null) {

    for (let j = 0; j <= localdata.length; j++) {

        if (profile_email == localdata[j].emailid) {

            if (localdata[j].gender == null) {
                break;
            }
            else {
                if (localdata[j].gender == "male") {

                    gender_male.checked = true;
                    gender_female.checked = false;
                    break;


                }

                else if (localdata[j].gender == "female") {
                    gender_female.checked = true;
                    gender_male.checked = false;
                    break;

                }
            }



        }


    }
}

// start of add address operations

const new_address = document.getElementById("add_new_address");

// div contains all address form elements new address

const address_div = document.querySelector(".address-form");

const address_form = document.getElementById("address_form");


// update address form elements

const upt_address_div = document.querySelector(".upt_address-form");

const upt_address_form = document.getElementById("upt_address_form");

// close for new address

const address_form_close = document.getElementById("address_close_form");


// close for update address

const upt_address_form_close = document.getElementById("upt_address_close_form");


new_address.addEventListener('click', function () {

    if ((profile_save_button.style.display) == "") {

        Notify.error("Please complete the profile update to add new address");
    }

    else {
        address_div.style.display = "block";
    }


});


// close for new address
address_form_close.addEventListener('click', function (e) {

    address_div.style.display = "none";

    address_form.reset();

});

// close for update address form

upt_address_form_close.addEventListener("click", function (e) {

    upt_address_div.style.display = "none"

    localStorage.removeItem("copy_address");
})


// getting input using id for new address form

const address_input = document.getElementById("address-input");
const district_input = document.getElementById("district-input");
const state_input = document.getElementById("state-input");
const pincode_input = document.getElementById("pincode-input");

// getting input using id for update address form

const upt_address_input = document.getElementById("upt_address-input");
const upt_district_input = document.getElementById("upt_district-input");
const upt_state_input = document.getElementById("upt_state-input");
const upt_pincode_input = document.getElementById("upt_pincode-input");


address_form.addEventListener('submit', function (e) {

    e.preventDefault();

    // getting values from inputs
    const address_value = address_input.value.trim();
    const district_value = district_input.value.trim();
    const state_value = state_input.value.trim();
    const pincode_value = pincode_input.value.trim();

    if ((address_value !== "") && (district_value !== "") && (state_value !== "") && (pincode_value !== "")) {

        localdata.find(function (obj) {

            if (profile_email === obj.emailid) {

                const address_array = obj.address ?? [];

                if (address_array.length < 5) {

                    obj.address = address_array;

                    let address_data = {
                        "street": address_value,
                        "district": district_value,
                        "state": state_value,
                        "pincode": pincode_value,
                        "address_id": address_array.length + Math.random().toString(16).slice(2)
                    }
                    address_array.push(address_data);

                    Notify.success("Address Added");

                    localStorage.setItem("users", JSON.stringify(localdata));

                    address_div.style.display = "none";

                    document.querySelector(".show-address").innerHTML = " ";

                    load_address();

                    address_form.reset();

                }

                else {

                    Notify.error("You can't add more than 5 address");
                }


            }


        });



    }

    else {

        Notify.error("Please provide valid details");

    }


});


// creating element for each address element

// address menus show menu or hide menu
function load_address() {

    let address_append_div = document.querySelector(".show-address");
    localdata.find(function (obj) {

        if (profile_email === obj.emailid) {

            let user_add_arr = obj.address;

            if (user_add_arr != null) {

                if ((user_add_arr.length) > 0) {

                    let address_array = obj["address"];

                    address_array.forEach((item, index) => {

                        let addresses_show_div = document.createElement("div");
                        addresses_show_div.setAttribute("class", "addresses-show-div");
                        address_append_div.appendChild(addresses_show_div)

                        let address_show_main = document.createElement("div");
                        address_show_main.setAttribute("class", "address-show-main");
                        addresses_show_div.appendChild(address_show_main);

                        let address_p = document.createElement("p");
                        address_p.innerHTML = `${item.street} ${item.district} ${item.state} ${item.pincode}`;
                        address_show_main.appendChild(address_p);

                        let address_show_menu = document.createElement("div");
                        address_show_menu.setAttribute("class", "address-show-menu");
                        addresses_show_div.appendChild(address_show_menu);

                        let i_menu = document.createElement("i");
                        i_menu.setAttribute("class", "fa-solid fa-ellipsis-vertical");
                        address_show_menu.appendChild(i_menu);

                        let address_menus = document.createElement("div");
                        address_menus.setAttribute("class", "address-menus");
                        address_show_menu.appendChild(address_menus);

                        let address_p_edit = document.createElement("p");
                        address_p_edit.innerHTML = `<i class="fa-solid fa-pen"></i> Edit`;
                        // address_p_edit.setAttribute("onclick", `update_address(${item.address_id})`);
                        address_menus.appendChild(address_p_edit);

                        let address_p_delete = document.createElement("p");
                        address_p_delete.innerHTML = `<i class="fa-solid fa-trash"></i> Delete`;
                        address_p_delete.setAttribute("onclick", `deleteaddress(${index})`);
                        address_menus.appendChild(address_p_delete);


                        address_menus.style.display = "none";

                        i_menu.addEventListener("click", function () {

                            if (address_menus.style.display === "none") {

                                address_menus.style.display = "block"; // to show the element
                            } else {
                                address_menus.style.display = "none"; // to hide the element
                            }

                        })

                        address_p_edit.addEventListener("click", function (e) {

                            address_menus.style.display = "none";

                            upt_address_div.style.display = "block";

                            localdata.find(function (obj) {

                                if (profile_email === obj.emailid) {
                        
                        
                                    let user_address = obj.address;
                        
                                    user_address.find(function (add_data) {
                        
                                        if (add_data.address_id == item.address_id) {
                        
                                            localStorage.setItem("copy_address", JSON.stringify(add_data));
                        
                                            let get_copy = JSON.parse(localStorage.getItem("copy_address"));
                        
                                            document.querySelector(".address-menus").style.display = "none";
                        
                                            upt_address_div.style.display = "block";
                        
                                            upt_address_input.value = get_copy.street;
                                            upt_district_input.value = get_copy.district;
                                            upt_pincode_input.value = get_copy.pincode;
                                        }
                                    })
                                }
                            })

                           
                        })


                    });

                }

                else if ((user_add_arr.length) === 0) {

                    address_append_div.innerHTML = `<h3 style="text-align:center;">No Address Please Add</h3>`
                }
            }


        }
    });
}

load_address();


// update address form logic

upt_address_form.addEventListener("submit", function (e) {

    e.preventDefault();

    let copy = JSON.parse(localStorage.getItem("copy_address"));

    let two_upt_address_input = upt_address_input.value.trim();
    let two_upt_district_input = upt_district_input.value.trim();
    let two_upt_pincode_input = upt_pincode_input.value.trim();

    let update_address = {

        "street": two_upt_address_input,
        "district": two_upt_district_input,
        "state": copy.state,
        "pincode": two_upt_pincode_input,
        "address_id": copy.address_id

    }


    localdata.find(function (obj) {

        if (profile_email === obj.emailid) {

            let user_address = obj.address;

            for (let i = 0; i < user_address.length; i++) {

                if (user_address[i].address_id == copy.address_id) {

                    user_address[i] = update_address;

                    localStorage.setItem("users", JSON.stringify(localdata));

                    Notify.success("Address Updated");

                    upt_address_div.style.display = "none";

                    upt_address_form.reset();

                    document.querySelector(".show-address").innerHTML = " ";

                    load_address();

                    break;
                }
            }

        }
    });


});


//delete logic

let delete_check;

function deleteaddress(index) {

    if (confirm("Are you sure?")) {

        delete_check = true;


    }

    else {

        delete_check = false;


    }

    if (delete_check) {

        localdata.find(function (obj) {

            if (profile_email === obj.emailid) {

                let address_len = obj.address;

                address_len.splice(index, 1);

                localStorage.setItem("users", JSON.stringify(localdata));

                Notify.success("Address Deleted");

                document.querySelector(".show-address").innerHTML = " ";

                load_address();

            }
        })

    }

}


// logout

const logout_btn = document.getElementById("logout-user");

logout_btn.addEventListener('click', function () {


    for (let user_data of localdata) {

        if (profile_email === user_data.emailid) {

            if (confirm("Are you sure?")) {


                // removing the profile email while we get from login page
                localStorage.removeItem("logged_in")

                Notify.success("logout successfull");

                window.location.href = "../index.html";

                break;

            }

            else {

                Notify.error("Canceled");

                break;

            }


        }

    }

})































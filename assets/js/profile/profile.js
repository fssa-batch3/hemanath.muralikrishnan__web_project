const localdata = JSON.parse(localStorage.getItem("users"));


const profile_email = localStorage.getItem("profile_email");



// profile form

const profile_form = document.getElementById("profile_form");

const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const gender_male = document.getElementById("male");
const gender_female = document.getElementById("female")
const email_Input = document.getElementById("email-address");
const mobile_Input = document.getElementById("mobile-number");


// localdata.find (

//     function(userobj){

//         if(profile_email === profile_check){

//           name_Input.value = userobj["name"];
//           email_Input.value = userobj["email"];
//           mobile_Input.value = userobj["mobilenumber"];  

//           return true;
//         }

//         else{
//             alert("Profile Failure");
//             return false;
//         }
//     }
// );


// showing data from already having data
let Success = false, i;

for (i = 0; i < localdata.length; i++) {
    if (localdata[i].email == profile_email) {
        Success = true;
        break;
    }
}


if (Success == true) {

    first_name.value = localdata[i].first_name;
    last_name.value = localdata[i].last_name;
    email_Input.value = localdata[i].email;
    mobile_Input.value = localdata[i].mobilenumber;

}

else {

    alert("Error");

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
const profile_email_id = email_Input.value.trim();


profile_form.addEventListener('submit', function (e) {


    const profile_first_name = first_name.value.trim();
    const profile_last_name = last_name.value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profile_mobile_number = mobile_Input.value.trim();

    e.preventDefault();

    let profile_updated = false;
    for (let i = 0; i < localdata.length; i++) {

        if (profile_email_id == localdata[i].email) {
            profile_updated = true;
            break;

        }
    }


    if (profile_updated) {
        localdata[i].first_name = profile_first_name;
        localdata[i].last_name = profile_last_name;
        localdata[i].gender = gender;
        localdata[i].mobilenumber = profile_mobile_number;

        localStorage.setItem("users", JSON.stringify(localdata));

        alert("Profile Details Updated");
    }

    else {
        alert("You are mad at me");
    }



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

for (let j = 0; j <= localdata.length; j++) {

    if (profile_email_id == localdata[j].email) {

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




// address form show and close

const new_address = document.getElementById("add_new_address");

const address_form = document.getElementById("address_form");
address_form.style.display = "none"

const address_form_close = document.getElementById("close-form");




new_address.addEventListener('click', function (e) {

    address_form.style.display = "";
});


address_form_close.addEventListener('click', function (e) {

    e.preventDefault();
    address_form.style.display = "none";
})

// creating empty array because user can have multiple 

// getting address from the user

const address_input = document.getElementById("address-input");
const district_input = document.getElementById("district-input");
const state_input = document.getElementById("state-input");
const pincode_input = document.getElementById("pincode-input");





address_form.addEventListener('submit', function (e) {

    e.preventDefault();

    // getting values from inputs
    const address_value = address_input.value.trim();
    const district_value = district_input.value.trim();
    const state_value = state_input.value.trim();
    const pincode_value = pincode_input.value.trim();


    for (let i = 0; i < localdata.length; i++) {

        if (profile_email_id == localdata[i].email) {

            const address_array = localdata[i].address ?? [];




            localdata[i].address = address_array;



            let address_data = {
                "street": address_value,
                "district": district_value,
                "state": state_value,
                "pincode": pincode_value,
                "address_id": address_array.length*2+1
            }
            address_array.push(address_data);

            break;
        }
    }
    localStorage.setItem("users", JSON.stringify(localdata));

    alert("Address Added");

    address_form.style.display = "none";

    self.location.assign(window.location);

});


// form for edit user address

const edit_address_form = document.getElementById("edit_address_form_two");
edit_address_form.style.display = "none";

const updated_close_form = document.getElementById("updated-close-form");

updated_close_form.addEventListener("click", function (e) {
    edit_address_form.style.display = "none";
})


// saving address id 
const updated_address_input = document.getElementById("update-address-input");
const updated_district_input = document.getElementById("update-district-input");
const updated_state_input = document.getElementById("update-state-input");
const updated_pincode_input = document.getElementById("update-pincode-input");

// getting address id
const updated_address_id = document.getElementById("updated-address-id");
updated_address_id.style.display = "none"






// showing user address from the localstorage
for (let k = 0; k < localdata.length; k++) {

    if (profile_email_id == localdata[k].email) {

        if (localdata[k].address != null) {

            // saving the each address key and their in a object

            let address_len = localdata[k]["address"];

            console.log(address_len);

            for (let j = 0; j < address_len.length; j++) {



                let address_show_div = document.createElement("div");
                address_show_div.setAttribute("class", "address-show");
                document.querySelector(".show-address").append(address_show_div);

                let user_address_p = document.createElement("p");
                user_address_p.setAttribute("class", "user-address");
                user_address_p.setAttribute("id", "user_address");
                user_address_p.innerText = address_len[j]["street"] + "," + address_len[j]["district"] + "," + address_len[j]["state"] + "," + address_len[j]["pincode"];
                address_show_div.append(user_address_p);

                let address_edit_div = document.createElement("div");
                address_edit_div.setAttribute("class", "address-edit");
                address_edit_div.setAttribute("id", "address_btn");
                address_show_div.append(address_edit_div);

                let address_edit_btn = document.createElement("button");
                address_edit_btn.setAttribute("class", "show-address-edit");
                address_edit_btn.setAttribute("id", "address_edit");
                address_edit_btn.innerText = "Edit";
                address_edit_div.append(address_edit_btn);

                let address_delete_btn = document.createElement("button");
                address_delete_btn.setAttribute("class", "show-address-delete");
                address_delete_btn.setAttribute("id", "address_delete");
                address_delete_btn.innerText = "Delete";
                address_edit_div.append(address_delete_btn);

                let address_close_btn = document.createElement("button");
                address_close_btn.setAttribute("class", "close-address");
                address_close_btn.setAttribute("id", "close_address");
                address_close_btn.innerText = "Close";
                address_edit_div.append(address_close_btn);


                address_edit_div.style.display = "none";

                // when user click on address p tag show edit buttons

                user_address_p.addEventListener('click', function (e) {
                    address_edit_div.style.display = "";
                })

                // when user click on close btn don't show the edit btn div
                address_close_btn.addEventListener('click', function (e) {
                    address_edit_div.style.display = "none";
                })



                // edit address assign value to input
                address_edit_btn.addEventListener('click', function (e) {

                    edit_address_form.style.display = "";


                    updated_address_input.value = address_len[j]["street"];
                    updated_district_input.value = address_len[j]["district"];
                    updated_state_input.value = address_len[j]["state"];
                    updated_pincode_input.value = address_len[j]["pincode"];
                    updated_address_id.value = address_len[j]["address_id"];



                });

                //delete logic

                let delete_check;

                address_delete_btn.addEventListener('click', function (e) {

                    if (confirm("Are you sure?")) {

                        delete_check = true;

                    }

                    else {

                        delete_check = false;

                    }

                    if (delete_check) {

                        address_len.splice(j, 1);

                        localStorage.setItem("users", JSON.stringify(localdata));

                        alert("Address Deleted");

                        self.location.assign(window.location);

                    }

                    else {
                        alert("ASD");
                    }



                });

            }
        }


    }

}


// edit address form
edit_address_form.addEventListener('submit', function (e) {

    e.preventDefault();

    // getting values from inputs
    const updated_address_value = updated_address_input.value.trim();
    const updated_district_value = updated_district_input.value.trim();
    const updated_state_value = updated_state_input.value.trim();
    const updated_pincode_value = updated_pincode_input.value.trim();

    const updated_address_id_value = updated_address_id.value;


    for (let k = 0; k < localdata.length; k++) {

        if (profile_email_id == localdata[k].email) {

            if (localdata[k].address != null) {

                // saving the each address key and their in a object
                let address_len = localdata[k]["address"];


                for (let j = 0; j < address_len.length; j++) {

                    if (updated_address_id_value == address_len[j]["address_id"]) {

                        address_len[j]["street"] = updated_address_value;
                        address_len[j]["district"] = updated_district_value;
                        address_len[j]["state"] = updated_state_value;
                        address_len[j]["pincode"] = updated_pincode_value;

                        localStorage.setItem("users", JSON.stringify(localdata));

                        self.location.assign(window.location);

                        alert("Address Updated")

                        break;

                    }



                }
            }




        }

    }


});























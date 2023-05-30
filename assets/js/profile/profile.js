import { user_id, user_records, generateRandomUserID } from "../is_logged.js";
import { Notify } from "../vendor/notify.js";

// profile form
const profile_form = document.getElementById("profile_form");

const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const gender_male = document.getElementById("male");
const gender_female = document.getElementById("female");
const email_Input = document.getElementById("email-address");
const mobile_Input = document.getElementById("profile-mobile-number");
const profile_user_name = document.getElementById("user-profile-name");

// edit button for profile section only
const profile_edit_button = document.getElementById("edit-profile");
const profile_save_button = document.getElementById("save-profile");

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

const upt_address_form_close = document.getElementById(
  "upt_address_close_form"
);

// getting input using id for new address form

const address_input = document.getElementById("address-input");
const district_input = document.getElementById("district-input");
const state_input = document.getElementById("state-input");
const pincode_input = document.getElementById("pincode-input");

// getting input using id for update address form

const upt_address_input = document.getElementById("upt_address-input");
const upt_district_input = document.getElementById("upt_district-input");
const upt_pincode_input = document.getElementById("upt_pincode-input");

// append the addresses

const address_append_div = document.querySelector(".show-address");

// fetch the user details
const user_profile = user_records.find((obj) => user_id === obj.user_id);

remove_address();

// showing data from already having data

const profile_img = document.createElement("img");
profile_img.setAttribute(
  "src",
  `https://ui-avatars.com/api/?name=${user_profile.firstname} ${user_profile.lastname}&background=0D8ABC&color=fff`
);
profile_img.setAttribute(
  "alt",
  `user image of ${user_profile.firstname} ${user_profile.lastname}`
);
document.querySelector(".profile-img").append(profile_img);

first_name.value = user_profile.firstname;
last_name.value = user_profile.lastname;
email_Input.value = user_profile.emailid;
mobile_Input.value = user_profile.mobilenumber;
profile_user_name.innerText = `${user_profile.firstname} ${user_profile.lastname}`;

// gender radio checked button

if (user_profile.gender !== null) {
  if (user_profile.gender === "male") {
    gender_male.checked = true;
    gender_female.checked = false;
  } else if (user_profile.gender === "female") {
    gender_female.checked = true;
    gender_male.checked = false;
  }
}

// save button display none
profile_save_button.style.display = "none";

// edit button
profile_edit_button.addEventListener("click", (e) => {
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
profile_form.addEventListener("submit", (e) => {
  const profile_first_name = first_name.value.trim();
  const profile_last_name = last_name.value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const profile_mobile_number = mobile_Input.value.trim();

  e.preventDefault();

  const index = user_records.findIndex((obj) => user_id === obj.user_id);

  if (index !== -1) {
    const updatedObj = {
      ...user_records[index],
      firstname: profile_first_name,
      lastname: profile_last_name,
      gender,
      mobilenumber: profile_mobile_number,
    };

    user_records[index] = updatedObj;
    localStorage.setItem("users", JSON.stringify(user_records));

    Notify.success("Profile Details Updated");
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

// new address event listner
new_address.addEventListener("click", () => {
  if (profile_save_button.style.display === "") {
    Notify.error("Please complete the profile update to add new address");
  } else {
    address_div.style.display = "block";
  }
});

// close for new address
address_form_close.addEventListener("click", () => {
  address_div.style.display = "none";

  address_form.reset();
});

// close for update address form

upt_address_form_close.addEventListener("click", () => {
  upt_address_div.style.display = "none";

  localStorage.removeItem("copy_address");
});

// new address event listner

address_form.addEventListener("submit", (e) => {
  e.preventDefault();

  // getting values from inputs
  const address_value = address_input.value.trim();
  const district_value = district_input.value.trim();
  const state_value = state_input.value.trim();
  const pincode_value = pincode_input.value.trim();

  if (
    address_value !== "" &&
    district_value !== "" &&
    state_value !== "" &&
    pincode_value !== ""
  ) {
    to_save_address(address_value, district_value, state_value, pincode_value);
  } else {
    Notify.error("Please provide valid details");
  }
});

// to save new address function
function to_save_address(
  address_value,
  district_value,
  state_value,
  pincode_value
) {
  user_records.find((obj, index) => {
    if (user_id === obj.user_id) {
      const address_array = obj.address ?? [];

      if (address_array.length < 5) {
        const updatedObj = {
          ...obj,
          address: address_array,
        };

        const address_data = {
          street: address_value,
          district: district_value,
          state: state_value,
          pincode: pincode_value,
          address_id: generateRandomUserID(),
        };
        updatedObj.address.push(address_data);

        Notify.success("Address Added");

        user_records[index] = updatedObj;
        localStorage.setItem("users", JSON.stringify(user_records));

        address_div.style.display = "none";

        document.querySelector(".show-address").innerHTML = " ";

        load_address();

        address_form.reset();
      } else {
        Notify.error("You can't add more than 5 address");
      }
    }
    return obj;
  });
}

// creating element for each address element

function load_address() {
  const user_add_arr = user_profile.address;

  if (user_add_arr != null) {
    if (user_add_arr.length > 0) {
      const address_array = user_profile.address;

      show_address(address_array);
    } else if (user_add_arr.length === 0) {
      address_append_div.innerHTML = `<h3 style="text-align:center;">No Address Please Add</h3>`;
    }
  }
}

// create elements and show the address

function show_address(address_array = []) {
  address_array.forEach((item, index) => {
    const addresses_show_div = document.createElement("div");
    addresses_show_div.setAttribute("class", "addresses-show-div");
    address_append_div.appendChild(addresses_show_div);

    const address_show_main = document.createElement("div");
    address_show_main.setAttribute("class", "address-show-main");
    addresses_show_div.appendChild(address_show_main);

    const address_p = document.createElement("p");
    address_p.innerHTML = `${item.street} ${item.district} ${item.state} ${item.pincode}`;
    address_show_main.appendChild(address_p);

    const address_show_menu = document.createElement("div");
    address_show_menu.setAttribute("class", "address-show-menu");
    addresses_show_div.appendChild(address_show_menu);

    const i_menu = document.createElement("i");
    i_menu.setAttribute("class", "fa-solid fa-ellipsis-vertical");
    address_show_menu.appendChild(i_menu);

    const address_menus = document.createElement("div");
    address_menus.setAttribute("class", "address-menus");
    address_show_menu.appendChild(address_menus);

    const address_p_edit = document.createElement("p");
    address_p_edit.innerHTML = `<i class="fa-solid fa-pen"></i> Edit`;
    address_p_edit.onclick = () => update_address(JSON.stringify(item));
    address_menus.appendChild(address_p_edit);

    const address_p_delete = document.createElement("p");
    address_p_delete.innerHTML = `<i class="fa-solid fa-trash"></i> Delete`;
    address_p_delete.onclick = () => deleteaddress(index);
    address_menus.appendChild(address_p_delete);

    address_menus.style.display = "none";

    i_menu.addEventListener("click", () => {
      if (address_menus.style.display === "none") {
        address_menus.style.display = "block"; // to show the element
      } else {
        address_menus.style.display = "none"; // to hide the element
      }
    });
  });
}

// update address function
function update_address(item) {
  const par = JSON.parse(item);

  document.querySelector(".address-menus").style.display = "none";

  upt_address_div.style.display = "block";

  localStorage.setItem("copy_address", JSON.stringify(par));

  const get_copy = JSON.parse(localStorage.getItem("copy_address"));

  document.querySelector(".address-menus").style.display = "none";

  upt_address_div.style.display = "block";

  upt_address_input.value = get_copy.street;
  upt_district_input.value = get_copy.district;
  upt_pincode_input.value = get_copy.pincode;
}

// update address form logic

upt_address_form.addEventListener("submit", (e) => {
  e.preventDefault();

  const copy = JSON.parse(localStorage.getItem("copy_address"));

  const two_upt_address_input = upt_address_input.value.trim();
  const two_upt_district_input = upt_district_input.value.trim();
  const two_upt_pincode_input = upt_pincode_input.value.trim();

  const update_address_obj = {
    street: two_upt_address_input,
    district: two_upt_district_input,
    state: copy.state,
    pincode: two_upt_pincode_input,
    address_id: copy.address_id,
  };

  save_upt_address(JSON.stringify(update_address_obj));
});

// to save the updated address
function save_upt_address(item) {
  const par = JSON.parse(item);
  user_records.find((obj) => {
    if (obj.user_id === user_id) {
      const user_address = obj.address;
      save_address_in_index(JSON.stringify(par), user_address);
      return true; // add this line to return a boolean value
    }
    return false; // add this line to handle cases where obj.user_id !== user_id
  });
}

// to save the finded address in the index
function save_address_in_index(item, user_address = []) {
  const par = JSON.parse(item);

  const updatedAddress = [...user_address]; // Create a copy of user_address

  for (let i = 0; i < updatedAddress.length; i++) {
    if (updatedAddress[i].address_id === par.address_id) {
      updatedAddress[i] = par;
      break;
    }
  }
  // Find the user in the user_records array and update its address array

  user_records.forEach((add_data, index) => {
    if (add_data.user_id === par.user_id) {
      user_records[index] = updatedAddress;
    }
  });

  // Save the updated user_records array to local storage
  localStorage.setItem("users", JSON.stringify(user_records));

  Notify.success("Address Updated");

  upt_address_div.style.display = "none";

  upt_address_form.reset();

  document.querySelector(".show-address").innerHTML = " ";

  load_address();
}

// delete logic
function deleteaddress(index) {
  const confirmation = confirm("Are you sure?");
  if (confirmation) {
    user_records.find((obj) => {
      if (user_id === obj.user_id) {
        const address_len = obj.address;

        address_len.splice(index, 1);

        localStorage.setItem("users", JSON.stringify(user_records));

        Notify.success("Address Deleted");

        document.querySelector(".show-address").innerHTML = " ";

        load_address();

        return true; // add this line to return a boolean value
      }
      return false; // add this line to handle cases where user_id !== obj.user_id
    });
  }
}

// logout

const logout_btn = document.getElementById("logout-user");

logout_btn.addEventListener("click", () => {
  const confirmation = confirm("Are you sure?");
  if (confirmation) {
    localStorage.removeItem("logged_in");

    Notify.success("Logout successful");

    window.location.href = "../index.html";
  } else {
    Notify.error("Canceled");
  }
});

load_address();

function remove_address() {
  localStorage.removeItem("copy_address");
}

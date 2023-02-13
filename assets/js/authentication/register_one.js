const form = document.getElementById('form');
const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const email = document.getElementById('email');
const mobilenumber = document.getElementById('mobile_number');
const password = document.getElementById('password');
const conf_password = document.getElementById('conf_password');

let first_name_check, last_name_check, eamil_check, mobile_check, pass_check, conf_pass_check;


const user_data = JSON.parse(localStorage.getItem("users"));

// password eye
function showPwd(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {
        x.type = "text";
        el.className = 'fa fa-eye-slash showpwd';
    } else {
        x.type = "password";
        el.className = 'fa fa-eye showpwd';
    }
}



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidfirstname = firstname_reg => {
    const firstname_match = /^[a-zA-Z]*$/;
    return firstname_match.test(String(firstname_reg));
}

const isValidlastname = lastname_reg => {
    const lastname_match = /^[a-zA-Z]*$/;
    return lastname_match.test(String(lastname_reg));
}

const isValidEmail = email_reg => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email_reg).toLowerCase());
}

const isValidMobilenumber = mobilenumber_reg => {
    const mobilenumber_match = /^\d+$/;
    return mobilenumber_match.test(String(mobilenumber_reg));
}

const isValidPassword = password_reg => {
    const password_match = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$/;
    return password_match.test(String(password_reg));
}

const validateInputs = () => {

    //empty array
    const usersList = [];

    // empty object
    const user = {};

    const firstnameValue = first_name.value.trim();
    const lastnameValue = last_name.value.trim();
    const emailValue = email.value.trim();
    const mobilenumberValue = mobilenumber.value.trim();
    const passwordValue = password.value.trim();
    const confpasswordValue = conf_password.value.trim();

    // firstname validation
    if (firstnameValue === '') {
        setError(first_name, 'Name is required');
        first_name_check = false;
    }
    else if (!isValidfirstname(firstnameValue)) {
        setError(first_name, 'Name must only contains Alphabets');
        first_name_check = false;
    }
    else if (firstnameValue.length >= 20) {
        setError(first_name, 'First Name must within 20 Characters');
        first_name_check = false;
    }
    else {
        setSuccess(first_name);
        first_name_check = true;
        user["first_name"] = firstnameValue;

    }


    // lastname validation
    if (lastnameValue === '') {
        setError(last_name, 'Last Name is required');
        last_name_check = false;
    }
    else if (!isValidlastname(lastnameValue)) {
        setError(last_name, 'Last Name must only contains Alphabets');
        last_name_check = false;
    }
    else if (lastnameValue.length >= 20) {
        setError(last_name, 'Last Name must within 20 Characters');
        last_name_check = false;
    }
    else {
        setSuccess(last_name);
        last_name_check = true;
        user["last_name"] = lastnameValue;

    }

    // email validation
    if (emailValue === '') {
        setError(email, 'Email is required');
        eamil_check = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        eamil_check = false;
    }

    else {

        if (user_data !== null) {

            for (let i = 0; i < user_data.length; i++) {

                if (user_data[i].email == emailValue) {

                    setError(email, 'Already created a account using this email id \n try another email id');
                    eamil_check = false;
                    break;

                }

                else {
                    setSuccess(email);
                    eamil_check = true;
                    user["email"] = emailValue;
                }

            }


        }

        else if (user_data == null) {
            setSuccess(email);
            eamil_check = true;
            user["email"] = emailValue;

        }

    }





    // mobile number validation
    if (mobilenumberValue === '') {
        setError(mobilenumber, 'Mobile Number is required');
        mobile_check = false;
    }
    else if (!isValidMobilenumber(mobilenumberValue)) {
        setError(mobilenumber, "Mobile Number must contain number only");
        mobile_check = false;
    }
    else if (mobilenumberValue.length <= 9) {
        setError(mobilenumber, "Mobile number must be 10 numbers");
        mobile_check = false;
    }
    else if (mobilenumberValue.length > 10) {
        setError(mobilenumber, "Mobile number must be within 10 numbers");
        mobile_check = false;
    }

    else {

        if (user_data !== null) {

            for (let k = 0; k < user_data.length; k++) {

                if (user_data[k].mobilenumber === mobilenumberValue) {

                    setError(mobilenumber, 'Already created a account using this mobile number \n try another mobile number');
                    mobile_check = false;
                    break;

                }

                else {
                    setSuccess(mobilenumber);
                    mobile_check = true;
                    user["mobilenumber"] = mobilenumberValue;

                }


            }

        }

        else if (user_data == null) {
            setSuccess(mobilenumber);
            mobile_check = true;
            user["mobilenumber"] = mobilenumberValue;

        }


    }



    // password validation
    if (passwordValue === '') {
        setError(password, 'Password is required');
        pass_check = false;
    } else if (passwordValue.length <= 8) {
        setError(password, 'Password must be at least 8 characters.');
        pass_check = false;
    } else if (passwordValue.length >= 16) {
        setError(password, 'Password must be within the 16 characters.');
        pass_check = false;
    } else if (!isValidPassword(passwordValue)) {
        setError(password, 'Atleast give one uppercase, one lowercase, one special character, one number');
        pass_check = false;
    }
    else {
        setSuccess(password);
    }


    // confirm password validation
    if (confpasswordValue === '') {
        setError(conf_password, 'Confirm Password is required');
        conf_pass_check = false;
    }

    else if (passwordValue !== confpasswordValue) {
        setError(conf_password, "Confirm password doesn't match password");
        conf_pass_check = false;
    }
    else {
        setSuccess(conf_password);
        conf_pass_check = true;
        user["password"] = confpasswordValue;
    }

    if ((first_name_check === true) && (last_name_check === true) && (eamil_check === true) && (mobile_check === true) && (conf_pass_check === true)) {

        // checking in localstorage for the available of the array of object otherwise create new one

        const users = (JSON.parse(localStorage.getItem("users"))) ?? usersList;

        // ?? -> nullish operator

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created Successfully");

        window.location.href = "login.html";

    }

    else {
        alert("check details");
    }



};


form.addEventListener('submit', e => {

    e.preventDefault();

    validateInputs();

});


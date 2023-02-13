const form = document.getElementById('loginform');
const email_id = document.getElementById('login-email');
const password = document.getElementById('login-password');

let email_check, pass_check;


const usersdata = JSON.parse(localStorage.getItem("users"));

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


const isValidEmail = email_log => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email_log).toLowerCase());
}


const isValidPassword = password_log => {
    const password_match = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$/;
    return password_match.test(String(password_log));
}


const validateInputs = () => {

    const emailValue = email_id.value.trim();
    const passwordValue = password.value.trim();


    // email validation
    if (emailValue === '') {
        setError(email_id, 'Email is required');
        eamil_check = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email_id, 'Provide a valid email address');
        eamil_check = false;
    }

    else {
        setSuccess(email_id);
        email_check = true;
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
        pass_check = true;
    }



    if ((email_check == true) && (pass_check == true)) {

        let success = false;

        for (let i = 0; i < usersdata.length; i++) {

            if ((usersdata[i].email === emailValue) && (usersdata[i].password === passwordValue)) {

                success = true;
                break;
            }

        }

        if (success == true) {

            const profile_email = emailValue;

            localStorage.setItem("profile_email", profile_email);

            alert("Login Success");

            window.location.href = "../profile.html"

        }

        else {
            alert("Invadli User Credentials");
            setError(email_id, 'Invalid User Credentials');
            setError(password, 'Invalid User Credentials');
        }

    }


    else{
        alert("Check Details");
    }

};


form.addEventListener('submit', e => {

    e.preventDefault();

    validateInputs();

});
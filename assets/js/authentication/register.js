let user_data = JSON.parse(localStorage.getItem("users")) ?? [];

const form = document.getElementById('form');

// variable already have a account

let check_user = true;

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


// functions to validate the user inputs
function validateInputs() {

    const first_name = document.getElementById('first-name').value.trim();
    const last_name = document.getElementById('last-name').value.trim();
    const email_id = document.getElementById('email-id').value.trim();
    const mobilenumber = document.getElementById('mobile-number').value.trim();
    const password = document.getElementById('password').value.trim();
    const conf_password = document.getElementById('conf-password').value.trim();

    // this function returns the check user true or false

   check_already_user(email_id, mobilenumber);

    if (check_user) {

        if (password === conf_password) {

            let user = {
                "user_id": user_data.length * 2 * 2 + 1,
                "firstname": first_name,
                "lastname": last_name,
                "emailid": email_id,
                "mobilenumber": mobilenumber,
                "password": conf_password
            }

            user_data.push(user);

            localStorage.setItem("users", JSON.stringify(user_data));

            Notify.success("Account Created Successfully!");

            window.location.href = "login.html"


        }

        else {

            Notify.error("Confirm password doesn't match password!");

        }

    }

    else {

        Notify.error("Already Have a Account");

    }


}

// check the user already registered or not

function check_already_user(email_id,mobilenumber) {

    if (user_data !== null) {

        user_data.find(userobj =>{

            if ((email_id === userobj["emailid"]) && (mobilenumber === userobj["mobilenumber"])) {

                check_user = false;

            }
        });

    }

}


// event listner for register submit

form.addEventListener('submit', e => {

    e.preventDefault();

    validateInputs();

});


const form = document.getElementById('loginform');

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

function validateInputs(){

    const email_id = document.getElementById('email-id').value.trim();
    const password = document.getElementById('password').value.trim();

    const user_data = JSON.parse(localStorage.getItem("users"));

    let check_account;
    user_data.find(function(loginobj){

        if((email_id === loginobj["emailid"]) && (password === loginobj["password"])){

               return check_account = true;
        }

        else {

             return check_account = false;
        }


    });  

    if(check_account){

        const profile_email = email_id;

        localStorage.setItem("logged_in", profile_email);

        Notify.success("Login Successfull!");

        window.location.href = "../profile.html"
    }

    else{
        Notify.error("Invalid User Credentials");
    }

}


form.addEventListener('submit', e => {

    e.preventDefault();

    validateInputs();

});
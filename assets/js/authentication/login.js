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

    user_data.find(function(loginobj){

        if((email_id === loginobj["emailid"]) && (password === loginobj["password"])){

            const profile_email = email_id;

            localStorage.setItem("profile_email", profile_email);

            Notify.success("Login Successfull!");

            window.location.href = "../profile.html"
        
        }

        else{

            Notify.error("Invalid User Credentials!");

        }

    });  

}


form.addEventListener('submit', e => {

    e.preventDefault();

    validateInputs();

});
// getting the form and inputs by their id's

let admin_login_form = document.getElementById("admin-login");

let admin_login_id = document.getElementById("login_id");
let admin_password = document.getElementById("login_password");

let login_id = "admin7867"
let password = "Admin@7867"

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

admin_login_form.addEventListener("submit", function(e){

    e.preventDefault();

    let login_id_input = admin_login_id.value.trim();
    let admin_password_input = admin_password.value.trim();

    if((login_id_input === login_id) && (admin_password_input === password)){

        Notify.success("Login Successfull")

        localStorage.setItem("admin_login", true);

        window.location.href ="pages/dashboard.html";

    }

    else {
        Notfiy.error("Login Failed");
    }

})
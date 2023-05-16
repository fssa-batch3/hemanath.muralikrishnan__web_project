const root = window.location.origin;
console.log(root);
const admin_login = document.getElementById("admin_login");
const admin_login_id = document.getElementById("login_id");
const admin_login_password = document.getElementById("login_password");


const login_id = "Admin7867";
const login_pass = "Admin@7867";


admin_login.addEventListener("submit", function(e){
    e.preventDefault();

    let login_value = admin_login_id.value.trim();
    let login_pass_value = admin_login_password.value.trim();

    if((login_value === login_id) && (login_pass_value === login_pass_value)){

        Notify.success("login success");

        localStorage.setItem("admin_status", true);

        admin_login.reset();

        window.location.href = `${root}/agrokart_admin/pages/dashboard.html`
    }

    else {
        Notify.error("Invalid Credentials");
        admin_login.reset();
    }
    
});

const login_eye = document.getElementById("admin-login-passwrod");
login_eye.onclick = () => showPwd(admin_login_password.id, login_eye)


function showPwd(id, el) {
    const x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.className = "fa fa-eye-slash showpwd";
    } else {
      x.type = "password";
      el.className = "fa fa-eye showpwd";
    }
  }
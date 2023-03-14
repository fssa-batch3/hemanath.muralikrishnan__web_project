const logged_email = localStorage.getItem("logged_in");


const my_account = document.getElementById("my-account");
my_account.style.display="none";

const login_btn = document.getElementById("login-btn");


if(logged_email == null){

    window.location.href="pages/authentication/login.html";
}
else{

    my_account.style.display="";
    login_btn.style.display="none";
}




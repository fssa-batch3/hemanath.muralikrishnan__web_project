const loginpage = document.getElementById("loginform");

loginpage.onsubmit = e =>   {

    e.preventDefault();

    const emailInput = loginpage["email"].value;
    const passwordInput = loginpage["password"].value;
    let usersdata = JSON.parse(localStorage.getItem("users"));

    if (!usersdata) {
        alert("Login Failure");
        return;
    }

    let Success;
    for (let i = 0; i < usersdata.length; i++) {
        if (usersdata[i].email === emailInput && usersdata[i].password === passwordInput) {
            Success = true;
            break;
        }
    }

    if (Success) {
        alert("Login Success");
        window.location.href="../../index.html"
    } else {
        alert("Login Failure");
    }
}


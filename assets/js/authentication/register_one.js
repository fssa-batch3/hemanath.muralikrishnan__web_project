const registration = document.getElementById("registerform");

registration.onsubmit = e => {

    e.preventDefault();

    const nameInput = registration["name"].value;
    const mobilenumberInput = registration["mobile-number"].value;
    const emailInput = registration["email"].value;
    const passwordInput = registration["password"].value;

    //empty array
    const usersList = [];

    // empty object
    const user={};

    // key and values for the object
    user["name"] = nameInput;
    user["mobilenumber"] = mobilenumberInput;
    user["email"] = emailInput;
    user["password"] = passwordInput;

    // checking in localstorage for the available of the array of object otherwise create new one
    const users = JSON.parse(localStorage.getItem("users")) || usersList;

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    window.location.href="login.html"

    

}


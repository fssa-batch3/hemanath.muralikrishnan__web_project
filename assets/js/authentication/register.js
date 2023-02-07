// DOM elements

const registration = document.getElementById("registerform");
const nameInput = registration["name"];
const mobileInput = registration["mobile-number"];
const emailInput = registration["email"];
const passwordInput = registration["password"];

// adding users in array of the objects

const usersList = []; // empty array

const addUser = (name, mobilenumber, emailid, password) => {

    let records = JSON.parse(localStorage.getItem("usersList")) || usersList;

    // array.push("Hemanath");
    records.push( {
        name,
        mobilenumber,
        emailid,
        password,
    } );

    localStorage.setItem("usersList", JSON.stringify(records));

    return { name, mobilenumber, emailid, password };

};

registration.onsubmit = e => {
    e.preventDefault();

    const newUser = addUser(
        nameInput.value,
        mobileInput.value,
        emailInput.value,
        passwordInput.value
    );

    window.location.href = "login.html";
};
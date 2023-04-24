const root = window.location.origin;

const logged_email = localStorage.getItem("logged_in");


const header = `<nav class="nav-one nav-flex" aria-label="nav-one">

<div class="left">

    <a href="${root}/pages/company/about_us.html">About Us</a>
    <a href="${root}/pages/company/contact_us.html">Contact Us</a>
    <a href="${root}/pages/profile.html" id="my-profile">My Profile</a>

</div>

<div class="right">

    <p>Need help? Call Us <span><a href="tel:+91 1234567890">+91 1234567890</a></span></p>

</div>


</nav>

<nav class="nav-two nav-flex" aria-label="nav-two">

<div class="logo">

    <a href="${root}/index.html">Agrokart</a>

</div>

<div class="search">

    <input type="text" placeholder="Search" />
    <i class="fa-solid fa-magnifying-glass"></i>

</div>

<div class="right-main nav-flex">

    <div class="option-one">

        <a href="${root}/pages/wishlist.html"><i class="fa-regular fa-heart"></i>
            Wishlist <span class="wishlist-notify" id="wishlist-count"></span></a>

    </div>

    <div class="option-two">

        <a href="${root}/pages/cart.html"><i class="fa-solid fa-cart-shopping"></i>
            Cart <span class="cart-notify" id="cart-count"></span></a>

    </div>

    <div class="login">
        <p id="login-btn"><i class="fa-solid fa-right-to-bracket"></i>
            Login</p>
    </div>

</div>

</nav>


<nav class="nav-three nav-flex" aria-label="nav-three">

<div class="main-menu">

    <ul class="main-ul">

        <li class="list-one"><a href="#"><i class="fa-solid fa-border-all"></i> Browse All Categories <i
                    class="fa-solid fa-caret-down"></i></a>

            <div class="dropdown_menu">

                <ul>
                    <li><a href="${root}/pages/product_list/list_product.html?cat=01">Exotic Fruits</a></li>
                    <li><a href="${root}/pages/product_list/list_product.html?cat=02">Exotic Veggies</a></li>
                    <li><a href="${root}/pages/product_list/list_product.html?cat=03">Fresh Veggies</a></li>
                    <li><a href="${root}/pages/product_list/list_product.html?cat=04">Fresh Fruits</a></li>
                    <li><a href="${root}/pages/product_list/list_product.html?cat=05">Leafy Green</a></li>
                    <li><a href="${root}/pages/product_list/list_product.html?cat=06">Tubers</a></li>

                </ul>

            </div>

        </li>
        <li class="home"><a href="${root}/index.html">Home</a></li>
        <li class="products"><a href="${root}/pages/product_list/list_product.html?cat=00">Products</a></li>
    </ul>

</div>

<div class="assistant">

    <i class="fa-solid fa-headset headphone"></i>
    <a href="tel:+91 1234567890">+91 1234567890</a>
</div>

</nav>


<nav class="mobile-nav" aria-label="mobile-nav">

        <div class="mobile-burger-menu">

           <label for="side-menu" class="mobile-open">&#9776;</label>

            <div class="side-menu-mobile">

                <div class="mobile-search">

                    <input type="text" placeholder="Search Products">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    
                </div>

                <a href="${root}/index.html"><p>Home</p></a>

                <div class="side-menu-items">

                    <div class="side-products side-item">
                        <i class="fa-solid fa-list"></i>
                        <a href="${root}/pages/product_list/list_product.html?cat=00">Products</a>
                    </div>

                    <div class="side-auth side-item" id="mobile-login">
                        <i class="fa-solid fa-arrow-right-to-bracket"></i>
                        <p id="mobile-login-btn">Log in/Sign Up</p>
                    </div>

                    <div class="side-auth side-item" id="mobile-profile">
                        <i class="fa-solid fa-user"></i>
                        <a href="${root}/pages/profile.html">My Account</a>
                    </div>

                    <div class="side-ass side-item">
                        <i class="fa-solid fa-headset headphone"></i>
                        <a href="tel:+91 1234567890">+91 1234567890</a>
                    </div>

                </div>


            </div>
        </div>

        <div class="mobile-logo">
            <a href="${root}/index.html" aria-label="mobile-nav">Agrokart</a>
        </div>

        <div class="mobile-menu">
            <a href="${root}/pages/wishlist.html"><i class="fa-regular fa-heart"></i>
            <span class="mobile-wishlist-notify" id="mobile-wishlist-count"></span>
            </a>
            <a href="${root}/pages/cart.html"><i class="fa-solid fa-cart-shopping"></i>
            <span class="mobile-cart-notify" id="mobile-cart-count"></span>
            </a>
        </div>

    </nav>

<div class="one-form">


<div class="login-main">

    <div class="login-form">

    <span class="login-close" id="login_close"><i class="fa-solid fa-square-xmark"></i></span>

        <form action="#" method="" id="loginform">

            <p class="act">Log in</p>

            <div class="input-wrapper">
                <input type="email" id="email-id" class="form-control" placeholder="Enter Your Email" required="true" title="Please Enter Valid Email Id without spaces">
                <label for="email-id" class="control-label">Email id</label>
              </div>

              <div class="input-wrapper">
                <i class="fa fa-eye showpwd" onClick="showPwd('password', this)"></i>
                <input type="password" id="password" autocomplete="password" class="form-control" placeholder="Enter Your Password" required="true" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" minlength="8" maxlength="16" title="Password must contains at least one lowercase, one uppercase, one lowercase and one special, password length minimum 8 characters">
                <label for="password" class="control-label">Password</label>
              </div>

            <a href="#" class="forgot-pass">Forgot Password?</a>

            <button type="submit">Continue</button>

            <p class="dont-have">Don't have an account?</p>
            <p class="register-here">Create Account</p>
        </form>

    </div>
   
</div>

</div>

<div class="two-form">

<div class="register-main">

<div class="register-bond">

<span class="register-close" id="register_close"><i class="fa-solid fa-square-xmark"></i></span>


    <form id="form">

        <h1>Sign Up</h1>

        <div class="input-wrapper">
            <input type="text" id="first-name" class="form-control" placeholder="Enter your first name" required="true" pattern="[A-Za-z]{1,16}" title="Please enter valid first name without number, special character and white spaces" maxlength="16">
            <label for="first-name" class="control-label">Firstname</label>
          </div>

          <div class="input-wrapper">
            <input type="text" id="last-name" class="form-control" placeholder="Enter your last name" required="true" pattern="[A-Za-z]{1,16}" title="Please enter valid last name without number, special character and white spaces" maxlength="16">
            <label for="last-name" class="control-label">Lastname</label>
          </div>

          <div class="input-wrapper">
            <input type="email" id="reg-email-id" class="form-control" placeholder="Enter Your Email" required="true" title="Please enter valid email id without white spaces">
            <label for="email-id" class="control-label">Email id</label>
          </div>

          <div class="input-wrapper">
            <input type="tel" id="mobile-number" class="form-control" placeholder="Enter Your Mobile Number" required="true" pattern="[0-9]{10}" minlength="10" maxlength="10" title="Please enter valid mobile number without alphabets, special characters and white spaces">
            <label for="mobile-number" class="control-label">Mobile Number</label>
          </div>

          <div class="input-wrapper">
            <i class="fa fa-eye showpwd" onClick="showPwd('reg-password', this)"></i>
            <input type="password" id="reg-password" autocomplete="reg-password" class="form-control" placeholder="Enter Your Password" required="true" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" minlength="8" maxlength="16" title="Password must contains at least one lowercase, one uppercase, one lowercase and one special, password length minimum 8 characters">
            <label for="password" class="control-label">Password</label>
          </div>
          

          <div class="input-wrapper">
            <i class="fa fa-eye showpwd" onClick="showPwd('conf-password', this)"></i>
            <input type="password" id="conf-password" autocomplete="conf-password" class="form-control" placeholder="Enter Your Confirm password" required="true" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" minlength="8" maxlength="16" title="Password must contains at least one lowercase, one uppercase, one lowercase and one special, password length minimum 8 characters">
            <label for="conf-password" class="control-label">Confirm Password</label>
          </div>

        <button type="submit">Sign Up</button>

        <p class="register-already">Already have an account?</p>
        <p class="register-login">Log in</p>
    </form>

    </div>


</div>


</div>

`

const footer = `<footer>

<!-- footer one start -->

<div class="footer-one footer-flex">

    <div class="footer-logo">

        <a href="${root}/index.html">AgroKart</a>

    </div>

    <div class="company footer-flex-two">

        <p class="footer-title">Company</p>
        <a href="${root}/pages/company/about_us.html" class="footer-item">About Us</a>
        <a href="${root}/pages/company/contact_us.html" class="footer-item">Contact US</a>
    </div>

    <div class="account footer-flex-two">

        <p class="footer-title">Account</p>
        <p class="footer-item" id="login-btn-foot">Sign in</p>
        <a href="${root}/pages/cart.html" class="footer-item">View Cart</a>
        <a href="${root}/pages/wishlist.html" class="footer-item">My Wishlist</a>

    </div>

    <div class="deliver footer-flex-two">

        <p class="footer-title">Cities we Deliver to</p>
        <p class="footer-item">Chennai</p>

    </div>


</div>
<!-- footer one ends -->

<!-- footer two starts -->

<div class="footer-two">

    <div class="footer-two-left">

        <div class="footer-contact">

            <i class="fa-solid fa-location-dot"></i>
            <p><b> Address:</b> <a href="https://goo.gl/maps/bYL8xG6sQ8hjbHZA6">Chennai, Tamil Nadu</a></p>

        </div>

        <div class="footer-contact">

            <i class="fa-solid fa-phone"></i>
            <p> <b>Call Us:</b> <a href="tel:+91 1234567890">+91 1234567890</a></p>

        </div>

        <div class="footer-contact">

            <i class="fa-solid fa-envelope"></i>
            <p> <b>Email:</b> <a href="mailto:john@example.com">example@gmail.com</a></p>

        </div>

    </div>

    <div class="footer-right">

        <p>Secured Payment Gateways</p>

        <div class="payment">

            <i class="fa-brands fa-google-pay"></i>
            <i class="fa-brands fa-cc-visa"></i>

        </div>

    </div>

</div>
<!-- footer two ends -->

<!-- footer three starts -->

<div class="footer-three">

    <div class="copyright">

        <p><b>©</b> 2022, <span><a href="${root}/index.html">AgroKart</span></a></p>
        <p>All Rights Reserved</p>

    </div>

    <div class="social-media">

        <div class="links">

            <p>Follow us</p>
            <a href="#" aria-label="socialmedia"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#" aria-label="socialmedia"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="socialmedia"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" aria-label="socialmedia"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="socialmedia"><i class="fa-brands fa-twitter"></i></a>

        </div>

        <p>First Order Discount: <b>15%</b></p>

    </div>

</div>

<!-- footer three ends -->

</footer>`;

let today = new Date();

let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

let current_date = `${month}/${date}/${year}`;



// to append the above elements 

if (logged_email !== null) {

    document.body.insertAdjacentHTML("afterbegin", header);

    document.body.insertAdjacentHTML("afterend", footer);

    document.getElementById("login-btn").style.display = "none";

    document.getElementById("mobile-login").style.display = "none";

    document.getElementById("login-btn-foot").style.display = "none";


}

else {

    document.body.insertAdjacentHTML("afterbegin", header);

    document.getElementById("my-profile").style.display = "none";

    document.getElementById("mobile-profile").style.display = "none";

    document.body.insertAdjacentHTML("afterend", footer);

}

// to show the login form

document.getElementById("login-btn").addEventListener("click", function (e) {

    document.querySelector(".one-form").style.display = "block";


});

// redirect to the register page

document.querySelector(".register-here").addEventListener("click", function (e) {

    document.querySelector(".one-form").style.display = "none";

    document.querySelector(".two-form").style.display = "block";


});

// in register btn to direct to login page

document.querySelector(".register-login").addEventListener("click", function (e) {

    document.querySelector(".one-form").style.display = "block";

    document.querySelector(".two-form").style.display = "none";

});

// footer register bth

document.getElementById("login-btn-foot").addEventListener("click", function (e) {

    document.querySelector(".one-form").style.display = "block";
});


// to close the login form

document.querySelector(".login-close").addEventListener("click", function (e) {

    document.querySelector(".one-form").style.display = "none";




});

// to close the register form

document.querySelector(".register-close").addEventListener("click", function (e) {

    document.querySelector(".two-form").style.display = "none";


});



// mobile nav

document.querySelector(".side-menu-mobile").style.display = "none";


document.querySelector(".mobile-open").addEventListener("click", function (e) {

    if ((document.querySelector(".side-menu-mobile").style.display) === "none") {

        document.querySelector(".side-menu-mobile").style.display = "block";
    }

    else {
        document.querySelector(".side-menu-mobile").style.display = "none";
    }
})


document.getElementById("mobile-login-btn").addEventListener("click", function (e) {

    document.querySelector(".one-form").style.display = "block";

    document.querySelector(".side-menu-mobile").style.display = "none";
})


// functions for login



const form = document.getElementById('loginform');

// variable to check the account is available or not

let check_account = false;

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



// function to validate inputs

function login_validateInputs() {

    const email_id = document.getElementById('email-id').value.trim();
    const password = document.getElementById('password').value.trim();

    let user_db = JSON.parse(localStorage.getItem("users"));

    if (user_db != null) {
        //  check the user is registered or not

        find_user(email_id, password);


        if (check_account) {

            const profile_email = email_id;

            localStorage.setItem("logged_in", profile_email);

            Notify.success("Login Successfull!");

            form.reset();

            window.location.href = `${root}/index.html`;
        }

        else {

            Notify.error("Invalid User Credentials");
        }

    }

    else {

            Notify.error("Please create account before loign");

            form.reset();

            document.querySelector(".one-form").style.display = "none";

            document.querySelector(".two-form").style.display = "block";


        
}


}

// function to find the user in already registered data

function find_user(email_id, password) {

    const user_data = JSON.parse(localStorage.getItem("users"));

    user_data.find(loginobj => {

        if ((email_id === loginobj["emailid"]) && (password === loginobj["password"])) {

            check_account = true;

        }

    });





}


// event lister for login submit btn
form.addEventListener('submit', e => {

    e.preventDefault();

    login_validateInputs();

});

// functions for register form

let user_data_two = JSON.parse(localStorage.getItem("users")) ?? [];

const reg_form = document.getElementById('form');

// variable already have a account

let check_user = true;


// functions to validate the user inputs
function validateInputs() {

    const first_name = document.getElementById('first-name').value.trim();
    const last_name = document.getElementById('last-name').value.trim();
    const email_id = document.getElementById('reg-email-id').value.trim();
    const mobilenumber = document.getElementById('mobile-number').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const conf_password = document.getElementById('conf-password').value.trim();

    // this function returns the check user true or false

    check_already_user(email_id, mobilenumber);

    if (check_user) {

        if (password === conf_password) {

            let user = {
                "user_id": user_data_two.length + Math.random().toString(16).slice(2),
                "firstname": first_name,
                "lastname": last_name,
                "emailid": email_id,
                "mobilenumber": mobilenumber,
                "password": conf_password,
                "user_account_created_time": current_date,
                "address": []
            }

            user_data_two.push(user);

            localStorage.setItem("users", JSON.stringify(user_data_two));

            Notify.success("Account Created Successfully!");

            document.querySelector(".two-form").style.display = "none";

            document.querySelector(".one-form").style.display = "block";

            reg_form.reset();
        }

        else {

            Notify.error("Confirm password doesn't match password!");

        }

    }

    else {

        Notify.error("Already Have a Account Please Login");

        document.querySelector(".two-form").style.display = "none";

        document.querySelector(".one-form").style.display = "block";

        reg_form.reset();

    }


}

// check the user already registered or not

function check_already_user(email_id, mobilenumber) {

    if (user_data_two !== null) {

        user_data_two.find(userobj => {

            if ((email_id === userobj["emailid"]) && (mobilenumber === userobj["mobilenumber"])) {

                check_user = false;

            }
        });

    }

}


// event listner for register submit

reg_form.addEventListener('submit', e => {

    e.preventDefault();

    validateInputs();

});


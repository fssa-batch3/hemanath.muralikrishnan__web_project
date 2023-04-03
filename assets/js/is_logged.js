const root = window.location.origin;

const logged_email = localStorage.getItem("logged_in");



const header = `<nav class="nav-one nav-flex" aria-label="nav-one">

<div class="left">

    <a href="${root}/pages/company/about_us.html">About Us</a>
    <a href="${root}/pages/company/contact_us.html">Contact Us</a>
    <a href="${root}/pages/profile.html" id="my-account">My Account</a>

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

        <a href="${root}/pages/authentication/login.html" id="login-btn"><i class="fa-solid fa-right-to-bracket"></i>
            Login</a>

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
        <a href="${root}/pages/authentication/login.html" class="footer-item" id="login-btn-foot">Sign in</a>
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



if(logged_email !== null){

    document.body.insertAdjacentHTML("afterbegin", header);

    document.body.insertAdjacentHTML("afterend", footer);

    document.getElementById("login-btn").style.display="none";

    document.getElementById("login-btn-foot").style.display="none";


}
else{

    document.body.insertAdjacentHTML("afterbegin", header);

    document.body.insertAdjacentHTML("afterend", footer);

    document.getElementById("my-account").style.display ="none";

    window.location.href=`${root}/pages/authentication/login.html`;
}





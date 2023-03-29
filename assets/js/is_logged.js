const root = window.location.origin;

const logged_email = localStorage.getItem("logged_in");


const beforeloginheader = `<nav class="nav-one nav-flex" aria-label="nav-one">

<div class="left">

    <a href="${root}/pages/company/about_us.html">About Us</a>
    <a href="${root}/pages/company/contact_us.html">Contact Us</a>

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
const afterloginheader = `<nav class="nav-one nav-flex" aria-label="nav-one">

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

if(logged_email !== null){

    document.body.insertAdjacentHTML("afterbegin", afterloginheader);

    document.getElementById("login-btn").style.display="none"


}
else{

    document.body.insertAdjacentHTML("afterbegin", beforeloginheader);

    window.location.href=`${root}/pages/authentication/login.html`;
}





const root = window.location.origin;

let login_status = localStorage.getItem("admin_login");

const menus = ` <div class="wrapper hover_collapse">

<!-- Top bar -->

<div class="top_navbar">
    <!-- logo -->

    <div class="logo_menu">
        <div class="logo">Agrokart Admin</div>
        <!-- menu button -->
        <div class="menu">
            <div class="hamburger">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </div>

    <!-- admin profile -->

    <div class="admin-profile">

        <div class="profile-cont">
            <span class="icon"><i class="fa-solid fa-circle-user"></i></span>
            <span class="text">Admin ▾</span>
        </div>

        <div class="profile-opt">
            
            <a href="#" class="profile-opt-item">
                <span class="icon"><i class="fa-regular fa-user"></i></span>
                <span class="text">Go to profile</span>
            </a>

            <a href="#" class="profile-opt-item">
                <span class="icon"><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
                <span class="text">Logout</span>
            </a>

        </div>

    </div>


</div>

<!-- Sidebar -->

<div class="sidebar">

    <div class="sidebar_inner">
        <ul>
            <li>
                <a href="${root}/agrokart_admin/pages/dashboard.html">
                    <span class="icon"><i class="fa fa-qrcode"></i></span>
                    <span class="text">Dashboard</span>
                </a>
            </li>

            <li>

                <a href="#" class="main-ul">
                    <span class="icon"><i class="fa-solid fa-users"></i></span>
                    <span class="text">User ▾</span>
                </a>

                <ul class="dropdown">
                    <li><a href="#">Users List</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fa-solid fa-store"></i></span>
                    <span class="text">Sellers ▾</span>
                </a>

                <ul class="dropdown">
                    <li><a href="#">Sellers List</a></li>
                </ul>

            </li>

            <li>
                <a href="#">
                    <span class="icon"><i class="fa-solid fa-bars-staggered"></i></span>
                    <span class="text">Other Operations ▾</span>
                </a>

                <ul class="dropdown">
                    <li><a href="${root}/agrokart_admin/pages/other_operation/add_city.html">Add city</a></li>
                </ul>

            </li>

        </ul>
    </div>

</div>

</div>`

if(login_status != null){
    document.body.insertAdjacentHTML("afterbegin", menus);
}

else {
    window.location.href = `${root}/agrokart_admin/index.html`;
}



let li_items = document.querySelectorAll(".sidebar ul li");
let hamburger = document.querySelector(".hamburger");
let wrapper = document.querySelector(".wrapper");

li_items.forEach((li_item)=>{
    li_item.addEventListener("mouseenter", ()=>{
 
     li_item.closest(".wrapper").classList.remove("hover_collapse");
 
   })
 })

 li_items.forEach((li_item)=>{
    li_item.addEventListener("mouseleave", ()=>{
 
     li_item.closest(".wrapper").classList.add("hover_collapse");
 
    })
 })

 hamburger.addEventListener("click", () => {

    hamburger.closest(".wrapper").classList.toggle("hover_collapse");
})

// profile options show and none using js

document.querySelector(".profile-opt").style.display = "none";

document.querySelector(".profile-cont").addEventListener('click', function(e){


   if((document.querySelector(".profile-opt").style.display) === "none"){

      document.querySelector(".profile-opt").style.display="block"
   }
   else if((document.querySelector(".profile-opt").style.display) ==="block"){

      document.querySelector(".profile-opt").style.display="none"
   }
});
const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

const profile_img = document.querySelector(".profile .profile-img img");
console.log(profile_img);
const profile_icon = document.querySelector(".profile .profile-img i")
const dropdown = document.querySelector(".profile ul");

profile_img.addEventListener('click', function () {

  profile_icon.classList.toggle("rotate");
  dropdown.classList.toggle("show")

});

window.addEventListener('click', function (e) {

  if (e.target !== profile_img) {
    if (e.target !== dropdown) {
      if (dropdown.classList.contains("show")) {
        profile_icon.classList.remove("rotate");
        dropdown.classList.remove("show");
      }
    }
  }
})
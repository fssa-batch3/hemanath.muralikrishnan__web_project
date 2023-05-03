document.getElementById("profile_section").style.display = "none";

document.getElementById("profile-my-dashboard").addEventListener("click", function (e) {

    document.getElementById("profile-my-dashboard").style.backgroundColor = "grey";

    document.getElementById("profile-item-menu").style.backgroundColor = "";

    document.getElementById("profile-manage-dashboard").style.display = "block";

    document.getElementById("profile_section").style.display = "none";
})


// profile item menu
document.getElementById("profile-item-menu").addEventListener('click', function (e) {

    document.getElementById("profile-my-dashboard").style.backgroundColor = "";

    document.getElementById("profile-item-menu").style.backgroundColor = "grey";

    document.getElementById("profile-manage-dashboard").style.display = "none";

    document.getElementById("profile_section").style.display = "block";

})
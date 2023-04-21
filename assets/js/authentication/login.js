const user_data = JSON.parse(localStorage.getItem("users"));

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
function validateInputs() {

  const email_id = document.getElementById('email-id').value.trim();
  const password = document.getElementById('password').value.trim();


  //  check the user is registered or not

  find_user(email_id, password);


  if (check_account) {

    const profile_email = email_id;

    localStorage.setItem("logged_in", profile_email);

    Notify.success("Login Successfull!");

    window.location.href = "../profile.html"
  }

  else {

    Notify.error("Invalid User Credentials");
  }

}



// function to find the user in already registered data

function find_user(email_id, password) {

  user_data.find(loginobj => {

    if ((email_id === loginobj["emailid"]) && (password === loginobj["password"])) {

      check_account = true;

    }

  });

}


// event lister for login submit btn
form.addEventListener('submit', e => {

  e.preventDefault();

  validateInputs();

});
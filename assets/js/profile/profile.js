const localdata = JSON.parse(localStorage.getItem("users"));
console.log(localdata);

const profile_email = localStorage.getItem("profile_email");
console.log(profile_email);

const name_Input = document.getElementById("user_name");
const email_Input =  document.getElementById("email-address");
const mobile_Input =  document.getElementById("mobile-number");


// localdata.find (

//     function(userobj){

//         if(profile_email === profile_check){
            
//           name_Input.value = userobj["name"];
//           email_Input.value = userobj["email"];
//           mobile_Input.value = userobj["mobilenumber"];  

//           return true;
//         }

//         else{
//             alert("Profile Failure");
//             return false;
//         }
//     }
// );



let Success = false, i;

    for (i = 0; i < localdata.length; i++) {
        if (localdata[i].email == profile_email) {
            Success = true;
            break;
        }
    }


if(Success == true){

    name_Input.value = localdata[i].name;
    email_Input.value = localdata[i].email;
    mobile_Input.value = localdata[i].mobilenumber;

}

else{

    alert("Error");

}






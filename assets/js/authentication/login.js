// converting string into array of objects


const loginUser =JSON.parse(localStorage.getItem("usersList"));

console.log(loginUser);

const loginpage = document.getElementById("loginform");
const emailInput = loginpage["email"];
const passwordInput = loginpage["password"];



loginpage.onsubmit = e => {
    
    e.preventDefault();
    
    loginUser.find (

    function(userobj){

        // saving data from array of objects
        const loginemail = userobj["emailid"];
        const loginpass = userobj["password"];


        // saving data from input fields
        const emailvalue = emailInput.value;
        const passvalue = passwordInput.value;

        if((emailvalue === loginemail) && (passvalue === loginpass)){
            alert("Login Success");
            return true;
            
        }

        else{
            alert("Login Failure");
            return false;
        }
    }
);


}



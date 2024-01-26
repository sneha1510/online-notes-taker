// Import the auth module from your firebase-init.js file
import { auth } from "./firebase-init-sdk.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const button = document.getElementById("signup-btn");
button.addEventListener("click",(e)=>{
    console.log("inside form");

    e.preventDefault(); // Prevent the default form submission

    // Get user input
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Use createUserWithEmailAndPassword
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User signed up:", user);
            window.location.href = 'signin.html';
       
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log("Error:", errorMessage);
            alert("Something Went Wrong!");
            document.getElementById("signupEmail").value = "";
            document.getElementById("signupPassword").value = "";
      
        });

})

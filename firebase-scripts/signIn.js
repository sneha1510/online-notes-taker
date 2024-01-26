import { auth } from "./firebase-init-sdk.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";



const button = document.getElementById("signin-btn");
button.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission


    const email = document.getElementById("signinUsername").value;
    const password = document.getElementById("signinPassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log("sigin");
            window.location.href = 'notes.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert("Invalid Credentials!");
            document.getElementById("signinUsername").value = "";
            document.getElementById("signinPassword").value = "";
        });
})

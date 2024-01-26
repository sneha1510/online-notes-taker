import { auth } from "./firebase-init-sdk.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const button = document.getElementById("signout-btn");
button.addEventListener("click", () => {


    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("signout done");
        window.indexedDB.deleteDatabase(auth.persistenceManager.persistence.db.name);
        window.location.href = 'signin.html';

    
    }).catch((error) => {
        // An error happened.
        alert("Something Went Wrong!");
    });
})

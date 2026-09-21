import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();
const logoutBtn = document.querySelector('.btnLogout');

logoutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = "index.html"; // Redirect back to login
    }).catch((error) => {
        console.error("Logout Error:", error);
    });
});


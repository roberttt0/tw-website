// Funcție pentru login
function login(username, password) {
    fetch("users.json")
        .then(response => response.json())
        .then(users => {
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem("currentUser", JSON.stringify(user));
                alert("Login reușit!");
                updateUI();
            } else {
                alert("Nume utilizator sau parolă greșită.");
            }
        })
        .catch(error => console.error("Eroare:", error));
}

// Funcție pentru logout
function logout() {
    localStorage.removeItem("currentUser");
    alert("Ai fost delogat!");
    updateUI();
}

// Funcție pentru a verifica dacă utilizatorul este logat
function updateUI() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const loginForm = document.getElementById("login-form");
    const logoutButton = document.getElementById("logout-button");
    const welcomeMessage = document.getElementById("welcome-message");

    if (currentUser) {
        loginForm.style.display = "none";
        logoutButton.style.display = "block";
        welcomeMessage.textContent = `Bun venit, ${currentUser.username}!`;
    } else {
        loginForm.style.display = "block";
        logoutButton.style.display = "none";
        welcomeMessage.textContent = "";
    }
}

// Validare formular
function validateForm(username, password) {
    // Validare username (minim 3 caractere)
    const usernameRegex = /^.{3,}$/;
    if (!usernameRegex.test(username.trim())) {
        alert("Numele de utilizator trebuie să aibă cel puțin 3 caractere.");
        return false;
    }

    // Validare parolă (minim 5 caractere)
    const passwordRegex = /^.{5,}$/;
    if (!passwordRegex.test(password.trim())) {
        alert("Parola trebuie să aibă cel puțin 5 caractere.");
        return false;
    }

    return true;
}

// Evenimente pentru butoane
document.getElementById("login-button").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (validateForm(username, password)) {
        login(username, password);
    }
});

document.getElementById("logout-button").addEventListener("click", logout);

document.addEventListener("DOMContentLoaded", updateUI);

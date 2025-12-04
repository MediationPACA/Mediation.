// auth3.js

const PASSWORD_BASE64 = "UmFwYXRyaWV1cnM4Mw==";

// Fonction pour vérifier le mot de passe lors du login
function verifier() {
    try {
        const passwordInput = document.getElementById("password").value;
        if (window.btoa(passwordInput) === PASSWORD_BASE64) {
            // Stocke l'authentification dans localStorage
            localStorage.setItem("auth", PASSWORD_BASE64);
            // Redirige vers la page protégée
            window.location.href = "Index3.html";
        } else {
            alert("Mot de passe incorrect !");
        }
    } catch (e) {
        console.error("Erreur lors de la vérification du mot de passe", e);
    }
}

// Fonction pour vérifier l'accès à une page protégée
function checkAccess() {
    try {
        if (localStorage.getItem("auth") !== PASSWORD_BASE64) {
            // Redirige vers le login si l'utilisateur n'est pas authentifié
            window.location.href = "login3.html";
        }
    } catch (e) {
        window.location.href = "login3.html";
    }
}

// Fonction pour se déconnecter
function deconnexion() {
    try {
        localStorage.removeItem("auth");
        window.location.href = "login3.html";
    } catch (e) {
        window.location.href = "login3.html";
    }
}

// Export pour compatibilité HTML
window.verifier = verifier;
window.checkAccess = checkAccess;
window.deconnexion = deconnexion;

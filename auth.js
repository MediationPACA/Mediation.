(function() {
    function checkPassword(input) {
        // Mot de passe encodé en base64 (pour l'exemple)
        var encodedPassword = "bWV0b3RhY2FwODM="; 
        return btoa(input) === encodedPassword;
    }

    window.verifier = function() {
        var mdp = document.getElementById("password").value;
        if (checkPassword(mdp)) {
            localStorage.setItem("auth", "true"); // Stocke l'authentification
            window.location.href = "index.html"; // Redirige vers la page protégée
        } else {
            alert("Mot de passe incorrect !");
        }
    };

    window.checkAccess = function() {
        if (localStorage.getItem("auth") !== "true") {
            window.location.href = "login.html"; // Redirige vers la connexion
        }
    };

    window.deconnexion = function() {
        localStorage.removeItem("auth"); // Supprime l'accès
        window.location.href = "login.html";
    };
})();

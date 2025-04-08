(function () {
    function checkPassword(input) {
        // Mot de passe encodé en base64 (pour l'exemple)
        var encodedPassword = "bWV0b3RhY2FwODM=";
        return btoa(input) === encodedPassword;
    }

    function getCurrentPassword() {
        return "bWV0b3RhY2FwODM="; // identique à encodedPassword
    }

    window.verifier = function () {
        var mdp = document.getElementById("password").value;
        if (checkPassword(mdp)) {
            localStorage.setItem("auth", btoa(mdp)); // Stocke le mot de passe encodé
            window.location.href = "index.html"; // Redirige vers la page protégée
        } else {
            alert("Mot de passe incorrect !");
        }
    };

    window.checkAccess = function () {
        if (localStorage.getItem("auth") !== getCurrentPassword()) {
            window.location.href = "login.html"; // Redirige si le mdp a changé
        }
    };

    window.deconnexion = function () {
        localStorage.removeItem("auth"); // Supprime l'accès
        window.location.href = "login.html";
        function checkAccessInternal() {
            if (localStorage.getItem("auth") !== getCurrentPassword()) {
              window.location.href = "login.html";
            }
          }
        
          // Appel direct sur les pages protégées
          if (document.body.classList.contains("protected")) {
            checkAccessInternal();
          }
        
          window.verifier = function () {
            var mdp = document.getElementById("password").value;
            if (checkPassword(mdp)) {
              localStorage.setItem("auth", btoa(mdp));
              window.location.href = "index.html";
            } else {
              alert("Mot de passe incorrect !");
            }
          };
        
          window.deconnexion = function () {
            localStorage.removeItem("auth");
            window.location.href = "login.html";
          };
        }})();
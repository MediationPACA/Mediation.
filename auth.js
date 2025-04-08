(function () {
    function checkPassword(input) {
        var encodedPassword = "bWV0b3RhY2FwODM=";
        return btoa(input) === encodedPassword;
    }

    function getCurrentPassword() {
        return "bWV0b3RhY2FwODM="; 
    }

    window.verifier = function () {
        var mdp = document.getElementById("password").value;
        if (checkPassword(mdp)) {
            localStorage.setItem("auth", btoa(mdp)); /
            window.location.href = "index.html"; // 
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
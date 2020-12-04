const login = document.getElementById("login");
let logged = false;

login.addEventListener("click", function(){
    if (!logged){
        alert("Bienvenue")
        login.innerText = "déconnexion";
        logged = true;
    }else {
        alert("Déconnexion")
        login.innerText = "connexion";
        logged = false;
    }
});
function verif(){
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();

    if(!(email) || !(password)){
        alert("invaliiide doit etre remplir les champs");
        return;
    }
    window.location.href="slides.html";
    return false;
}
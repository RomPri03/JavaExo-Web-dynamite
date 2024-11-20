var MavariableString="toto";
var MavariableNumerique=prompt("entrez un nombre",100);
if (MavariableString=="toto" && MavariableNumerique !=200 || MavariableNumerique<=100){
    alert("je suis le cas 1");
}else{
    alert("je suis le cas 2");
}

window.addEventListener('resize', function() {
    if (window.innerWidth < 800) {
        alert("La largeur de ta fenetre est trop petite !");
    }
});
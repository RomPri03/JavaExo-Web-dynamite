var MavariableString="toto";
var MavariableNumerique=100;
var MavariableTableau=['Apple','Banana'];
var MavariableObjet=window;
var MavariableNumerique=prompt("entrez un nombre",100);

alert(MavariableString + MavariableNumerique + MavariableTableau[0] + MavariableObjet.location.pathname);

if (MavariableString=="toto" && MavariableNumerique !=200 || MavariableNumerique<=100){
    alert("je suis le cas 1");
}else{
    alert("je suis le cas 2");
}

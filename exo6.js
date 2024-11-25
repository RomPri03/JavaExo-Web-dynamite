var n = parseInt(prompt("Entrez une valeur"));
var result = 0;

for(var i = 0; i < n + 1; i++) {
    result += i;
}

alert( "La valeur est egale à " + result);
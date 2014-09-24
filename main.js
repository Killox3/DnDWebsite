/*Dice Roller Function
 rollD(x) returns a interger randomly selcted between 1 and x */
function rollD (x) {
  var rolled = 0;
  rolled = Math.ceil(Math.random() * x);
  return rolled;
}

/* Ability Modifier Calculation Function 
  takes an ability score and returns the resulting ability modifier*/

function abilityMod(x) {
  var mod = 0;
  mod = Math.floor((x-10)/2);
  return mod;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

document.querySelector("#D4").innerHTML = rollD(4);
document.querySelector("#D6").innerHTML = rollD(6);
document.querySelector("#D8").innerHTML = rollD(8);
document.querySelector("#D10").innerHTML = rollD(10);
document.querySelector("#D12").innerHTML = rollD(12);
document.querySelector("#D20").innerHTML = rollD(20);
document.querySelector(placeholder="#strMod").innerHTML = abilityMod($("#str").val());

//Dice Roller Function
function rollD (x) {
  var rolled = 0;
  rolled = Math.ceil(Math.random() * x);
  return rolled;
}



document.querySelector("#D4").innerHTML = rollD(4);
document.querySelector("#D6").innerHTML = rollD(6);
document.querySelector("#D8").innerHTML = rollD(8);
document.querySelector("#D10").innerHTML = rollD(10);
document.querySelector("#D12").innerHTML = rollD(12);
document.querySelector("#D20").innerHTML = rollD(20);


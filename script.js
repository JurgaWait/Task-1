/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.getElementById("output").style.visibility = "hidden";
document.getElementById("search").addEventListener("input", function(e) {
 
let submitInput = document.getElementById("submit-btn");
submitInput.addEventListener("click", function(event) {
    if (event) {
        event.preventDefault();
        document.getElementById("submit-btn").click(); 
        document.getElementById("output").style.visibility = "visible"; 
        } 
});

let kg = e.target.value;
document.getElementById("poundsOutput").innerHTML = kg * 2.2046;
document.getElementById("gramsOutput").innerHTML = kg / 0.0010000;
document.getElementById("ozOutput").innerHTML = kg * 35.274;
});


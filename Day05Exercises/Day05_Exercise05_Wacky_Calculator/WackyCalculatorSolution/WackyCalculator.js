let firstInput = document.getElementById("firstNumber");
let secondInput = document.getElementById("secondNumber");
firstInput.addEventListener('input', add, false);
secondInput.addEventListener('input', add, false);
function add() {
    document.getElementById("output").textContent = firstInput.value + secondInput.value;
}
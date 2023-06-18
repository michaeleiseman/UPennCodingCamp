let firstInput = document.getElementById("firstNumber");
let secondInput = document.getElementById("secondNumber");
document.getElementById("equal").addEventListener('click', add, false);
function add() {
    document.getElementById("output").textContent = firstInput.value + secondInput.value;
}
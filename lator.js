function add() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = "Результат: " + result;
}

function subtract() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = "Результат: " + result;
}

function multiply() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = "Результат: " + result;
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("result").innerHTML = "Ошибка";
    } else {
    let result = num1 / num2;
    document.getElementById("result").innerHTML = "Результат: " + result;
    }
}
function remainder() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 > num1) {
        document.getElementById("result").innerHTML = "Ошибка";
    } else {
    let result = num1 % num2;
    document.getElementById("result").innerHTML = "Результат: " + result;
    }
}
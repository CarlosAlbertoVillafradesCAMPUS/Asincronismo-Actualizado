function sum(num1, num2) {
    let resultado = num1 + num2;
    console.log(`sus numeros son ${num1} y ${num2}, la sumatoria de ellos es ${resultado}`)
};

function rest(num1, num2) {
    let resultado = num1 - num2;
    console.log(`sus numeros son ${num1} y ${num2}, la resta de ellos es ${resultado}`)
};

function mult(num1, num2) {
    let resultado = num1 * num2;
    console.log(`sus numeros son ${num1} y ${num2}, la multiplicacion de ellos es ${resultado}`)
};

function div(num1, num2) {
    let resultado = num1 / num2;
    console.log(`sus numeros son ${num1} y ${num2}, la divicion de ellos es ${resultado}`)
};

function calc(num1, num2, callback){
    callback(num1, num2)
};

setTimeout(calc, 3000, 10, 5, mult); //primero va la funcion, despues el tiempo y por ultimo los argumentos que necesita esa funcion


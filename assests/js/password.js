let num1 = document.getElementById('claveUno');
let num2 = document.getElementById('claveDos');
let num3 = document.getElementById('claveTres');

let mensaje = document.querySelector("#mensaje");

let validar = document.getElementById('validar');

validar.addEventListener('click' , validarPassword);

function validarPassword() {
    let pass1 = num1.value + num2.value + num3.value ;
    let pass2 = num1.value + num2.value + num3.value ;

    if (pass1 === "911") {
        mensaje.textContent = "Password 1 correcto";
    } else if (pass2 === "714") {
        mensaje.textContent = "Password 2 correcto";
    } else {
        mensaje.textContent = "Password inválido";
    }
};
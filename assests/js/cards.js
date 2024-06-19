const pagarCards = document.getElementById('pagarCards');

pagarCards.addEventListener('click', function(){

    let cardUno = document.querySelector("#cardUno").value;
    let cardDos = document.querySelector("#cardDos").value;
    let cardtres = document.querySelector("#cardTres").value;

    let totalCards = Number(cardUno) + Number(cardDos) + Number(cardtres) ;

    if (totalCards <= 10) {
        document.getElementById('mensajeCards').innerHTML = "Agregaste " + totalCards + " cards";
    } else {
        document.getElementById('mensajeCards').innerHTML = "Excediste la cantidad máxima de 10 cards";
    }
});
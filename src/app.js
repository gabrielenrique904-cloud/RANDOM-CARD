let pinta = ["♠", "♣", "♥", "♦"];
let valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

// Esta función se ejecuta sola al cargar la página
window.onload = function() {
    // Tus variables de índice aleatorio
    let randomPinta = Math.floor(Math.random() * pinta.length);
    let randomValores = Math.floor(Math.random() * valores.length);

    // Selección de los elementos del DOM
    let elementoPintaTop = document.querySelector("#pinta-top");
    let elementoValor = document.querySelector("#valor");
    let elementoPintaBot = document.querySelector("#pinta-bot");
    let container = document.querySelector("#card-container");

    // Asignar el contenido aleatorio
    let simbolo = pinta[randomPinta];
    elementoPintaTop.innerHTML = simbolo;
    elementoPintaBot.innerHTML = simbolo;
    elementoValor.innerHTML = valores[randomValores];

    // Cambiar color si es corazones o diamantes
    if (simbolo === "♥" || simbolo === "♦") {
        container.style.color = "red";
    } else {
        container.style.color = "black";
    }
};

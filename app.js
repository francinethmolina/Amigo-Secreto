let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, agregue un nombre válido.");
    } else {
        amigos.push(nombre);

        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");

        input.value = "";
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista");
    } else {
        let numero = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li> El amigo secreto es: ${amigos[numero]} </li>`;
    }
}



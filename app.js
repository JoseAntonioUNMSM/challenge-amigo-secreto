// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


/* <ul> ---> Etiqueta para crear listas desordenadas */
// Los elementos <ul> no tiene value

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

    let lista = document.getElementById("listaAmigos"); 
    let item = document.createElement("li"); 
    
    item.textContent = nombre;
    lista.appendChild(item);
    document.getElementById('amigo').value = ''; 
}

function sortearAmigo(){

    let listaSortear = document.getElementById("listaAmigos");

    listaSortear.value = '';
    let amigos = listaSortear.children; // Obtiene los <li> dentro del <ul>

    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let ganadorIndex = Math.floor(Math.random() * amigos.length);
    let ganadorNombre = amigos[ganadorIndex].textContent; // Obtiene el nombre del amigo

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo Secreto: ${ganadorNombre} 🎉</li>`;

    listaSortear.innerHTML = ''; 
    console.log(listaSortear.length);

}
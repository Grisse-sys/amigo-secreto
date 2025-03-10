let listaAmigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    //validación de la entrada
    if(nombreAmigo.trim().length > 0) {
        listaAmigos.push(nombreAmigo);
        agregaElementoLista('listaAmigos', nombreAmigo);
        document.getElementById('amigo').value='';
    } else {
        alert('Por favor, ingresa un nombre válido');
    }
    
}

function sortearAmigo(){
    //Eliminamos los elementos de la lista
    const element = document.getElementById("listaAmigos");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    let indice =  Math.floor(Math.random()*listaAmigos.length);
    console.log(indice);
    let texto = 'El amigo secreto sorteado es ' + listaAmigos[indice];
    agregaElementoLista('resultado', texto);
}

function agregaElementoLista(lista, texto) {
    let li = document.createElement("li");
    li.innerHTML=texto;     
    document.getElementById(lista).appendChild(li);
}


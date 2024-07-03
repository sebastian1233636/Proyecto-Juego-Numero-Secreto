
 let numeroSecreto1;
 let intentos = 1;
 let listaNumerosSorteados = [];
 let numeroMaximo = 10;

function asignarTextoElemento(etiqueta, texto){

    let elementoHtml = document.querySelector(etiqueta);
    elementoHtml.innerHTML = texto;
    return;
}



function verificarIntento(){
let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
console.log(numeroSecreto1);
if(numeroUsuario === numeroSecreto1){
    asignarTextoElemento("p",`has acertado el numero en ${intentos} ${intentos == 1 ? "intento": "intentos" }`);
    document.getElementById("reiniciar").removeAttribute("disabled");
}else{
    //El usuario no acertó
    if(numeroUsuario > numeroSecreto1){
        asignarTextoElemento("p","El numero secreto es menor");
    }else{
        asignarTextoElemento("p","El numero secreto es mayor ");
    }
    intentos++;
    limpiarespacio();
}

return;
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1

console.log(numeroGenerado);
console.log(listaNumerosSorteados);
if(listaNumerosSorteados.length == numeroMaximo){
asignarTextoElemento("p","ya se han sorteado todos los numeros posibles");
}
else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
       }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
       }
    }
}


function limpiarespacio(){
document.querySelector("#valorUsuario").value = '';
}

function Condicionesiniciales(){
    asignarTextoElemento("h1","juego del numero secreto secretin");
    asignarTextoElemento("p",`Indique un numero del 1 al ${numeroMaximo}`);
    numeroSecreto1 = generarNumeroSecreto();
    intentos = 1;
return;
}

function reiniciarJuego(){
limpiarespacio();
Condicionesiniciales();
document.querySelector("#reiniciar").setAttribute("disabled","true");

}

Condicionesiniciales();
    




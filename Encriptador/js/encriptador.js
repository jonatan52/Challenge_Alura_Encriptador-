        // Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:
// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una 
//   palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

/*-----------Funcion encriptar---------------*/
function encriptar(){
    var texto = document.getElementById("textArea").value.toLowerCase();

var texArea = texto.replace(/e/img,"enter");
var texArea = texArea.replace(/o/img,"ober");   
var texArea = texArea.replace(/i/img,"imes");
var texArea = texArea.replace(/a/img,"ai");
var texArea = texArea.replace(/u/img,"ufat");




document.getElementById("textoDesencriptado").innerHTML = texArea;
document.getElementById("boton-copiar").style.display = "show";
document.getElementById("boton-copiar").style.display = "inherit";  
}
/*-----------Funcion Desencriptar---------------*/
function desencriptar(){
    var texto = document.getElementById("textArea").value.toLowerCase();

var texArea = texto.replace(/enter/img,"e");
var texArea = texArea.replace(/ober/img,"o");   
var texArea = texArea.replace(/imes/img,"i");   
var texArea = texArea.replace(/ai/img,"a");
var texArea = texArea.replace(/ufat/img,"u"); 


document.getElementById("textoDesencriptado").innerHTML = texArea;
document.getElementById("boton-copiar").style.display = "show";
document.getElementById("boton-copiar").style.display = "inherit";
}
/*-----------Funcion Copiar---------------*/
function copy(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");
}

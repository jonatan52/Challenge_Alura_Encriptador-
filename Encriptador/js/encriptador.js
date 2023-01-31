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

// let letra = "e" ; "enter"
// let letra = "i" ; "imes"
// let letra = "a" ; "ai"
// let letra = "o" ; "ober"
// let letra = "u" ; "ufat"

//                   "enter"
// let letra = "i" ; "imes"
// let letra = "a" ; "ai"
// let letra = "o" ; "ober"
// let letra = "u" ; "ufat"

function encriptar(){
    let texto = document.getElementById("texArea").value.toLowerCase();
}

var texArea = texto.replace(/e/img, "enter");
var texArea = texto.replace(/0/img, "ober");   
var texArea = texto.replace(/i/img, "imes");
var texArea = texto.replace(/a/img, "ai");
var texArea = texto.replace(/u/img, "ufat");

document.getElementById("texto").innerHTML = texArea;
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
function encriptar() {
    let texto = document.getElementById("textArea").value.toLowerCase();
    element = document.getElementById("imagen");
    element.src = src = "img/haker.jpg";

     texArea = texto.replace(/e/img, "enter");
     texArea = texArea.replace(/o/img, "ober");
     texArea = texArea.replace(/i/img, "imes");
     texArea = texArea.replace(/a/img, "ai");
     texArea = texArea.replace(/u/img, "ufat");


    document.getElementById("textoDesencriptado").innerHTML = texArea;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";
    document.getElementById("h3-encontrado").style.display = "none";
  


}
/*-----------Funcion Desencriptar---------------*/
function desencriptar() {
    let texto = document.getElementById("textArea").value.toLowerCase();
    element = document.getElementById("imagen");
    element.src = src = "img/hacker-2.jpg";

     texArea = texto.replace(/enter/img, "e");
     texArea = texArea.replace(/ober/img, "o");
     texArea = texArea.replace(/imes/img, "i");
     texArea = texArea.replace(/ai/img, "a");
     texArea = texArea.replace(/ufat/img, "u");


    document.getElementById("textoDesencriptado").innerHTML = texArea;
    document.getElementById("boton-copiar").style.display = "show";
    document.getElementById("boton-copiar").style.display = "inherit";

}

/*-----------Funcion Copiar---------------*/
function copy() {
    let contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado");
}

/*-----------Funcion borrar ---------------*/

function borrarTexto() {
    let borrar = document.getElementById("textArea", "textoDesencriptado").value = "";
    borrar = document.getElementById("textoDesencriptado").value = "";
    borrar = document.getElementById("h3-encontrado").value = "show";
    document.location.reload();


}
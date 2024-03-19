function saludar() {
    let nombre1 = prompt("Ingresa tu nombre");
    alert("Buenas noches, " + nombre1);
}
saludar();

function calculadoraIMC(peso, altura) {
    let indice = peso / (altura * altura);
    if (indice < 19) {
        alert("El indice IMC es de: " + indice.toFixed(2)+". Necesitas ganar peso. En este momento, es posible que estés experimentando los siguientes síntomas: fatiga, estrés, ansiedad. Busca a una nutricionista.");
    } else if (19 < indice && indice < 24) {
        alert("El indice IMC es de: " + indice.toFixed(2)+". ¡Estás dentro del peso adecuado! Tienes un menor riesgo de enfermedades cardíacas y vasculares.");
    } else if (24 < indice && indice > 30) {
        alert("El indice IMC es de: " + indice.toFixed(2)+". ¡Estás con sobrepeso! En este momento, es posible que estés experimentando los siguientes síntomas: fatiga, mala circulación, várices. ¡Busca a una nutricionista!")
    } else if (30 < indice) {
        alert("El indice IMC es de: " + indice.toFixed(2)+". ¡Estás en el rango de Obesidad Morbidad! En este momento, es posible que estés experimentando los siguientes síntomas: reflujo, dificultad para moverte, úlceras por presión, diabetes, ataque al corazón, accidente cerebrovascular. ¡Busca a una nutricionista!")
    }
};


function mostrarPaciente(nombre, apellido) {
    alert("Nombre: " + nombre + " " + "Apellido: " + apellido);
}


let nombre = prompt("Ingresa nombre del paciente");
let apellido = prompt("Ingresa apellido del paciente");
let altura = parseFloat(prompt("Ingresa altura del paciente en metros"));
let peso = parseInt(prompt("Ingresa peso del paciente en kg"));
let edad = parseInt(prompt("Ingresa tu edad"));

let opcion = prompt("Ingresa la funcionalidad deseada: \n1-Mostrar datos del paciente\n2-Mostrar IMC del paciente \n0-Salir del Programa");
while (opcion !== "0") {
    if (opcion == "1") {
        mostrarPaciente(nombre, apellido, edad);
    } else if (opcion == "2") {
        calculadoraIMC(peso, altura);
    } else {
        alert("Elije entre las opciones mostradas")
    }
    opcion = prompt("Ingresa la funcionalidad deseada: \n1-Mostrar datos del paciente\n2-Mostrar IMC del paciente \n0-Salir del Programa");
}







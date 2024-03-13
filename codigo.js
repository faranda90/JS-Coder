function saludar() {
    let nombre = prompt("Ingresa tu nombre");
    alert("Buenas noches, " + nombre );
    
}
saludar();
let nombre = prompt("Ingresa tu nombre");
let apellido = prompt ("Ingresa tu apellido");
let altura = parseFloat(prompt("Ingresa tu altura en metros"));
let peso = parseInt(prompt("Ingresa tu peso en kg"));
let edad = parseInt(prompt("Ingresa tu edad"));

function calculadoraIMC(peso,altura) {
    let indice = peso / (altura * altura);
    alert("El indice IMC es de: " + indice.toFixed(2));
    if (indice<19){
        alert("El paciente se encuentra en Bajo Peso");
    }else if (19<indice<=24){
        alert("El paciente se encuentra con un indice normal de peso");
    }else if (24<indice<=30){
        alert("El paciente se encuentra con Sobre Peso");
    }else if (30<indice<=50) {
        alert("El paciente se encuentra Obeso");
    }else{
        alert ("Error");
    }
    
};

calculadoraIMC(peso,altura);


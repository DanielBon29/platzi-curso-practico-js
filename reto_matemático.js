// Definir los lados del triángulo
let lado1 = document.getElementById("InputLado1");
let lado2 = document.getElementById("InputLado2");
let lado3 = document.getElementById("InputLado3");
// Definir la altura del triángulo
let altura;
// Definir mensaje resultado
let mensajeResultado;
// Definir mensajes de error
let mensajeSinDatos = "Por favor ingresar todas las medidas";
let mensajeErrorEscaleno = "Las medidas de los 3 lados son diferentes, debes ingresar 2 lados iguales";
let mensajeErrorEquilatero = "Las medidas de los 3 lados son iguales, debes ingresar solo 2 lados iguales";
let mensajeErrorRaizNegativa = "Los valores de las medidas no son adecuados para formar un triángulo isósceles, por favor ingresar otros datos"

//Definir función para calcular altura
function CalcularAltura () {

    document.getElementById("mensajeResultado").style.color = "red"

    if (lado1.value == "" || lado2.value == "" || lado3.value == "") {
        mensajeResultado = mensajeSinDatos
    }
    else {
        if(lado1.value==lado2.value && lado2.value==lado3.value) {
            mensajeResultado = mensajeErrorEquilatero;
        } else if (lado1.value!==lado2.value && lado1.value!==lado3.value && lado2.value!==lado3.value) {
            mensajeResultado = mensajeErrorEscaleno;
        } else {
            if (lado1.value==lado2.value) {altura = Math.sqrt(Math.pow(lado1.value,2)-Math.pow(lado3.value/2,2))};
            if (lado1.value==lado3.value) {altura = Math.sqrt(Math.pow(lado1.value,2)-Math.pow(lado2.value/2,2))};
            if (lado2.value==lado3.value) {altura = Math.sqrt(Math.pow(lado2.value,2)-Math.pow(lado1.value/2,2))};

            if(isNaN(altura)) {
                mensajeResultado = mensajeErrorRaizNegativa 
            } else {
                mensajeResultado = `La altura del triángulo isósceles es de ${altura.toFixed(2)} cm.`;
                document.getElementById("mensajeResultado").style.color = "white"
            }
        };
    };

    document.getElementById("mensajeResultado").innerText = mensajeResultado;
};

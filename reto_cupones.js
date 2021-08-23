// Definir el porcentaje de descuento aplicado
const descuento = 15 + Math.round(Math.random()*20); //Los descuentos se darán entre valores de 15 a 35 %
// Definir código de cupón
const codigoCupon = `PLATZI_${descuento}`
// Definir el mensaje del cupón a mostrar
const mensajeCupon = `¡Felicidades! has obtenido un descuento del ${descuento}% en los planes EXPERT usando el cupón: ${codigoCupon}`;

// Función muestra el mensaje al cargar la pagina y selecciona el plan Expert por Defecto
function MostrarCuponYPlan() {

    document.getElementById("MensajeContainer").innerText = mensajeCupon;
    document.getElementById("PlanExpert").checked = true;
};

// Función permite el cambio de planes
function SeleccionarPlan(id_plan){

document.getElementById("PlanBasic").checked = false; 
document.getElementById("PlanExpert").checked = false; 
document.getElementById("PlanExpert+").checked = false;

document.getElementById(id_plan).checked = true;


};

// Función detecta el cupón ingresado
function CuponCorrecto() {
    let inputCupon = document.getElementById("InputCupon");

    if (inputCupon.value == "") {
        document.getElementById("validaCupon").innerText = "";
    } else if(inputCupon.value == codigoCupon) {
        document.getElementById("validaCupon").innerText = "✔";
    } else {
        document.getElementById("validaCupon").innerText = "✘";
    }

    console.log(document.getElementById("validaCupon").innerText);
};

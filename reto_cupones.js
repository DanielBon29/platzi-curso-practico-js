// Definir los precios iniciales de los planes
const precioPlan = [40,250,300];

// Definir el porcentaje de descuento aplicado
const descuento = 15 + Math.round(Math.random()*20); //Los descuentos se darán entre valores de 15 a 35 %
// Definir código de cupón
const codigoCupon = `PLATZI_${descuento}`
// Definir el mensaje del cupón a mostrar
const mensajeCupon = `¡Felicidades! has obtenido un descuento del ${descuento}% en los planes EXPERT usando el cupón: ${codigoCupon}`;
// Definir el plan seleccionado
let planSeleccionado = `EXPERT ${precioPlan[1].toFixed(2)} USD al año`;

//Definir Input de cupon
const inputCupon = document.getElementById("InputCupon");

// Definir variable precio Final
let precioFinal = [precioPlan[0].toFixed(2),0,0];

for (i=1; i<3; i++) {
    precioFinal[i] = (precioPlan[i]*(1-descuento/100)).toFixed(2);

};


// Función muestra el mensaje al cargar la pagina y selecciona el plan Expert por Defecto
function MostrarCuponYPlan() {

    document.getElementById("MensajeContainer").innerText = mensajeCupon;
    document.getElementById("PlanExpert").checked = true;
    document.getElementById("PrecioFinal").innerText = `Pagarás por tu plan ${planSeleccionado}`;
};

// Función permite el cambio de planes
function SeleccionarPlan(id_plan){

    document.getElementById("PlanBasic").checked = false; 
    document.getElementById("PlanExpert").checked = false; 
    document.getElementById("PlanExpert+").checked = false;

    document.getElementById(id_plan).checked = true;

    if(id_plan !== "PlanBasic") {
        document.getElementById("InputCupon").disabled = false;
        document.getElementById("validaCupon").hidden = false ;
    } else {
        document.getElementById("InputCupon").disabled = true;
        document.getElementById("validaCupon").hidden = true ;
    };

    // Validar y calcular Precio Final en base al cambio de plan

    // Condiciona en caso el codigo del cupon haya sido ingresado
    if (inputCupon.value == codigoCupon) {
        if(id_plan == "PlanBasic") {planSeleccionado = `BASIC ${precioFinal[0]} USD al mes`};
        if(id_plan == "PlanExpert") {planSeleccionado = `EXPERT ${precioFinal[1]} USD al año`};
        if(id_plan == "PlanExpert+") {planSeleccionado = `EXPERT+ ${precioFinal[2]} USD al año`};
    } else {
        if(id_plan == "PlanBasic") {planSeleccionado = `BASIC ${precioPlan[0].toFixed(2)} USD al mes`};
        if(id_plan == "PlanExpert") {planSeleccionado = `EXPERT ${precioPlan[1].toFixed(2)} USD al año`};
        if(id_plan == "PlanExpert+") {planSeleccionado = `EXPERT+ ${precioPlan[2].toFixed(2)} USD al año`};
    };
    
    document.getElementById("PrecioFinal").innerText = `Pagarás por tu plan ${planSeleccionado}`;

};

// Función detecta el cupón ingresado
function CuponCorrecto() {
    
    const planBasicSeleccionado = document.getElementById("PlanBasic").checked;
    const planExpertSeleccionado = document.getElementById("PlanExpert").checked;
    const planExpertPlusSeleccionado = document.getElementById("PlanExpert+").checked;

    if (inputCupon.value == "") {
        simboloValidacion = "";

        if(planBasicSeleccionado) {planSeleccionado = `BASIC ${precioPlan[0].toFixed(2)} USD al mes`};
        if(planExpertSeleccionado) {planSeleccionado = `EXPERT ${precioPlan[1].toFixed(2)} USD al año`};
        if(planExpertPlusSeleccionado) {planSeleccionado = `EXPERT+ ${precioPlan[2].toFixed(2)} USD al año`};
    } else if(inputCupon.value == codigoCupon) {

        simboloValidacion = "✔";

        if(planBasicSeleccionado) {planSeleccionado = `BASIC ${precioFinal[0]} USD al mes`};
        if(planExpertSeleccionado) {planSeleccionado = `EXPERT ${precioFinal[1]} USD al año`};
        if(planExpertPlusSeleccionado) {planSeleccionado = `EXPERT+ ${precioFinal[2]} USD al año`};
    } else {
        simboloValidacion = "✘";

        if(planBasicSeleccionado) {planSeleccionado = `BASIC ${precioPlan[0].toFixed(2)} USD al mes`};
        if(planExpertSeleccionado) {planSeleccionado = `EXPERT ${precioPlan[1].toFixed(2)} USD al año`};
        if(planExpertPlusSeleccionado) {planSeleccionado = `EXPERT+ ${precioPlan[2].toFixed(2)} USD al año`};
    }
    
    document.getElementById("validaCupon").innerText = simboloValidacion;
    document.getElementById("PrecioFinal").innerText = `Pagarás por tu plan ${planSeleccionado}`;
};

let ingresoCapital;
ingresoCapital = parseInt(ingresoCapital);
let cantidadCuotas;
cantidadCuotas = parseInt(cantidadCuotas);
let cuotas;
cuotas = parseInt(cuotas);
let tasaInteres;
tasaInteres = parseInt(tasaInteres);
let interes;
interes = parseInt(interes);
let capitalConInteres;
capitalConInteres = parseInt(capitalConInteres);
const interes3 = 0.2;
const interes6 = 0.33;
const interes9 = 0.6;
const interes12 = 1;




function tresCuotas(ingresoCapital, interes3, cantidadCuotas) {
    let resultado3 = ((ingresoCapital + (ingresoCapital * interes3)) / cantidadCuotas)
    return resultado3
};

function seisCuotas(ingresoCapital, interes6, cantidadCuotas) {
    let resultado = ((ingresoCapital + (ingresoCapital * interes6)) / cantidadCuotas)
    return resultado
};

function nueveCuotas(ingresoCapital, interes9, cantidadCuotas) {
    let resultado = ((ingresoCapital + (ingresoCapital * interes9)) / cantidadCuotas)
    return resultado
};

function doceCuotas(ingresoCapital, interes12, cantidadCuotas) {
    let resultado = ((ingresoCapital + (ingresoCapital * interes12)) / cantidadCuotas)
    return resultado
};

ingresoCapital = parseInt(prompt("Ingrese monto del prestamo"));
cantidadCuotas = parseInt(prompt("ingrese cantidad de cuotas 3,6,9 o 12 o escriba 'terminar' para finalizar"));



while(cantidadCuotas==3||cantidadCuotas==6||cantidadCuotas==9||cantidadCuotas==12){
    switch (cantidadCuotas) {
        case 3:
            console.log("Para un prestamo inmediato de: " + ingresoCapital + " ud tendra " + cantidadCuotas + " cuotas mensuales de: " + tresCuotas(ingresoCapital, interes3, cantidadCuotas))
            break;
        case 6:
            console.log("Para un prestamo inmediato de: " + ingresoCapital + " ud tendra " + cantidadCuotas + " cuotas mensuales de: " + seisCuotas(ingresoCapital, interes6, cantidadCuotas))
            break;
        case 9:
            console.log("Para un prestamo inmediato de: " + ingresoCapital + " ud tendra " + cantidadCuotas + " cuotas mensuales de: " + nueveCuotas(ingresoCapital, interes9, cantidadCuotas))
            break;
        case 12:
            console.log("Para un prestamo inmediato de: " + ingresoCapital + " ud tendra " + cantidadCuotas + " cuotas mensuales de: " + doceCuotas(ingresoCapital, interes12, cantidadCuotas))
            break;
        default:
            cantidadCuotas = prompt("ingrese cantidad de cuotas 3,6,9 o 12");
            break;

    } ingresoCapital = parseInt(prompt("Ingrese capital inicial"));
    cantidadCuotas = parseInt(prompt("ingrese cantidad de cuotas 3,6,9 o 12 o escriba 'terminar' para finalizar"));

}console.log("gracias por usar el simulador de prestamos")
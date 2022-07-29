let ingresoCapital;
ingresoCapital = parseInt(ingresoCapital);
let cantidadCuotas;
cantidadCuotas = parseInt(cantidadCuotas);
let capitalConInteres;
capitalConInteres = parseInt(capitalConInteres);

// tasas de interes. Cambiando estos valores se modifican los calculos finales
const interes3 = 0.2;
const interes6 = 0.33;
const interes9 = 0.6;
const interes12 = 1;
const interes3EnPorcentaje = interes3 * 100;
const interes6EnPorcentaje = interes6 * 100;
const interes9EnPorcentaje = interes9 * 100;
const interes12EnPorcentaje = interes12 * 100;


// funciones que calculan el valor del interes segun la cantidad de cuotas seleccionada

// 3 cuotas
function tresCuotas(ingresoCapital, interes3, cantidadCuotas) {
    let resultado3 = ((ingresoCapital + (ingresoCapital * interes3)) / cantidadCuotas)
    return resultado3
};

// 6 cuotas
function seisCuotas(ingresoCapital, interes6, cantidadCuotas) {
    let resultado = ((ingresoCapital + (ingresoCapital * interes6)) / cantidadCuotas)
    return resultado
};
// 9 cuotas
function nueveCuotas(ingresoCapital, interes9, cantidadCuotas) {
    let resultado = ((ingresoCapital + (ingresoCapital * interes9)) / cantidadCuotas)
    return resultado
};

// 12 coutas
function doceCuotas(ingresoCapital, interes12, cantidadCuotas) {
    let resultado = ((ingresoCapital + (ingresoCapital * interes12)) / cantidadCuotas)
    return resultado
};
// ingreso de los valores por parte del usuario
// ingreso monto prestamo
ingresoCapital = parseInt(prompt("Ingrese monto del prestamo a solicitar"));
// ingreso cantidad de cuotas
cantidadCuotas = parseInt(prompt("ingrese cantidad de cuotas 3,6,9 o 12 o escriba otra cosa para finalizar"));


// si la cantidad de cuotas seleccionada coincide con los valores, entra al loop
while(cantidadCuotas==3||cantidadCuotas==6||cantidadCuotas==9||cantidadCuotas==12){
    switch (cantidadCuotas) {
        case 3:
            console.log("Para un prestamo inmediato de: $" + ingresoCapital + " ud tendra " + cantidadCuotas + " cuotas mensuales de: $" + tresCuotas(ingresoCapital, interes3, cantidadCuotas)+ ". Correspondientes a un interes del " + interes3EnPorcentaje +"% sobre el monto" );
            break;
        case 6:
            console.log("Para un prestamo inmediato de: $" + ingresoCapital + " ud tendra " + cantidadCuotas + " cuotas mensuales de: $" + seisCuotas(ingresoCapital, interes6, cantidadCuotas)+ ". Correspondientes a un interes del " + interes6EnPorcentaje +"% sobre el monto" );
            break;
        case 9:
            console.log("Para un prestamo inmediato de: " + ingresoCapital + " ud tendra " + cantidadCuotas + " cuotas mensuales de: " + nueveCuotas(ingresoCapital, interes9, cantidadCuotas)+ ". Correspondientes a un interes del " + interes9EnPorcentaje +"% sobre el monto" );
            break;
        case 12:
            console.log("Para un prestamo inmediato de: " + ingresoCapital + " ud tendra " + cantidadCuotas + " cuotas mensuales de: " + doceCuotas(ingresoCapital, interes12, cantidadCuotas)+ ". Correspondientes a un interes del " + interes12EnPorcentaje +"% sobre el monto" );
            break;
        default:
            cantidadCuotas = prompt("ingrese cantidad de cuotas 3,6,9 o 12");
            break;

    } ingresoCapital = parseInt(prompt("Ingrese el monto del prestamo a solicitar"));
    cantidadCuotas = parseInt(prompt("ingrese cantidad de cuotas 3,6,9 o 12 o escriba otra cosa para finalizar"));
// si no coincide con los valores esperados, finaliza el loop
}console.log("gracias por usar el simulador de prestamos")
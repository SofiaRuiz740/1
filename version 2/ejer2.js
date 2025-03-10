//EJERCICIOS LECCION 4 ESTRUCTURAS DE CONTROL VERSION CON CICLOS
console.log("♡".repeat(20) + " EJERCICIO 1" + "♡".repeat(20));
let puntaje = parseFloat(prompt("Ingrese su puntaje (de 1 a 5):")); //parseFloat convierte el string a número decimal

// Validamos que el puntaje sea un número y esté en el rango correcto
while (isNaN(puntaje) || puntaje < 1 || puntaje > 5) {
    alert("Por favor ingresa un puntaje válido entre 1 y 5.");
    puntaje = parseFloat(prompt("Ingrese su puntaje (de 1 a 5):"));
}

switch (true) {
    case (puntaje >= 3):
        alert("Aprobaste la materia");
        break;
    default:
        alert("Reprobaste la materia");
        break;
}

console.log("♡".repeat(20) + " EJERCICIO 2" + "♡".repeat(20));
let estudiante = parseInt(prompt("Eres estudiante de ingeniería de software?\n1. Sí \n2. No"));

while (isNaN(estudiante) || estudiante < 1 || estudiante > 2) {
    alert("Por favor ingrese una opción válida.");
    estudiante = parseInt(prompt("Eres estudiante de ingeniería de software?\n1. Sí \n2. No"));
}

switch (estudiante) {
    case 1:
        let semestre = parseInt(prompt("Ingresa el semestre que vas cursando (de 1 a 8)"));
        
        while (isNaN(semestre) || semestre < 1 || semestre > 8) {
            alert("Por favor ingrese un semestre válido entre 1 y 8.");
            semestre = parseInt(prompt("Ingrese el semestre que vas cursando (de 1 a 8)"));
        }
        
        switch (true) {
            case (semestre > 4):
                alert("Has superado la mitad de tu carrera");
                break;
            default:
                alert("No has superado aún la mitad de tu carrera.");
                break;
        }
        break;
    default:
        alert("Oh, lo siento. Este programa es solo para estudiantes de Ingeniería de Software.");
        break;
}

console.log("♡".repeat(20) + " EJERCICIO 3" + "♡".repeat(20));
let lunes;
do {
    lunes = parseInt(prompt("¿Hoy es lunes?\n1. Sí\n2. No"));
    if (isNaN(lunes) || lunes < 1 || lunes > 2) {
        alert("Debes ingresar una opción válida (1 o 2).");
    }
} while (isNaN(lunes) || lunes < 1 || lunes > 2);

let profesor = "Arle";
switch (lunes) {
    case 1:
        alert(`Hoy el profesor ${profesor} está dando algoritmos.`);
        break;
    default:
        alert(`Hoy el profesor ${profesor} no está dando algoritmos.`);
        break;
}
console.log("♡".repeat(20) + " EJERCICIO 4" + "♡".repeat(20));

const nombreRed = "Estudiantes";
const claveCorrecta = "Humboldt16";
let claveIngresada;
do {
    claveIngresada = prompt(`Ingrese la clave para la red ${nombreRed}:`);
    if (claveIngresada !== claveCorrecta) {
        alert("Clave incorrecta. Inténtelo de nuevo.");
    }
} while (claveIngresada !== claveCorrecta);
alert(`Conectado a la red ${nombreRed}.`);

console.log("♡".repeat(20) + " EJERCICIO 5" + "♡".repeat(20));

let nivelBateria;
do {
    nivelBateria = prompt("Ingrese el nivel de batería: alto, medio, bajo o apagado").toLowerCase();
    if (!["alto", "medio", "bajo", "apagado"].includes(nivelBateria)) {
        alert("Nivel no válido. Intente de nuevo.");
    }
} while (!["alto", "medio", "bajo", "apagado"].includes(nivelBateria));

switch (nivelBateria) {
    case "alto":
        alert("La batería está alta, no necesitas cargarla.");
        break;
    case "medio":
        alert("La batería está media, úsala con moderación.");
        break;
    case "bajo":
        alert("Conecta el cargador pronto");
        break;
    default:
        alert("El celular está descargado, conéctalo ya.");
}

console.log("♡".repeat(20) + " EJERCICIO 6" + "♡".repeat(20));

let velocidad;
do {
    velocidad = parseInt(prompt("Ingrese la velocidad del vehículo (en km/h):"));
    if (isNaN(velocidad) || velocidad < 0) {
        alert("Ingrese un valor válido para la velocidad.");
    }
} while (isNaN(velocidad) || velocidad < 0);

if (velocidad >= 100) {
    alert(`¡Vas muy rápido! Tu velocidad es de ${velocidad} km/h.`);
}

console.log("♡".repeat(20) + " EJERCICIO 7" + "♡".repeat(20));

let nivelDeHidratacion;
do {
    nivelDeHidratacion = parseInt(prompt("¿Cuántos litros de agua has bebido hoy? (0 a 3):"));
    if (isNaN(nivelDeHidratacion) || nivelDeHidratacion < 0 || nivelDeHidratacion > 3) {
        alert("Ingrese un valor válido entre 0 y 3.");
    }
} while (isNaN(nivelDeHidratacion) || nivelDeHidratacion < 0 || nivelDeHidratacion > 3);

switch (nivelDeHidratacion) {
    case 3:
        alert("Estás bien hidratado.");
        break;
    case 2:
        alert("Podrías beber un poco más.");
        break;
    case 1:
        alert("¡Es muy poco, necesitas más hidratación!");
        break;
    default:
        alert("¡Debes hidratarte!");
}

console.log("♡".repeat(20) + " EJERCICIO 8" + "♡".repeat(20));

const nombreReserva = "Sofia";
const codigoReserva = "S1234";
let nombreIngresado, codigoIngresado;
do {
    nombreIngresado = prompt("Ingrese su nombre para la reserva:");
    codigoIngresado = prompt("Ingrese el código de reserva:");
    if (nombreIngresado !== nombreReserva || codigoIngresado !== codigoReserva) {
        alert("Datos incorrectos. Verifique su nombre y código de reserva.");
    }
} while (nombreIngresado !== nombreReserva || codigoIngresado !== codigoReserva);
alert("¡Tu reserva está confirmada! Bienvenida al restaurante.");

console.log("♡".repeat(20) + " EJERCICIO 9" + "♡".repeat(20));

let tipoDieta;
do {
    tipoDieta = parseInt(prompt("Seleccione el tipo de alimentación del animal:\n1. Carnívoro\n2. Herbívoro\n3. Omnívoro\n4. Insectívoro"));
    if (isNaN(tipoDieta) || tipoDieta < 1 || tipoDieta > 4) {
        alert("Seleccione una opción válida (1-4).");
    }
} while (isNaN(tipoDieta) || tipoDieta < 1 || tipoDieta > 4);

switch (tipoDieta) {
    case 1:
        alert("El animal es carnívoro. Se alimenta de carne.");
        break;
    case 2:
        alert("El animal es herbívoro. Se alimenta de plantas.");
        break;
    case 3:
        alert("El animal es omnívoro. Come tanto plantas como carne.");
        break;
    case 4:
        alert("El animal es insectívoro. Se alimenta de insectos.");
        break;
}

console.log("♡".repeat(20) + " EJERCICIO 10" + "♡".repeat(20));

let almacenAbierto;
do {
    almacenAbierto = parseInt(prompt("¿El almacén está abierto?\n1. Sí\n2. No"));
    if (isNaN(almacenAbierto) || almacenAbierto < 1 || almacenAbierto > 2) {
        alert("Seleccione una opción válida.");
    }
} while (isNaN(almacenAbierto) || almacenAbierto < 1 || almacenAbierto > 2);

if (almacenAbierto === 1) {
    let cantidadProductos;
    do {
        cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos en el almacén:"));
        if (isNaN(cantidadProductos) || cantidadProductos < 0) {
            alert("Ingrese un número válido de productos.");
        }
    } while (isNaN(cantidadProductos) || cantidadProductos < 0);
    
    if (cantidadProductos === 0) {
        alert("No hay productos en el almacén.");
    } else if (cantidadProductos <= 100) {
        alert("Hay una cantidad moderada de productos.");
    } else {
        alert("El almacén está lleno de productos.");
    }
} else {
    alert("El almacén está cerrado.");
}

console.log("♡".repeat(20) + " EJERCICIO 11" + "♡".repeat(20));

let dia;
do {
    dia = prompt("Ingrese el día de la semana:").toLowerCase();
    if (!["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"].includes(dia)) {
        alert("Ingrese un día válido.");
    }
} while (!["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"].includes(dia));

dia === "domingo" ? alert("¡Es fin de semana! Es hora de descansar.") : alert("Día laboral.");

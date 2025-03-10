//EJERCICIOS LECCION 4 CON FUNCIONES FLECHA
console.log("♡".repeat(20) + " EJERCICIO 1" + "♡".repeat(20));
let verificarPuntaje = () => {
    let puntaje = parseFloat(prompt("Ingrese su puntaje (de 1 a 5):"));
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
};
verificarPuntaje();

console.log("♡".repeat(20) + " EJERCICIO 2" + "♡".repeat(20));
let verificarSemestre = () => {
    let estudiante = parseInt(prompt("Eres estudiante de ingeniería de software?\n1. Sí \n2. No"));
    while (isNaN(estudiante) || estudiante < 1 || estudiante > 2) {
        alert("Por favor ingrese una opción válida");
        estudiante = parseInt(prompt("Eres estudiante de ingeniería de software?\n1. Sí \n2. No"));
    }
    switch (estudiante) {
        case 1:
            let semestre = parseInt(prompt("Ingresa el semestre que vas cursando (de 1 a 8)"));
            while (isNaN(semestre) || semestre < 1 || semestre > 8) {
                alert("Por favor ingrese un semestre válido entre 1 y 8");
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
            alert("Oh lo siento, este programa es solo para estudiantes de Ingeniería de Software.");
            break;
    }
};
verificarSemestre();

console.log("♡".repeat(20) + " EJERCICIO 3" + "♡".repeat(20));
let verificarDia = () => {
    let profesor = "Arle";
    let lunes;
    do {
        lunes = parseInt(prompt("¿Hoy es lunes?\n1. Sí\n2. No"));
        if (isNaN(lunes) || lunes < 1 || lunes > 2) {
            alert("Debes ingresar una opción válida (1 o 2). ");
        }
    } while (isNaN(lunes) || lunes < 1 || lunes > 2);

    switch (lunes) {
        case 1:
            alert(`Hoy el profesor ${profesor} está dando algoritmos.`);
            break;
        default:
            alert(`Hoy el profesor ${profesor} no está dando algoritmos.`);
            break;
    }
};
verificarDia();

console.log("♡".repeat(20) + " EJERCICIO 4" + "♡".repeat(20));
let verificarConexion = () => {
    const nombreRed = "Estudiantes";
    const clave = "Humboldt16";
    let intentoRed = prompt("Ingrese el nombre de la red:");
    let intentoClave = prompt("Ingrese la clave de la red:");
    (intentoRed === nombreRed && intentoClave === clave)
        ? alert(`Estás conectado a la red ${nombreRed}.`)
        : alert("No pudiste conectarte a la red.");
};
verificarConexion();

console.log("♡".repeat(20) + " EJERCICIO 5" + "♡".repeat(20));
let verificarBateria = () => {
    let nivelBateria = prompt("Ingrese el nivel de batería (alto, medio, bajo, descargado):").toLowerCase();
    switch (nivelBateria) {
        case "alto":
            alert("La batería está alta, no necesitas cargarla.");
            break;
        case "medio":
            alert("La batería está en nivel medio, úsala con moderación.");
            break;
        case "bajo":
            alert("Conecta el cargador pronto.");
            break;
        default:
            alert("El celular está descargado, conéctalo ya.");
            break;
    }
};
verificarBateria();

console.log("♡".repeat(20) + " EJERCICIO 6" + "♡".repeat(20));
let verificarVelocidad = () => {
    let velocidad = parseInt(prompt("Ingrese la velocidad del vehículo:"));
    while (isNaN(velocidad) || velocidad < 0) {
        alert("Por favor ingrese una velocidad válida.");
        velocidad = parseInt(prompt("Ingrese la velocidad del vehículo:"));
    }
    if (velocidad >= 100) {
        alert(`¡Vas muy rápido! Tu velocidad es de ${velocidad} km/h.`);
    }
};
verificarVelocidad();

console.log("♡".repeat(20) + " EJERCICIO 7" + "♡".repeat(20));

let verificarHidratacion = () => {
    let nivelDeHidratacion;
    do {
        nivelDeHidratacion = parseInt(prompt("¿Cuántos litros de agua bebiste hoy? (0-3)"));
        if (isNaN(nivelDeHidratacion) || nivelDeHidratacion < 0 || nivelDeHidratacion > 3) {
            alert("Por favor, ingresa un número válido entre 0 y 3.");
        }
    } while (isNaN(nivelDeHidratacion) || nivelDeHidratacion < 0 || nivelDeHidratacion > 3);

    switch (nivelDeHidratacion) {
        case 3:
            alert("Bebiste 3 litros de agua. Estás bien hidratado.");
            break;
        case 2:
            alert("Bebiste 2 litros de agua. Podrías beber un poco más.");
            break;
        case 1:
            alert("Bebiste 1 litro de agua. ¡Es muy poco, necesitas más hidratación!");
            break;
        default:
            alert("No bebiste agua. ¡Debes hidratarte!");
            break;
    }
};

verificarHidratacion();

console.log("♡".repeat(20) + " EJERCICIO 8" + "♡".repeat(20));

let verificarReserva = () => {
    let nombreReserva = "Sofia";
    let codigoReserva = "S1234";
    let nombreIngresado;
    let codigoIngresado;

    do {
        nombreIngresado = prompt("Ingresa tu nombre para verificar la reserva:");
        if (!nombreIngresado) {
            alert("Por favor, ingresa un nombre válido.");
        }
    } while (!nombreIngresado);

    do {
        codigoIngresado = prompt("Ingresa tu código de reserva:");
        if (!codigoIngresado) {
            alert("Por favor, ingresa un código válido.");
        }
    } while (!codigoIngresado);

    let mensaje = (nombreReserva === nombreIngresado && codigoReserva === codigoIngresado) 
        ? "Tu reserva está confirmada. Bienvenida al restaurante." 
        : "Lo siento, no encontramos tu reserva. Verifica tus datos.";

    alert(mensaje);
};

verificarReserva();

console.log("♡".repeat(20) + " EJERCICIO 9" + "♡".repeat(20));

let identificarDieta = () => {
    let opciones = ["Carnívoro", "Herbívoro", "Omnívoro", "Insectívoro"];
    let tipoDieta;

    do {
        tipoDieta = parseInt(prompt("Selecciona el tipo de alimentación del animal:\n1. Carnívoro\n2. Herbívoro\n3. Omnívoro\n4. Insectívoro"));
        if (isNaN(tipoDieta) || tipoDieta < 1 || tipoDieta > 4) {
            alert("Selecciona una opción válida (1-4).");
        }
    } while (isNaN(tipoDieta) || tipoDieta < 1 || tipoDieta > 4);

    alert(`El animal es ${opciones[tipoDieta - 1]}.`);
};

identificarDieta();

console.log("♡".repeat(20) + " EJERCICIO 10" + "♡".repeat(20));

let verificarAlmacen = () => {
    let almacenAbierto;
    do {
        almacenAbierto = parseInt(prompt("¿El almacén está abierto?\n1. Sí\n2. No"));
        if (isNaN(almacenAbierto) || almacenAbierto < 1 || almacenAbierto > 2) {
            alert("Por favor, selecciona una opción válida (1 o 2).");
        }
    } while (isNaN(almacenAbierto) || almacenAbierto < 1 || almacenAbierto > 2);

    if (almacenAbierto === 1) {
        let cantidadProductos;
        do {
            cantidadProductos = parseInt(prompt("¿Cuántos productos hay en el almacén?"));
            if (isNaN(cantidadProductos) || cantidadProductos < 0) {
                alert("Por favor, ingresa una cantidad válida.");
            }
        } while (isNaN(cantidadProductos) || cantidadProductos < 0);

        if (cantidadProductos === 0) {
            alert("No hay productos en el almacén.");
        } else if (cantidadProductos > 0 && cantidadProductos <= 100) {
            alert("Hay una cantidad moderada de productos.");
        } else {
            alert("El almacén está lleno de productos.");
        }
    } else {
        alert("El almacén está cerrado.");
    }
};

verificarAlmacen();

console.log("♡".repeat(20) + " EJERCICIO 11" + "♡".repeat(20));

let verificarDia2 = () => {
    let dia;
    do {
        dia = prompt("¿Qué día es hoy?").toLowerCase();
        if (!dia) {
            alert("Por favor, ingresa un día válido.");
        }
    } while (!dia);

    let mensaje = (dia === "domingo") 
        ? "¡Es fin de semana! Es hora de descansar." 
        : "No es domingo, sigue con tus actividades.";

    alert(mensaje);
};

verificarDia2();

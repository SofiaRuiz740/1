//EJERCICIOS LECCION 4 ESTRUCTURAS DE CONTROL IF,ELSE IF,ELSE Y TERNARIO ? :
console.log("♡".repeat(20) + " EJERCICIO 1" + "♡".repeat(20));
let puntaje= 4.5;
 puntaje >= 3 
 ? console.log("Aprobaste la materia")
 :console.log("Reprobaste la materia");

 console.log("♡".repeat(20) + " EJERCICIO 2" + "♡".repeat(20));
 let semestre= 3;
 semestre >4 
 ? console.log("Has superado la mitad de tu carrera.")
 :console.log("No has superado aún la mitad de tu carrera.");

 console.log("♡".repeat(20) + " EJERCICIO 3" + "♡".repeat(20));
 let lunes=true;
 let profesor="Arle";
 let aviso= lunes 
 ? `Hoy el profesor ${profesor} esta dando algoritmos.`
 :`Hoy el profesor ${profesor} no esta dando algoritmos.`;
 console.log(aviso);

 console.log("♡".repeat(20) + " EJERCICIO 4" + "♡".repeat(20));
 const nombreRed="Estudiantes";
 const clave="Humboldt16";
 nombreRed=="Estudiantes" && clave=="Humboldt16" 
 ?console.log(`Estas conectado a la red ${nombreRed}.`)
 :console.log(`No pudistes conectarte a la red ${nombreRed}.`);

 console.log("♡".repeat(20) + " EJERCICIO 5" + "♡".repeat(20));
 let nivelBateria="bajo";
 nivelBateria=="alto"
 ?console.log(`La batería está ${nivelBateria}, no necesitas cargarla.`)
:nivelBateria=="medio"
? console.log(`La batería está ${nivelBateria}, úsala con moderación.`)
:nivelBateria=="bajo"
? console.log("Conecta el cargador pronto")
:console.log("El celular está descargado, conéctalo ya.");

 console.log("♡".repeat(20) + " EJERCICIO 6" + "♡".repeat(20));
 let velocidad=120;
 if(velocidad>=100){
   console.log(`¡Vas muy rapido! Tu velocidad es de ${velocidad}.`)};

 console.log("♡".repeat(20) + " EJERCICIO 7" + "♡".repeat(20));
 let nivelDeHidratacion = 2;
 if (nivelDeHidratacion == 3) {
   console.log(`Bebiste ${nivelDeHidratacion} litros de agua. Estás bien hidratado.`);
 } else if (nivelDeHidratacion == 2) {
   console.log(`Bebiste ${nivelDeHidratacion} litros de agua. Podrías beber un poco más.`);
 } else if (nivelDeHidratacion == 1) {
   console.log(`Bebiste ${nivelDeHidratacion} litro de agua. ¡Es muy poco, necesitas más hidratación!`);
 } else {
   console.log(`No bebiste agua. ¡Debes hidratarte!`);
 }

 console.log("♡".repeat(20) + " EJERCICIO 8" + "♡".repeat(20));
let nombreReserva= "Sofia";
let codigoReserva="S1234";
let nombreIngresado="Sofia";
let codigoIngresado="S123";
let nombreRecepcionista="Juan";

if(nombreReserva==nombreIngresado && codigoReserva==codigoIngresado){
   console.log(`${nombreRecepcionista}: ¡Hola, ${nombreIngresado}! Tu reserva está confirmada. Bienvenida al restaurante.`);
}else { console.log(`Lo siento, no encontramos tu reserva. Verifica tus datos.`);
}

console.log("♡".repeat(20) + " EJERCICIO 9" + "♡".repeat(20));
let carnivoro=false;
let herbivoro=false;
let omnivoro=false;
let insectivoro=true;

if(carnivoro){
   console.log("El animal es carnívoro. Se alimenta de carne.");
}else if(herbivoro){
   console.log("El animal es herbívoro. Se alimenta de plantas.");
}else if(omnivoro){
   console.log("El animal es omnívoro. Come tanto plantas como carne.");
}else if(insectivoro){
   console.log("El animal es insectívoro. Se alimenta de insectos.");
}else{
   console.log("No se reconoce su alimentación.");
}

 console.log("♡".repeat(20) + " EJERCICIO 10" + "♡".repeat(20));
 let almacenAbierto = true;
 let cantidadProductos = 50;
 
 if(almacenAbierto){
     console.log("El almacén está abierto");
     
     if(cantidadProductos == 0){
         console.log("No hay productos en el almacén");
     }else if(cantidadProductos > 0 && cantidadProductos <= 100){
         console.log("Hay una cantidad moderada de productos");
     }else{
         console.log("El almacén está lleno de productos");
     }
 }else{
     console.log("El almacén está cerrado");
 }

 console.log("♡".repeat(20) + " EJERCICIO 11" + "♡".repeat(20));
 let dia="domingo";
 let actividad="descansar";
 if(dia=="domingo"){
   console.log(`¡Es fin de semana! es hora de ${actividad}.`)
 }

 





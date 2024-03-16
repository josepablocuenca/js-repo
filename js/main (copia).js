// Variables:

/*

1. Inicializar tres variables de distintos tipos de datos.

2. Declarar dos variables y asignarles valor más adelante.

3. Mostrar las 5 variables anteriores por consola con el operador typeof para verificar los tipos de datos.

4. Ejemplo de variable con la declaración "const".

*/
// let nombre = "Jose"; //string

// let edad = 38; //entero

// let mayorDeEdad = true; //boleano 

// let apellido; 

// let grupoSanguineo;

// apellido = "Cuenca"

// grupoSanguineo = "0+";

// console.log(nombre);
// console.log(typeof nombre);
// console.log(edad);
// console.log(typeof edad);
// console.log(apellido);
// console.log(typeof apellido);
// console.log(mayorDeEdad);
// console.log(typeof mayorDeEdad);
// console.log(grupoSanguineo);
// console.log(typeof grupoSanguineo);

// Operaciones básicas

/*

1. Utilizar dos de las cuatro operaciones básicas asignando el valor en una variable y mostrarla por consola.

2. Utilizar las otras dos operaciones restantes directamente por consola sin utilizar una variable.

+ - * /
*/

// let numero1 = 2;
// let numero2 = 4;
// let suma = numero1 + numero2;
// let resta = numero2 - numero1;
// console.log(suma);
// console.log(resta);
// console.log(1 * 2);
// console.log(3/3);

// Condicionales:

// TODOS LOS MENSAJES QUE VAYAN A MOSTRAR TIENEN QUE SER POR ALERT O POR CONSOLE. PUEDEN POR AMBOS CASOS, PERO NO ES NECESARIO. CON UNO ES MÁS QUE SUFICIENTE.

/*

1. Consultar al usuario a través de un confirm si le gusta o no algún deporte. Mostrar un mensaje (a elección) para cada una de las elecciones posibles.


2. Solicitar por prompt al usuario que ingrese un nombre. Si coincide con tu nombre, mostrar un mensaje que diga "Bienvenidx". Caso contrario, "Afuera, impostor!".

3. Solicitar dos veces por prompt al usuario que ingrese algún número. Mostrar un mensaje con el resultado de la suma de ambos números.

4. Solicitar al usuario que ingrese un idioma dentro de los disponibles (ESP - Español, ING - Inglés, ALE - Alemán, FRA - Francés). Si elige alguna de las siglas de opciones disponibles, mostrar un mensaje saludando al usuario en ese idioma (Buenos días, Good morning, Guten Tag y Bonjour respectivamente). Caso contrario, mostrar un mensaje mencionando que no sabemos saludar en ese idioma. PISTA: podría ser una buena idea el uso de SWITCH en este caso. Para evitar complicarse mucho, ingresen solamente las letras en mayúsculas (EJ: FRA si quiere Francés).

5. Solicitar usuario y contraseña. Caso que usuario sea "admin" y contraseña sea "adminpass", mostrar un mensaje de éxito. Si no, mostrar un mensaje que diga "Credenciales inválidas".

*/

// -----------------------------------------------


//2
// let compara = "Jose";
// let nombre = prompt("Ingresa tu nombre:");
// if (nombre == compara){
//     alert ("Bienvenido");
// }
// else{
//     alert ("No eres bienvenido!");
// }
// //3
// let numero1= Number(prompt("Ingresa un numero"));
// let numero2= Number(prompt("Ingresa otro numero"));
// let suma = numero1 + numero2;
// alert(suma);

//4
let idioma; 
// let ingles = ENG;
// let frances = FRA;
// let aleman = ALE; 
// let español = ESP;

idioma = prompt ("Ingrese su idioma")
switch (idioma) {
    case "ENG":
      alert("Welcome");
      break;
    case "FRA":
      alert("Bonjour");
      break;
    case "ALE":
      alert("GUTEN TAG");
      break;
    case "ESP":
      alert("Bienvenido");
      break;
    default:
      alert("No conocemos ese idioma");
      break;
  }
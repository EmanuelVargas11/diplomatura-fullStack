




// ***************************************************************//
// ************************Ejercicio 3:***************************//
// ***************************************************************//
 
/*

Solicita al usuario que ingrese dos palabras. Concatena las dos palabras
utilizando template literals y muestra el resultado en la consola. Además, calcula la
longitud total de las dos palabras concatenadas y muestra el resultado en la consola,
también utilizando template strings. 

*/

alert("Bienvenido, a continuacion se le pedira que ingrese por separado dos palabras a eleccion.")

let ingresoPalabra1 = prompt("Ingrese aqui la primer palabra")

let ingresoPalabra2 = prompt("Ingrese aqui la segunda palabra")

let longitud = (`Lo siguiente es la longitud de la primer palabra: ${ingresoPalabra1.length} y el siguiente corresponde a la segunda palabra: ${ingresoPalabra2.length}`)


console.log(longitud)





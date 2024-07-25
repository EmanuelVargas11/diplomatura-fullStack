



        //*******************//
        //*******ARRAY*******//
        //*******************//


//let nombre = ["David", "Juan", "Kevin"]

// console.log(nombre)
// // imprime: ["David", "Juan", "Kevin"]

// nombre.push("Carlos") "Agrega "Carlos" al final"

// console.log(nombre)
// // imprime: ["David", "Juan", "Kevin", "Carlos"]

// nombre.unshift("Agustin") "Agrega "Agustin" en el indice 0"

// console.log(nombre)

// // imprimer: ["Agustin", David", "Juan", "Kevin", "Carlos"]


// console.log(nombre)

// let ultimoNombreEliminado = nombre.pop() // "Elimina el ultimo nombre"

// console.log(nombre)
// console.log(`El ultimo nombre eliminado es: ${ultimoNombreEliminado}`)

// let primerNombreEliminado = nombre.shift() // "Elimina el primer nombre, indice 0"

// console.log(nombre)

// console.log(`Aqui se muetra el primer nombre del  "indice 0, que fue eliminado: ${primerNombreEliminado}"`)

// console.log(`El unico nombre que se muestra es: ${nombre}`)




// ********************************************************************* //
// ********************************************************************* //
// ********************************************************************* //






// Validador de acceso:
// Escribe un script que pida un nombre de usuario y contraseña. Si el nombre es "usuario1" y la contraseña es "123456", muestra "Acceso concedido". De lo contrario, muestra "Acceso denegado".


//  const usuario = 'usuario1'
//  const password = '123456'

//  let ingreseUsuario =prompt('Ingrese su usuario')
//  let ingresePassword = prompt('Ingrese su password')



// if (ingreseUsuario === usuario && ingresePassword === password){
//    console.log("Acceso concedido");
// }else {
//         console.log("Acceso denegado");
// }


// ********************************************************************* //
// ********************************************************************* //
// ********************************************************************* //





// Evaluador de temperatura:
// Crea un programa que, dada una temperatura en grados Celsius, indique si hace mucho calor (más de 30 grados), calor (entre 20 y 30 grados), fresco (entre 10 y 20 grados) o frío (menos de 10 grados).



//  let celsius = prompt('ingrese la temperatura deseada:')

//  if (celsius < 10) {
//      console.log(`Hace Frio a: ${celsius}°C `);
//  } else if (celsius >= 10 && celsius < 20){
//      console.log(`Esta fresco a: ${celsius}°C`);
//  }else if (celsius >= 20 && celsius < 30){
//      console.log(`Esta haciendo calor a: ${celsius}°C `);
//  }else {
//      console.log(`Esta haciendo Mucho Calor a: ${celsius}°C`);
//  }





// ********************************************************************* //
// ********************************************************************* //
// ********************************************************************* //


// Comprobador de mayoría de edad:
// Crea un programa que pida la edad del usuario. Si tiene 18 años o más, muestra un mensaje que diga "Eres mayor de edad". Si no, muestra "Eres menor de edad".




// let edad = 18

// edad = prompt("Ingrese su edad")


// if (edad >= 18) {
        
//         console.log("Eres mayor de edad");
// }else {
//         console.log("Eres menor de edad");
// }




// ********************************************************************* //
// ********************************************************************* //
// ********************************************************************* //





// Descuentos en tienda:
// Un comercio ofrece un descuento del 15% si la compra es mayor a 1000 pesos. Escribe un programa que dado el total de la compra, calcule el total a pagar considerando el descuento si aplica.


// alert("Bienvenido, actualmente La Tienda esta ofreciendo un 15% de descuento en su ¡Compra! superior a $1000")
// alert("Los siguientes son productos destacados para su compra. Solo ingrese el valor sin el signo de pesos")

// alert("Banana $500, Pan $100, Golosina $50, Leche $1500")


// let numero1 = prompt("ingrese el precio de un producto destacado (Banana $500, Pan $100, Golosina $50, Leche $1500) ")
// let numero2 = prompt("ingrese un precio a preferencia o imaginacion")



// numero1 = parseInt(numero1)
// numero2 = parseInt(numero2)


// let suma = numero1 + numero2
 

// let subTotal = suma


// let descuento = 15 / 100 * subTotal 

// let totalConDescuento = suma - descuento

// let totalSinDescuento = suma






//  if (suma >= 1000) {
//         console.log(`el subtotal de la compra es de: $ ${subTotal} pesos`);

//         console.log(`El descuento aplicado es de: $${descuento} pesos`);
        
//         console.log(`El Total de la compra es de: $ ${totalConDescuento}`);        

// }else {
//         console.log(`el subtotal de la compra es de: $ ${subTotal} pesos`);
//         console.log(`El Total de la compra es de: $ ${totalSinDescuento}`);     
// }
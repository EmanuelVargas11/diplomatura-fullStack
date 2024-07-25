




// ***************************************************************//
// ************************Ejercicio 1:***************************//
// ***************************************************************//

/*
Crea un programa que solicite al usuario su nombre y apellido. Luego, muestra
una alerta con su nombre completo (nombre y apellido concatenados) utilizando
template strings
*/

// alert("Hola Visitante")
// let ingresoNombre = prompt("¿cual es tu nombre?");
// let ingresoApellido = prompt("¿cual es tu apellido?");

// console.log(ingresoNombre)
// console.log(ingresoApellido)

// alert(`Gracias por visitarnos, ${ingresoNombre} ${ingresoApellido}, hasta pronto!!!`);



//********************** arrays*************** //




// concat()

// let verduras = ["papa", "lechuga"]

// let fruta = ["mandarina", "frutilla"]


// let listaCompra = fruta.concat(verduras)



// console.log("Mi lista de compras es:", listaCompra)



//*************** objetos *********************//




//  let receta = {
//      nombre: "ñoquis",
//      ingredientes: ["papas", "harina", "sal", "condimentos"],
//      coccion: "45 minutos",
//  }


// console.log("los ingredientes son:", receta.ingredientes.join("-"))


// *********************** function ************************

// Le pedimos al usuario mediante un prompt que ingrese su nombre


// let ingresoNombre = prompt("ingrese su nombre")



// function saludar(ingresoNombre){
//     return  'Hola, ' + ingresoNombre
// }


// console.log(saludar(ingresoNombre));


// Le pedimos al usuario que ingrese su nombre y luego por la 
// function flecha lo saludamos con Hola y el nombre que el usuario ingreso

// let ingresoNombre = prompt("ingrese su nombre")


// let saludar = (ingresoNombre) => `¡Hola,  ${ingresoNombre}!`



// console.log(saludar(ingresoNombre));






// ***************************************Practica *******************//
// le pedimos al usuario que ingrese dos numeros a y b, para luego realizar 
// la suma de los numeros ingresados por el usuario

// alert('ingrese dos numero por separado. Luego podra ver la suma de estos numeros')
// let a = Number(prompt('ingrese un numero.'))
// let b = Number(prompt('ingrese otro numero'))



// function sumarNumeros(numeros){
//     let suma = a + b;
    

// document.write('El resultado es: ', suma)
// console.log('El resultado es: ', suma);

// }

// sumarNumeros(`${a}, ${b}`)



// NO se que quise hacer aqui
// let marcas = ["hyundai", "motorola", "sony", "intel"]

// let entero = 6



//     let suma = 15 / 5 

//     let resultado = suma
//         console.log(resultado);

// console.log(marcas.slice(0, 2 ))



// *********************************************************
// *********************************************************
// *********************************************************

//1) Descripción del ejercicio:
/* Diseña una función en JavaScript que reciba un array de números.
La función debe devolver un nuevo array que contenga pares de 
números del array original.*/


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
//    indice   0, 1  2  3  4  5  6  7  8  9   10  11  12  13  14  15


function numerosPares(numeros) {
    let pares = []

    for (let indice =0; indice <numeros.length; indice ++){

        
    }if (numeros.length % 2 == 0) {
        
        console.log(numeros[indice]);
        pares.push(numeros[indice])
    }  
    console.log(pares);

    }

numerosPares(numeros)







// function filtrarArrays() {
    
//     const numeroPar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     const ConcatenarArrray = [20, 21, 23, 31, 35]
    
//     let nuevoArray = numeroPar.concat(ConcatenarArrray);
//     return nuevoArray
    
// }


// filtrarArrays()
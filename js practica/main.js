console.log("------ Arrays [ ]--------")

console.log("------Homogeneos-------")

let frutas = ["Manzana", "Banana", "Pelon" ]
console.log("La longitud de frutas es:", frutas.length)

console.log("El ultimo elemento es:", frutas[2])



console.log("\n--------- Heterogeneos -------------")

let multipleInfo = [true, 20, "Hola", [1, 2, 3], {a:1, b:2} ]

console.log("La longitud de multipleInfo es:", multipleInfo.length)
console.log("El valor del tercer elemento es:", multipleInfo[3][1])

console.log("\n--------- Metodos de los arrays -------------")

let nombres = ["Pedro", "Juan", "Maria" ]

console.log(nombres)


console.log("\n--------- Push -------------")

nombres.push("LEONARDO")
console.log("El nombre agregado es: ", nombres)
console.log("La longitud de nombres es:", nombres.length)


console.log("\n--------- Pop -------------")

let deportes = ["Rugby", "Padel", "Natacion"]
console.log(deportes)

let deporteEliminado = deportes.pop()
console.log("Se elimino el ultimo deporte:", deporteEliminado)



console.log("\n--------- Shift -------------")


let colores = ["Rojo", "Azul", "Verde"]
console.log(colores)
colores.shift()

console.log("El primer elemento eliminado es: ", colores)



console.log("\n--------- splice -------------")

let letras = ["a", "b", "c", "d", "e", "f"]

console.log("Las letras son:", letras)

let resultado = letras.splice(0,2) // elimina a y b
console.log("Las letras eliminadas son: ", resultado)


let resultado2 = letras.splice(0, 3, "1")

console.log( resultado2)
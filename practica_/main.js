



function mostrarResultado(resultado) {
    console.log("resultado multiplicado por *2", resultado)
}


function procesarDatos(datos, callback) {
    const resultado = datos.map(datos =>datos *2)
    callback(resultado)
}
const datos = [1, 2, 3, 4, 5]


procesarDatos(datos, mostrarResultado)

console.log("datos sin modificacion",datos)
// OBJETO CON MI INFORMACION 
let miInformacion = {
    nombre: "Emanuel",
    edad: " 24 años",
    dni: " DNI: 100.445.826"

};

//  FUNCION PARA MOSTRAR OBJETO CON VARIABLE LOCAL
function mostrarNombre() {
    
    // let  = .join('-');
        let resultado = `Lo siguiente es mi INFO: Vargas ${Object.values(miInformacion)}`;

    return resultado   
    
}



let resultadoDeLaFuncion = mostrarNombre();

// console.log(resultadoDeLaFuncion);


// Mostrar el objeto y la funcion en el HTML

let mostrarEnElHTML = resultadoDeLaFuncion

document.write(mostrarEnElHTML)



// cambiar Titulo del HTML


let cambiarTitulo = document.querySelector('h1');

cambiarTitulo.innerHTML = '<h2 class= tituloNuevo>Practica de JS <h2/>'
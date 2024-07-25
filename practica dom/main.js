

// // practica de DOM

// // Al boton le agregamos con "innerText" Hola Mundo 

// let button = document.querySelector('.boton')
// button.innerText = 'Hola Mundo'

// console.log('este selector me indica en el html: ',  button.innerText); 

// // A button le damos estilo 

// button.style.color = 'white'
// button.style.padding = '10px'
// button.style.backgroundColor = 'coral'
// button.style.borderRadius = '10px'
// button.style.border = 'none'


// // creando un nuevo elemento 
// const newDiv = document.createElement('div');
//  newDiv.innerText = 'Este es un nuevo div';
// //  document.body.append(newDiv); // Uso de append para añadir el div al body

// document.body.append(newDiv)

// //eliminar elementos Usando remove()

// // button.remove()
// newDiv.remove()


// if (!button.classList.contains('boton')) {

//     button.classList.toggle('boton')
//     console.log('Clase "boton" añadida mediante toggle');
    
// }else {
//     button.classList.toggle('boton')
//     console.log('Clase "boton" eliminada mediante toggle');

// }



// // acceso al DOM 

// // let btn = document.getElementsByClassName('boton')

// // console.log(`este es el boton,  ${btn}`);


// // 
// const link = document.querySelector('a')
// const href = link.getAttribute('href')
// console.log(href);




// // seleccionamos mediante #id 
// const pass = document.querySelector('#pass')

// console.log(pass);

// //  por medio de .getAttribute seleccionamos el atributo del valor #pass
// const verPass = " el valor es: " + pass.getAttribute('placeholder')

// console.log(verPass);

// // seleccionamos el input mediante el type del input  
// let chek = document.querySelector(" input[type='checkbox']")

// console.log(chek);

// // al parrafo le agregamos #id con setAttribute
// const parrafo = document.querySelector('p')

// // el id de elemento P es principal
// parrafo.setAttribute('id', 'principal')

// console.log(parrafo);


//***************************************************************************************************//
//***************************************************************************************************//
//***************************************************************************************************//





// const parraf = document.querySelector(' .parrafo')



// const persona = {
//     nombre: "Juan",
//     apellido: "Perez",
//     edad: 24
// }


// parraf.innerHTML = persona.apellido


// // eventos

// let boton = document.querySelector('.boton')

 

// // console.log(boton);
 
// boton.addEventListener('click', () =>{
// //    let dato = prompt('ingresa tu nombre')
// //    console.log(`El nombre ingresado es: ${dato}`);
// console.log('Realizaste un click');
// parraf.innerHTML = 'realizaste un click '
// } )



const alumnos = [
    {nombre: "Julia" , Apellido: "Perez", edad: 20, ciudad: "Bariloche"},
    {nombre: "Andres" , Apellido: "Rugtentager", edad: 41, ciudad: "buenos aires"},
    {nombre: "Lorena" , Apellido: "Lopez", edad: 33, ciudad: "barcelona"},
    {nombre: "Lord" , Apellido: "Bridgerton", edad: 22, ciudad: "paris"}


]

const tablaValores = document.querySelector('.tabla-body')

let valores = ''

for (let index = 0; index <alumnos.length; index++) {
    let alumnosValores = alumnos[index];
    // console.log(alumnos[index]);

    valores += `<tr>
                    <td>${alumnosValores.nombre}</td>
                    <td>${alumnosValores.Apellido}</td>
                    <td>${alumnosValores.edad}</td>
                    <td>${alumnosValores.ciudad}</td>
                </tr>
                `

}

tablaValores.innerHTML = valores































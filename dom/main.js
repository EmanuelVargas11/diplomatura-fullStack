

// practica de DOM

// Al boton le agregamos con "innerText" Hola Mundo 

let button = document.querySelector('.boton')
button.innerText = 'Hola Mundo'

console.log('este selector me indica en el html: ',  button.innerText); 

// A button le damos estilo 

button.style.color = 'white'
button.style.padding = '10px'
button.style.backgroundColor = 'coral'
button.style.borderRadius = '10px'
button.style.border = 'none'


// creando un nuevo elemento 
const newDiv = document.createElement('div');
 newDiv.innerText = 'Este es un nuevo div';
//  document.body.append(newDiv); // Uso de append para añadir el div al body

document.body.append(newDiv)

//eliminar elementos Usando remove()

// button.remove()
newDiv.remove()


if (!button.classList.contains('boton')) {

    button.classList.toggle('boton')
    console.log('Clase "boton" añadida mediante toggle');
    
}else {
    button.classList.toggle('boton')
    console.log('Clase "boton" eliminada mediante toggle');

}





















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



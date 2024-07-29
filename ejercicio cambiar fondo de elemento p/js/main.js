
// accedemos al DOM | seleccionamos el button
const boton = document.querySelector('.boton')
boton.innerText = 'Cambiar Color'
// console.log(boton);
// seleccionamos el elemento P
const parrafo = document.querySelector('.parrafo')



// array con los colores que deberia cambiar el fondo cada vez hagamos click
let colores = ['', '','green', 'blue', 'red', 'while', 'brown', 'blueviolet', 'yellowgreen', 'turquoise' ]

// contador
let coloresRandom = '';


// al hacer click cambia el fondo del elemento P a coral
// boton.addEventListener('click', () => {

//     parrafo.style.backgroundColor = 'coral'

// } )



function cambiarColoresFondo() {
    
    
    
    
    if (coloresRandom++ % colores.length) {
        // parrafo.style.backgroundColor = colores[0]
        // parrafo.style.backgroundColor = colores.length
        // parrafo.style.backgroundColor = colores.coloresRandom
        parrafo.style.backgroundColor = colores[coloresRandom]
        
        

        console.log('esta cambiando de color');
        
    }



}

boton.addEventListener('click', cambiarColoresFondo)

// console.log(cambiarColoresFondo());



// esto no me funciono

// function cambiarColoresFondo() {

 
//     for (let i = 0; i < colores.length; i++) {
//         coloresRandom = colores.length;
//         // console.log(coloresRandom);

//        }
    
//     parrafo.style.backgroundColor = colores[coloresRandom]
// }






// solo me muestra el indice de cada elemento del array/solo me muestra los elementos del array como una lista
// for (let i = 0; i < colores.length; i++) {
    //aqui muestra lo que pensaba mostraba pero no me sirve para lo que necesito
    // console.log(colores[i]);
    // console.log(i);
    // console.log(colores);
    
    /* aqui solo muestra los elementos del array incrementando en 
    0blue
    0bluered
    0blueredbrown.....
*/

    
    // aleatorio +=   colores[i]
    
    // console.log(aleatorio);

    // aca no hace nada, ni error
    // if (aleatorio == colores[i]) {
    
    //     console.log('hola');



    // }
// }


    


// podemos realizar mediante un if else el cambio que queremos 
// seria como que en el if me diga que cambie al hacer click pero dentro de una function








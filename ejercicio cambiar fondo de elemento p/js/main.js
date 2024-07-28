const boton = document.querySelector('.boton')
boton.innerText = 'Cambiar Color'
console.log(boton);

const parrafo = document.querySelector('.parrafo')

let colores = ['blue', 'red', 'brown', 'blueviolet', 'yellowgreen', 'turquoise']

let aleatorio = 0;


// al hacer click cambia el fondo del elemento P a coral
// boton.addEventListener('click', () => {

//     parrafo.style.backgroundColor = 'coral'

// } )
// solo me muestra el indice de cada elemento del array/solo me muestra los elementos del array como una lista
for (let i = 0; i < colores.length; i++) {
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
}


    



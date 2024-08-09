
// 





// // practica con JS. Manipulacion de elementos

// let tituloPrinci = document.querySelector('div.titulo')
// // console.log(tituloPrinci);



// //  (innerText)se manipula la variable creada pero modifica en forma de texto
// tituloPrinci.innerText = '<h1>FLEX</h1>' 



// // (innerTHTML)en esta opcion se manipula la variable creada pero pudiendo agregar nuevas etiquetas y texto dentro de las mismas

// // tituloPrinci.innerHTML = '<h2>Bienvenidos a la practica con JS</h2>'




// // cambiar estilo al titulo


//     tituloPrinci.style.backgroundColor = '#e104ed'
//     tituloPrinci.style.color = 'black'


//     // creacion y eliminacion de nodos

//     // nueva etiqueta
// const nuevaEtiqueta = document.createElement('div')
// // texto de la etiqueta
// nuevaEtiqueta.innerText = 'Este es el nuevo div'
// document.body.append(nuevaEtiqueta) // se imprime en el HTML

// // le damos estilo a la nueva etiqueta

// nuevaEtiqueta.style.backgroundColor ='yellow'
// nuevaEtiqueta.style.borderRadius = '10px'
// nuevaEtiqueta.style.border = '2px solid'


// // eliminando la nueva etiqueta 

// // document.querySelector('#nuevaEtiqueta')
// // nuevaEtiqueta.remove()






const boton = document.querySelector('#botonModo')
boton.innerText = 'Claro/Oscuro'

const cuerpo = document.querySelector('#cueporBody')

const tituloPrinci = document.querySelector('#tituloPrincipal')
const navBar = document.querySelector('#navBar')

const cards = document.querySelector('#cards')




boton.addEventListener('click', function() {
    cuerpo.classList.toggle('modoOscuro')
    tituloPrinci.classList.toggle('tituloModoOscuro')
    navBar.classList.toggle('navBarOscuro')
    cards.classList.toggle('')
    
})
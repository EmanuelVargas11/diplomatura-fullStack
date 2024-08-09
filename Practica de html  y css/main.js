
const boton = document.querySelector('.boton')


boton.innerText = 'modo claro/oscuro'

const bodyOscuro = document.querySelector('.oscuro')
const bodyClaro = document.querySelector('.claro')



const modosOscYClaro = ['black', 'white']
const colorLetra = ['black', 'white']

let cambiadorModo = 0;




function modoBackground() {
    
    bodyOscuro.style.backgroundColor = modosOscYClaro[cambiadorModo]
    cambiadorModo++
    
    if (cambiadorModo == modosOscYClaro.length ) {
        // bodyOscuro.style.color = 'black'
        cambiadorModo = 0;
               
        
     }  //  else{
    //     bodyOscuro.style.color = 'white'

    // }
    
    
}

boton.addEventListener('click', modoBackground)

    




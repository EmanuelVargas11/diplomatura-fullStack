for (let i = 1; i <= 15; i++){ 
    // for (let i = 20; i <= 40; i++) { 
      
     
     
     
    if (i %3 == 0 && i %5 == 0 ) { 
        console.log(`Aqui se muestra si es divisible por 3 y 5:  ${i}`); 
         
    }else if (i %3 == 0) { 
     
        console.log(`Aqui se muestra los divisibles por 3: ${i}`); 
     
    }else if (i %5 == 0) { 
         
            console.log(`Aqui se muestra si es divisible por 5:  ${i}`); 
         
     
    }else if(i %2 == 0) { 
     
            console.log(`Aqui se muestra los divisibles por 2: ${i}`); 
     
    }else { 
        console.log('no es divisible por los datos del indice', + i); 
    } 
     
     
     
    }
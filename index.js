// La libreria winston se instala, con el comando npm install winston, en el terminal.

// Funcion que devuelve un mensaje personalizado
const comprobarNumero = val =>{
    if(typeof val === 'number'){ 
         return val;
     }
     throw new Error('El valor no es un número');
 }

 // Registro de un error en un archivo a traves de un try catch
    const logger = require('./logger');
    const numero = 8;
    try{
        console.log("Se esta ejecutando correctamente");
        const doble = comprobarNumero(numero);
        console.log(doble);
    }catch(e){
        console.error("Se ha producido un error");
        logger.error(e);
    }finally{
        console.log("Se va ha ejecutar siempre");
    }
    
   



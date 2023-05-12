'use strict'

/* Creación de la promesa */
const promise = new Promise((resolve, reject)=>{
    resolve('Heyyy');
})


/* Ejemplo */
const cows =10;



/* Promesa que cuenta vacas  */

const countCows = new Promise((resolve, reject)=>{

    /* Lógica simple para realizar acciones */
    if(cows >= 10){

        /* Se llama a resolve si se puede completar la acción */
        resolve(`We have ${cows} cows, which is enough to milk em all`);
    }else{

        /* Se llama al reject si no se puede completar la acción */
        reject("We don't have enough cows")
    }
});


/* Llamada a la promesa */
countCows.then((result)=>{
    console.log(result);
}).catch((rip)=>{
    console.log(rip)
}).finally(()=>{
    console.log('finally')
})
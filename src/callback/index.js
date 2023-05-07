'use strict'


/* Creando una función de callback */
function suma(num, num2){
    return num + num2;
}


const call = function(num1, num2, callback){

    /* El tercer parámetro de esta función es la función de
    callback */

    /* Llamamos a la función de callback y le pasamos como argumentos
    los valores anteriormente definidos */
    return callback(num1, num2);
}


/* Mostramos en consola el resultado obtenido por la función.
En el caso de la función de callback, estamos recibiendo como resultado la suma de los dos valores. 
Por otra parte, la función que recibe como parámetro la función de callback va a estar retornando
lo que la función de callback en sí misma dé cómo resultado.

Cabe recalar que no hay que pasarle los paréntesis a la función de callback al momento de
ponerla como argumento de otra función; hacerlo nos generaría un error*/
console.log(call(2, 2, suma));

//setTimeOut
/* setTimeOut nos permite hacer que un código se ejecute en cierto tiempo definido como el segundo parámetro de la función.
El primer argumenot que recibirá esta función debe ser un callback que, normalmente, se define como una función anónima y dentro se
pone el código a ejecutar */
setTimeout(()=>{
    console.log('uwu')
}, 2000);


/* No obstante, también se le puede pasar una función ya creada a setTimeOut, pero, al momento de llamarla, 
no se le deberá poner paréntesis y si esta función recibe argumentos, estos deberán ser puestos al final */
const greeting = (name)=>{
    console.log(`Bienvenido, ${name}`);


}

setTimeout(greeting, 2000, 'Víc');
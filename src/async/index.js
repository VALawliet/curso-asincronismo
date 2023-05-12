'use strict'

const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('Hey')
            }, 2000);

        }else{
            reject(new Error('Error, L'));
        }
    })
}

const anotherFnc = async ()=>{
    const something = await fnAsync();
    console.log(something);
    console.log('HEyyyy')
}

console.log('Before')
anotherFnc()
console.log('after')
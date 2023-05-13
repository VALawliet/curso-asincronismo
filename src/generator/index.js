'use strict'

function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterable(arr){
    for(let i of arr){
        yield i;
    }
}

const it = [1, 2, 3, 4, 5, 6, 7];

const its = iterable(it);

console.log(its.next().value);
console.log(its.next().value)
console.log(its.next().value);
console.log(its.next().value);
console.log(its.next().value)
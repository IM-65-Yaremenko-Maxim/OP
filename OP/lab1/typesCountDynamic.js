'use strict';

const arr = [
    true, 'hello', 5, 12, -200, false, false, 'word',
    3.14, null, undefined, 'abc', 42, {}, [], 10n,
    Symbol('id'), () => {}, 'JS', true, 0, NaN
];


const collection = {};

for (const item of arr) {
    const type = typeof item;
    if (collection[type] === undefined) {
        collection[type] = 0;
    }
    collection[type]++;
}

console.log(collection);

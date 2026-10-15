'use strict';

const arr = [
    true, 'hello', 5, 12, -200, false, false, 'word',
    3.14, null, undefined, 'abc', 42, {}, [], 10n,
    Symbol('id'), () => {}, 'JS', true, 0, NaN
];

const collection = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0,
    bigint: 0,
    symbol: 0,
    function: 0,
};

for (const item of arr) {
    const type = typeof item;
    collection[type]++;
}

console.log(collection);

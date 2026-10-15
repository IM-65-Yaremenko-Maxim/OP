'use strict';

const random = (min, max) => {
    const from = max === undefined ? 0 : min;
    const to = max === undefined ? min : max;
    return Math.floor(Math.random() * (to - from + 1)) + from;
};

console.log(random(5, 10));
console.log(random(100));

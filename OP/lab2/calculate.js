'use strict';

const average = (a, b) => (a + b) / 2;

const square = (x) => x * x;

const cube = (x) => x * x * x;

const calculate = () => {
    const result = [];

    for (let i = 0; i < 10; i++) {
        const avg = average(square(i), cube(i));
        result.push(avg);
    }

    return result;
};

console.log(calculate());

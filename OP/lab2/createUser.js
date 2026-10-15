'use strict';

const createUser = (name, city) => {
    const user = { name, city };
    return user;
};

console.log(createUser('Marcus Aurelius', 'Roma'));

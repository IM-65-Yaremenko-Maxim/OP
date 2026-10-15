'use strict';

const fn = () => {
    const obj1 = { name: 'Ivan' };
    let obj2 = { name: 'Ivan' };

    
    obj1.name = 'Petro';
    obj2.name = 'Petro';

    const other = { name: 'Oleh' };

   
    obj2 = other;

    console.log(obj1);
    console.log(obj2);
};

fn();

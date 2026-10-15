'use strict';

const hash = {
    'Marcus Aurelius': '+380445554433',
    'Julius Caesar': '+380501112233',
    Augustus: '+380677778899',
    Nero: '+380931234567',
};

const findPhoneByName = (name) => {
    const phone = hash[name];
    return phone;
};

console.log(findPhoneByName('Julius Caesar'));
console.log(findPhoneByName('Nero'));
console.log(findPhoneByName('Cicero'));

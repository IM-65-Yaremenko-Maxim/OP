'use strict';

const phoneBook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Julius Caesar', phone: '+380501112233' },
    { name: 'Augustus', phone: '+380677778899' },
    { name: 'Nero', phone: '+380931234567' },
];

const findPhoneByName = (name) => {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }
    return 'not found';
};

console.log(findPhoneByName('Julius Caesar'));
console.log(findPhoneByName('Nero'));
console.log(findPhoneByName('Cicero'));

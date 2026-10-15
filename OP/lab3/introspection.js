'use strict';

const introspect = (iface) => {
    const result = [];

    for (const key of Object.keys(iface)) {
        const value = iface[key];
        if (typeof value === 'function') {
            result.push([key, value.length]);
        }
    }

    return result;
};

const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
    notFunction: 5,
};

console.log(introspect(iface));

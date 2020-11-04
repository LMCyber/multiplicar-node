const fs = require("fs"); //Paquetes del Node
// const fs = require('express'); //Paquetes de alguien más
// const fs = require('./fs'); //Paquetes propios
const colors = require('colors')

let listarTabla = (base, limite) => {
    console.log('======================================='.green)
    console.log(`===========Tabla de ${base}==================`.green)
    console.log('======================================='.blue)
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}* ${i} = ${base * i}`);
    }
};

function crearArchivo(base, limite) {
    return new Promise((res, req) => {
        if (!Number(base)) {
            req(`El valor introducido${base} no es un número`);
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) req(err);
            else res(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla,
};
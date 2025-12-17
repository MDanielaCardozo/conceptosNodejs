//modulos nativos:
//fs, http, path, os

const fs = require('fs')

try {
    const data = fs.readFileSync('./personajes.txt', 'utf-8')
    console.log(data);
} catch (error) {
    console.error(`Ocurrio un error al leer el archivo de forma asincrona: \n ${error}`)
}
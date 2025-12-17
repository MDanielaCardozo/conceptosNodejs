const { error, log } = require('console');
const fs = require('fs')

const textoNuevo = `\n *Nuevos personajes* \n 4-Thor \n 5-Loki \n 6-Spiderman \n 7-Venom`; 

fs.appendFile("./personajes.txt", textoNuevo, "utf-8", (error)=> {
    if (error) {
        return console.error(
            "Ocurrio un error al escribir en el archivo" + error
        )
    }
    console.log(("Archivo actualizado ✅"));
    
})
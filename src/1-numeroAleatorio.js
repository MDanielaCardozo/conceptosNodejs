//Crear un programa que reciba dos argumentos y genere el numero aleatorio entre esos dos numeros, en caso que no me pasen esos dos argumentos entonces por defecto usare el valor de 1 al 100

const argumentos = process.argv;
//metodo de array para acceder a los valores desde la posicion 2
const args = argumentos.slice(2)

//console.log(argumentos);
console.log(args);

let min = 1;
let max = 100;

if(args.length === 2){
    //pasar los arg a tipo de datos number y que sean enteros
    const minParse = parseInt(args[0]);
    const maxParse = parseInt(args[1]);

    //validar que no sean tipo de dato string
    if (!isNaN(minParse) && !isNaN(maxParse) && minParse < maxParse) {
        //guardar las validaciones dentro las variables
        min = minParse;
        max = maxParse;
    } else {
        console.log("Rango invalido. Usaremos los valores por defecto min=1 y max=100");
    }
}

const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`El numero aleatorio entre ${min} y ${max} es: ${aleatorio}.`)

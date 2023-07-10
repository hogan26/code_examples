/*
* Escribe un programa que muestre por consola (con un print) los
* números de 1 a 100 (ambos incluidos y con un salto de línea entre
* cada impresión), sustituyendo los siguientes:
* - Múltiplos de 3 por la palabra "fizz".
* - Múltiplos de 5 por la palabra "buzz".
* - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
*/



const fizzbuzz = () => {
    for (let numero = 1; numero <= 100; numero++) {    
        if (numero % 3 == 0 && numero % 5 == 0) console.log('fizzbuzz')
        else if(numero % 3 == 0) console.log('fizz')            
        else if (numero % 5 == 0) console.log('buzz')            
        else console.log(numero)
    }
}

console.time()
fizzbuzz()
// console.timeLog()
console.timeEnd()

//solucion 2 por keys4dev

// [...Array(101).keys()] --> Crear un array de 0 a 100
// .slice(1) --> la corta del 1 en adelante para tener los numeros del 1 al 100
//.map permite ejecutar una operacion por valor en el array 
const deUnoACien = [...Array(101).keys()].slice(1).map(number =>{
    // Si el numero es multiplo de 3 y 5 guardo fizzbuzz en el array
    if ((number % 3 === 0) && (number % 5 === 0)){
        return number = `fizzbuzz`;
    // Sino si el numero es multiplo de 3 guardo fizz en el array
    }else if (number % 3 === 0){
        return number = `fizz`;
    // Sino si el numero es multiplo de 5 guardo buzz en el array
    }else if(number % 5 === 0){
        return number = `buzz`;
    }else{
        // Sino se da ninguna condicion paso el numero a string para imprimirlo despues
        return number.toString();
    }
});


console.time()
//Hago un map para hacer la operacion de imprimir por pantalla cada valor del array
deUnoACien.map(number => console.log(number));
console.timeEnd()

//Si quieres ver el contenido del array, descomenta la siguiente linea
console.log(deUnoACien); // el tipo de dato es un objeto
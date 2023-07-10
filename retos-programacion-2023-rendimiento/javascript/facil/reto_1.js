/*
# Reto #1: EL "LENGUAJE HACKER"
#### Dificultad: Fácil | Publicación: 02/01/23 | Corrección: 09/01/23

## Enunciado

* Escribe un programa que reciba un texto y transforme lenguaje natural a
* "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
*  se caracteriza por sustituir caracteres alfanuméricos.
* - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
*   con el alfabeto y los números en "leet".
*   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
*/

diccionario = {'a':'4','b':'|3','c':'[','d':')','e':'3','f':'|=','g':'&','h':'#','i':'1','j':',_|','k':'>|','l':'1','m':'/\\/\\','n':'^/','o':'0','p':'|*','q':'(_,)','r':'|2','s':'5','t':'7','u':'(_)','v':'\\/','w':'\\/\\/','x':'><','y':'j','z':'2','1':'L','2':'R','3':'E','4':'A','5':'S','6':'b','7':'T','8':'B','9':'g','0':'o',' ':' '}

const traduccion = palabra => {
    //METODO 1 (SUBIDO AL REPOSITORIO)
    palabra = palabra.toLowerCase()
    let traduccion = ''
    for (letra of palabra) diccionario[letra] ? traduccion += diccionario[letra] : traduccion += letra
    return traduccion

    //METODO 2
    // return palabra.toLowerCase().split("").map(letra => {
    //     if(diccionario[letra]) return diccionario[letra] 
    //     else return letra        
    // }).join("")    
}

palabra = prompt('Ingrese la palabra')
console.log(traduccion(palabra))

//METODO PARA REALIZAR TEST (MUY INTERESANTE)
// const tests = {
//     input: [
//       "soy el diluvio",
//       "TE LLORE UN RIO",
//       "LiTtL3 pIeCe 0f He4vEn",
//       "#L1Fe_W@5tEr.",
//     ],
//     output: [
//       "50j 31 )11(_)\\/10",
//       "73 110123 (_)^/ 1210", //falla a proposito
//       "11771E |*13[3 o|= #3A\\/3^/",
//       "#1L|=3_\\/\\/@S7312.!!", //Este falla a proposito
//     ],
//   };
  
//   let errors = 0;
//   tests.input.forEach((test, index) => {
//     let resp = traduccion(test);
//     let expected = tests.output[index];
//     // console.log(`Test = ${test}`);
//     // console.log(`Index = ${index}`);
//     if (resp != expected) {
//       errors += 1;
//       console.log(`Test ${index}: Not Hot Dog`)
//       console.log("\noriginal: ", test);
//       console.log("Resultado:\n",resp);
//       console.log("Respuesta:\n", expected);
      
//     }else{
//       console.log("Resultado:", resp);
//       console.log("Respuesta:", expected);
//       console.log(`Test ${index}: Hot Dog`)
//     }
//   });
  
//   console.log(`${errors != 0 ? " Test incompletos " : "Test completos"}, ${errors} errores`);
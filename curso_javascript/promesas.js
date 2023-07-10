//las promesas son un objeto (y a su vez un callback) que tiene (llama a) 2 callbacks, uno llamado reject y otro llamado resolve. estos representan la terminasion de una operacion asincrona
//y el fracaso de una operacion asincrona respectivamente.

let nombre = "Nelsson"

const promesa = new Promise((resolve,reject)=>{
    if(nombre!="Nelson") reject("nombre incorrecto")
    else resolve(nombre)
})

console.log(promesa) //esto imprime un objeto catalogado como "promesa", la cual tiene sus datos encapsulados. 

//para acceder a los datos encapsulados de una promesa, se debe hacer a traves del metodo then(), el cual permite acceder a la informacion del callback resolve
//que a su vez, then() es un metodo que recibe un callback
promesa.then(resultado => {
    console.log(resultado) //esto imprime el dato encapsulado "PromiseResult" del objeto promesa
}).catch(e=>{ //el metodo then() permite acceder al callback resolve, mientras que el metodo catch() permite acceder al callback reject para manejar los errores
    console.log(e)
}) 

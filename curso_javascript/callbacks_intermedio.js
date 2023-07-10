class Persona{
    constructor(nombre,instagram){
        this.nombre = nombre
        this.instagram = instagram
    }
}
// console.log(new Persona("Nelson","@hogan.26"))

//array con la informacion de las personas para crear los objetos
let array_personas = [ 
    ["Nelson","@hogan.26"],
    ["Alvaro"]
]

//array para almacenar los objetos
let data = []

//creo los objetos y los almaceno en el array definido anteriormente
for (nueva_persona of array_personas) data.push(new Persona(nueva_persona[0],nueva_persona[1]))

//funcion que es igual a una funcion flecha que recibe como parametro el id (indice) de la persona a buscar y una funcion que maneja los errores
//y accede al objeto buscado para devolver la informacion solicitada.
const obtener_persona = (id,callback) => {
    //verifico si existe un objeto en el indice del listado de objetos que tengo
    if(data[id]==undefined) callback("no se ha encontrado la persona") //si no existe el objeto, llamo a la funcion callback pasando como argumento el error.
    else callback(null,data[id],id) //en caso de que si exista entonces paso null para el error y el objeto encontrado    
}

const obtener_instagram = (id,callback)=>{
    if(data[id].instagram==undefined) callback("esta persona no tiene una cuenta de instagram")
    else callback(null,data[id].instagram)
    
}

//esta funcion pasa como argumento el id de la persona a buscar y la funcion callback que se recibe en la funcion anterior, el primer parametro
//de esta ultima es el error mientras que el segundo parametro es el objeto que se encuentra en el indice indicado.
// en caso de que uno de los registros no tenga definido un campo, el sistema imprimira "undefined", por lo tanto hay que crear una funcion que maneje esto
obtener_persona(0,(error,persona,id)=>{
    if(error) console.log(error)
    else{
        console.log(persona.nombre)
        //como el instagram es un campo opcional se debe llamar a otra funcion que recibe como parametro el id y una funcion callback que maneje un posible error
        obtener_instagram(id,(error,instagram)=>{ 
            if(error) console.log(error)
            else console.log(instagram)            
        })
    }
})

//como se puede ver, cada vez que se tenga un campo opcional se debe hacer una nueva funcion callback que vaya a buscar el dato y maneje el error, por lo tanto,
//esta es la desventaja de construir con funciones callback
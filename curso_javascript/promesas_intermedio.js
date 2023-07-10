class Persona{
    constructor(nombre,instagram){
        this.nombre = nombre
        this.instagram = instagram
    }
}

let personas = [
    ["Nelson","@hogan.26"],
    ["Alvaro"]
]

let data = []

for(nueva_persona of personas){
    data.push(new Persona(nueva_persona[0],nueva_persona[1]))
}

const obtener_persona = id =>{ 
    return new Promise((resolve,reject)=>{ //la funcion flecha de obtener persona retorna una promesa
        if(data[id]==undefined) reject("no se encontró la persona")
        else resolve(data[id]) //el resolve mandara el objeto persona encontrado        
    })
}

obtener_instagram = persona => {
    return new Promise((resolve,reject)=>{
        if(!persona.instagram) reject("esta persona no tiene instagram")
        else resolve(persona.instagram)
    })
}

obtener_persona(2).then(persona=>{ //al llamar la funcion obtener_persona se debe llamar el metodo then() para acceder a la funcion resolve
    console.log(persona.nombre) //la funcion resolve en primera instancia imprime el valor del nombre del objeto persona
    return obtener_instagram(persona) //y llama a una nueva funcion que se encarga de obtener el instagram pasando como argumento el objeto persona encontrado     
}).then(instagram=>{ //como llamamos a otra funcion que ejecuta una promesa, para acceder al resolve debe llamar a la funcion then()        
    console.log(instagram) //la funcion resolve devuelve el instagram, por lo tanto solo de debe imprimir por consola
}).catch(e=>{ //para todas las promesas se ejecuta un solo catch, el cual maneja todos los errores
    console.log(e)
})

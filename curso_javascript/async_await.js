//las funciones asincronas se ejecutan en tiempo real y permiten la ejecución de otras funciones durante el proceso

const objeto = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
}

const obtener_informacion = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(objeto)},3000) //la funcion espera 3 segundos antes de mostrar el resultado
    })
}

// obtener_informacion().then(resultado=>console.log(resultado))

//en vez de trabajar con then() podemos hacer una funcion asincrona

// const mostrar_resultado = async ()=>{
//     resultado = await obtener_informacion()
//     console.log(resultado)
// }

async function mostrar_resultado(){ //tambien se puede escribir de esta forma
    resultado = await obtener_informacion()
    console.log(resultado)
}

mostrar_resultado()

//para este caso en particular, es mejor trabajarlo con la funcion then() ya que funciona igual y con menos lineas de codigo, en el siguiente archivo se verá
//un caso de uso real


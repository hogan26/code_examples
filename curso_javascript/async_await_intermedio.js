const obtener_informacion = text =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200) //lo que hace esta funcion es imprimir un texto en un tiempo aleatorio
    })
}

//cada vez que se ejecute este script el orden de las impresiones del texto apareceran en orden aleatorio

// obtener_informacion("valor1").then(resultado=>{console.log(resultado)})
// obtener_informacion("valor2").then(resultado=>{console.log(resultado)})
// obtener_informacion("valor3").then(resultado=>{console.log(resultado)})

//por lo tanto para este caso las promesas no sirven, de manera que se requiere usar las funciones await

//el await hace 2 cosas, la primera es acceder al valor que retorna la promesa, sino imprimiría el objeto promesa
//y en segundo lugar el await lo que hace es esperar a que se obtenga el valor de retorno antes de pasar a la siguiente linea de ejecución
//por lo tanto ahora siempre imprimirá los valores en orden
const mostrar_data = async ()=>{
    data1 = await obtener_informacion("valor1")
    data2 = await obtener_informacion("valor2")
    data3 = await obtener_informacion("valor3")
    console.log(data1)
    console.log(data2)
    console.log(data3)
}

mostrar_data()


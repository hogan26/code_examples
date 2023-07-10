//un callback es una funcion dentro de otra funcion

function prueba(callback){ //el parametro de nombre "callback" en realidad es otra funcion
    callback("Nelson") //estoy llamando a la funcion pasada como parametro pasado a su vez el string "Nelson" como parametro
}

function imprimir_nombre(nombre){
    console.log(nombre)
}

prueba(imprimir_nombre)

// esto se puede reescribir de la siguiente manera

prueba(function imprimir_nombre(nombre){
    console.log(nombre)
})

//con funciones flecha se ve de la siguiente forma

prueba(nombre=>console.log(nombre))


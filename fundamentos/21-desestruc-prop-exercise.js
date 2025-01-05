// 1. Usa desestructuración para extraer los dos primeros elementos de un array 


let array1 = [ 1, 2, 3, 4, 5 ]
let [valor1, valor2] = array1

console.log(valor1)
console.log(valor2)
console.log()

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [valor3, valor4, , , , valor5 = "predeterminado"] = array1

console.log(valor5)
console.log()

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let persona = {
    nombre: "juan",
    edad: 19,
    alias: "JuanK"
}

let {nombre, alias} = persona

console.log(nombre)
console.log(alias)
console.log()

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {nombre: nombrePersona, alias: aliasPersona} = persona

console.log(nombrePersona)
console.log(aliasPersona)
console.log()


// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let persona2 = {
    nombre: "juan",
    edad: 19,
    alias: "JuanK",
    objeto: {
        nombreObjeto: "hola",
        valorObjeto: "valor"
    }
}

let { objeto: {nombreObjeto, valorObjeto} } = persona2

console.log(nombreObjeto)
console.log(valorObjeto)
console.log()

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array2 = ["a", "b", "c"]
let arreglo = [...array1, ...array2]

console.log(arreglo)
console.log()

// 7. Usa propagación para crear una copia de un array

let array3 = [...array2]
console.log(array3)
console.log()


// 8. Usa propagación para combinar dos objetos en uno nuevo

let pelota = {
    tamaño: "grande",
    color: "azul"
}

let objetoNuevo = {...pelota, ...persona2}
console.log(objetoNuevo)
console.log()

// 9. Usa propagación para crear una copia de un objeto

let copiaPelota = {...pelota}
console.log(copiaPelota)
console.log()

// 10. Combina desestructuración y propagación

let { objeto: pepe} = objetoNuevo 
let pepito = {...pepe}

console.log(pepito)
console.log()
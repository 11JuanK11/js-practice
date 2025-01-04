// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

const sumatoria = function(a = 0, b = 0 ){
    return a + b
}
console.log(sumatoria(10, 10))
console.log()

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayorDelArray(miArray = [0]){
    let mayor = 0
    for(numero of miArray){
        if(mayor <= numero){
            mayor = numero
        }
    }
    return mayor
}
const array = [1, 2, 3, 4, 5]
const mayor = mayorDelArray(array)
console.log(`el numero mayor del array es ${mayor}`)
console.log()

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numeroDeVocales(cadenaTexto){
    const vocales = new Set(["a", "e", "i", "o", "u"])
    let cantidadVocales = 0
    for (const caracter of cadenaTexto) {
        if(vocales.has(caracter)){
            cantidadVocales++
        }
    }
    return cantidadVocales
}

console.log(numeroDeVocales("aaaaaas"))
console.log()

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const cadenaTextoMayuscula = (arrayCadenasTexto = ["no definido"]) => {
    let newArray = []
    for(cadena of arrayCadenasTexto){
        newArray.push(cadena.toUpperCase())
    }
    return newArray
}
let textos = ["hola", "mundo", "como", "estas"]
console.log(cadenaTextoMayuscula(textos))
console.log()

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esNumeroPrimo(numero){
    let cantDivisores = 0
    for(let i = 1; i <= numero; i++){
        if(numero % i == 0){
            cantDivisores++
        }
    }
    return cantDivisores == 2 ? true : false
}
let numeroComprobar = 6
console.log(`el numero: ${numeroComprobar} es primo?, ${esNumeroPrimo(numeroComprobar)}` )
console.log()

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [ 1, 2, 3, 4, 5, 6, 7, 8 ], array2 = [0, 4, 6, 9, 8]

function elementosComunes(array1 = [], array2 = []){
    let newArray = [], set = new Set(array2)
    array1.forEach(element => {
        if(set.has(element)){
            newArray.push(element)
        }
    });
    return newArray
}
console.log(elementosComunes(array1, array2))
console.log()

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const sumatoriaPares = function(array1 = [0]){
    let sumatoria = 0
    array1.forEach(numero => {
        if(numero % 2 == 0){
            sumatoria += numero
        }
    })
    return sumatoria
}
console.log(sumatoriaPares(array1))
console.log()

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
array1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
const funcion = (array = [0]) => {
    let newArray = []
    array.forEach(numero =>{
        newArray.push(Math.pow(numero, 2))
    })
    return newArray
}

console.log(funcion(array1))
console.log()

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirCadena(cadenaTexto){
    
    let inversa = "", palabras = cadenaTexto.split(" ")
    for(let i = palabras.length - 1; i >= 0; i--){
        inversa += palabras[i] + " " 
    }
    return inversa
}

console.log(invertirCadena("hola mundo"))
console.log()

// 10. Crea una función que calcule el factorial de un número dado
function factorial(numero){
    if(numero == 0){
        return 1
    }else{
        return numero * factorial(numero - 1)
    }
}

console.log(factorial(5))
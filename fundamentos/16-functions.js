//funciones 
/* 
    function myFunction(){  <-- en lowerCamelCase
        codigo
    }
*/
//sin parametros
function primeraFuncion(){
    console.log("hola en funcion")
}

for(let i = 0; i < 5; i++){
    primeraFuncion()
}
console.log()

//con parametros
function segundaFuncion(name){
    console.log(`te saludo ${name}`)
}
segundaFuncion("juan")

//funciones anonimas: asignar a variables o constantes una funcion

let funcionAnonima = function(numero){
    console.log(`tu numero es ${numero}`)
}
funcionAnonima(2)

//arrow functions
const funcionFlecha = (names) => {
    console.log(names)
}

const funcionFlechaUnaLinea = () => console.log("hola mundo")

//parametros(valores por defecto)

function parametros(a = 0, b = 0){
    console.log(a + b)
}

parametros(-10)

//retornar valores

function sumatoria(a = 0, b = 0){
    return a + b
}

let res = sumatoria(2, 8)
console.log(`el valor de la sumatoria es: ${sumatoria(2, 8)}`)
console.log(`el valor de la sumatoria es: ${res}`)

//funciones dentro de funciones

function externa(){
    console.log("esta es la funcion externa")
    function interna(){
        console.log("esta es la funcion que esta dentro de la funcion externa")
    }
    interna()
}

externa()

//funciones de orden superior (funciones que reciben funciones como argumento)
console.log()
function funcionSuperior(funcion, hola){
    funcion(hola)
}
funcionSuperior(funcionFlecha,"juan")

// forEach bucles a un objeto iterable

let array1 = [1, 2, 3, 4, 5], set2 = new Set(["pepe1", 2, 1.9, true]), map2 = new Map([
    ["clave", "valor"],
    [1, 10],
    [2, 20]
])
console.log()

array1.forEach(element => {
    console.log(element)
});
console.log()

map2.forEach(element => {
    console.log(element)
});
console.log()


set2.forEach(element => {
    console.log(element)
});
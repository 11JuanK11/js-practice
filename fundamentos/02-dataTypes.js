/*
    string "Cadenas"
    number 2 1.75
    boolean true false
    undefined no tiene asignado un valor 
    null no tiene valor porque asi lo queriamos
    symbol objeto valores unicos usados como ids de propiedades
    BigInt un valor numerico mas grande que no se representa en 64 bits
*/

let names = "Juan Camilo"
let alias = "JuanK"

let age = 19
let height = 1.75

let isStudent = true
let isTeacher = false

let undefinedValue //no tiene asignado ningun valor
let nullValue = null

let mySymbol = Symbol("simbolo")

let bigInt = BigInt(11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111)
let bigInt2 = BigInt(1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111)

console.log(typeof names)
console.log(typeof bigInt2)
console.log(typeof age)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)





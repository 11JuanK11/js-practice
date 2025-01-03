// 1. Escribe un comentario en una línea

// esto es un comentario de una linea

// 2. Escribe un comentario en varias líneas
/*  Esto
    es
    un
    comentario
    de 
    varias
    lineas  
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let varString = "Variable tipo String" 
let varNumber = 100
let varBigInt = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
let varBoolean = true 
let varSymbol = Symbol("simbolo_raro") 
let varUndefined 
let varNull = null 


// 4. Imprime por consola el valor de todas las variables

console.log(varString)
console.log(varNumber)
console.log(varBigInt)
console.log(varBoolean)
console.log(varSymbol)
console.log(varUndefined)
console.log(varNull)

// 5. Imprime por consola el tipo de todas las variables
console.log("\n")
console.log(typeof varString)
console.log(typeof varNumber)
console.log(typeof varBigInt)
console.log(typeof varBoolean)
console.log(typeof varSymbol)
console.log(typeof varUndefined)
console.log(typeof varNull)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

varString = "nuevo string"
varNumber = 1
varBigInt = 20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
varBoolean = false
varSymbol = Symbol("simbolo_raro2") 
varUndefined
varNull = null

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
varString = 2
varNumber = "s"
varBigInt = 2
varBoolean = 20000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n 
varSymbol = "w"
varUndefined = Symbol("simbolo_raro2") 
varNull = false

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const constString = "Variable tipo String" 
const constNumber = 100
const constBigInt = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n
const constBoolean = true 
const constSymbol = Symbol("simbolo_raro") 
//const constUndefined 
const constNull = null 

// 9. A continuación, modifica los valores de las constantes

/*
constString = 2
constNumber = 2
constBigInt = 2
constBoolean = 2
constSymbol = 2
constUndefined = true
constNull = "hola"
*/



// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
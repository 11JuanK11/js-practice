// 1. Crea una variable para cada operación aritmética
let varSum = 2 + 4 
let varRes = 2 - 4
let varMul = 2 * 4
let varDiv = 2 / 4
let varMod = 2 % 4
let varExp = 2 ** 4

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let varAsig1 = varSum
let varAsig2 = 10
    varAsig2 += varRes
let varAsig3 =  2
    varAsig3 -= varMul
let varAsig4 = 3
    varAsig4 *= varDiv
let varAsig5 = 2
    varAsig5 /= varMod
let varAsig6 = 3
    varAsig6 **= varExp

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log( 10 === 10)
console.log( 10 <= 11)
console.log( 10 < 40)
console.log( null == undefined)
console.log( 10 > 0)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log( 10 === "10")
console.log( 10 >= 11)
console.log( 10 > 40)
console.log( null === undefined)
console.log( 0 > 0)

// 5. Utiliza el operador lógico and

console.log( 10 === "10" && 10 != 20)


// 6. Utiliza el operador lógico or

console.log( 10 === "10" || 10 != 20)

// 7. Combina ambos operadores lógicos

console.log((20 > 10 || -20 < -40) && (20 > 10 || -20 < -40)  )

// 8. Añade alguna negación

console.log((20 > 10 || -20 < -40) && !(20 > 10 || -20 < -40)  )


// 9. Utiliza el operador ternario
console.log(20 > 10 ? "20 es mayor" : "20 es menor")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log((20 > 10 || -20 <= -40) ? 2 + 4 : 4 - 2 )

//aritmeticos

let variable1 = 1
let variable2 = variable1 + 3
let variable3 = 4 - variable1
let variable4 = variable2 * variable3
let variable5 = 16 / variable2
let variable6 = variable5 % variable3
let variable7 = variable2 ** variable3


variable1 += 2
variable2 -= 2
variable3 *= 2
variable4 /= 2 
variable5 %= 2 
variable6 **= 2

console.log(variable1 == 1)
console.log(variable1 == "1")
console.log(variable1 === "1")
console.log(variable1 < variable2)
console.log(variable1 > variable3)
console.log(variable1 <= variable4)
console.log(variable5 >= variable2)
console.log(variable1 != "1")
console.log(variable1 !== "1")
console.log(null == undefined)
console.log(0 == false )
console.log(3 === true )
console.log(null === undefined )
console.log(null == "" )
console.log(0 == "")

console.log("\n")

console.log(10 < 20 && 20 == 10)
console.log(20 == "20" && 20 == 20)
console.log(!!!(true && false || false && true))

let condi
const booleano = !false
condi = booleano ? "Entro al true" : "Entro al false"
console.log("\n" + condi)
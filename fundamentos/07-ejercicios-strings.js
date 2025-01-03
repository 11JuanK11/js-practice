let cadena1 = "Cadena1", cadena2 = "cadena2"

// 1. Concatena dos cadenas de texto
console.log(cadena1 + cadena2)

// 2. Muestra la longitud de una cadena de texto
console.log(cadena1.length)

// 3. Muestra el primer y último carácter de un string
console.log(cadena1[0])
console.log(cadena1[ cadena1.length - 1 ])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena2.toUpperCase())
console.log(cadena2.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let cadenaVariasLineas = `
esta
cadena
tiene
muchas
lineas`
console.log(cadenaVariasLineas)
// 6. Interpola el valor de una variable en un string
let cadenaTexto = `esta variable interpola la cadena 1: ${cadena1} y la cadena 2: ${cadena2}`
console.log(cadenaTexto)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(cadenaTexto.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(cadenaTexto.includes("Cadena1"))

// 9. Comprueba si dos strings son iguales
console.log("cadena1" == cadena1)

// 10. Comprueba si dos strings tienen la misma longitud
console.log("cadena1".length == cadena1.length)
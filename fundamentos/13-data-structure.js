// 1. Crea un array que almacene cinco animales
const animals = []

animals.push("Perro")
animals.push("Gato")
animals.push("Raton")
animals.push("Pajaro")
animals.push("Tortuga")
console.log(animals)
// 2. Añade dos más. Uno al principio y otro al final

console.log("\n")
animals.push("Serpiente") //final
animals.unshift("Hormiga") //principio
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición

console.log("\n")
console.log(animals.splice(2, 1))
console.log(animals)

// 4. Crea un set que almacene cinco libros

const books = new Set()
books.add("Libro 1")
books.add("Libro 2")
books.add("Libro 3")
books.add("Libro 4")
books.add("Libro 5")
console.log("\n")
console.log(books)

// 5. Añade dos más. Uno de ellos repetido

books.add("Libro 6")
books.add("Libro 5")
console.log("\n")
console.log(books)

// 6. Elimina uno concreto a tu elección

books.delete("Libro 6")
console.log("\n")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre

const months = new Map()
months.set(1, "enero")
months.set(2, "febrero")
months.set(3, "marzo")
months.set(4, "abril")
months.set(5, "mayo")
months.set(6, "junio")
months.set(7, "julio")
months.set(8, "agosto")
months.set(9, "septiembre")
months.set(10, "octubre")
months.set(11, "noviembre")
months.set(12, "diciembre")
console.log("\n")
console.log(months)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log("\n")
console.log(months.has(5) ? months.get(5) : "No existe")

// 9. Añade al mapa una clave con un array que almacene los meses de verano

const summerMonths = ["junio", "julio", "agosto" ]
months.set(13, summerMonths)
console.log("\n")
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

const newArray = [ 1, 2, 3, 4, 5 ]
console.log(newArray)
const newSet = new Set(newArray)
console.log(newSet)
const newMap = new Map()
newMap.set(0, newSet)
console.log(newMap)


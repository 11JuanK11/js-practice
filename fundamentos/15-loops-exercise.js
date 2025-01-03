// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(let i = 1; i <= 20; i++){
    console.log(i)
}
console.log()

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let index = 1, sumatoria = 0;
while(index <= 100){
    sumatoria += index
    index++
}
console.log(sumatoria)
console.log()

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
index = 1
do{
    if(index % 2 == 0){
        console.log(index)
    }
    index++
}while(index <= 50)
console.log()
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ["juan", "camilo", "sebastian", "sara"]

for(let nombre of nombres){
    console.log(nombre)
}
console.log()

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadenaTexto = "hola mundoo"
let cantidadVocales = 0, vocales = new Set(["a", "e", "i", "o", "u"])
for(let caracter of cadenaTexto){
    if(vocales.has(caracter)){
        cantidadVocales++
    }
}
console.log(cantidadVocales)
console.log()

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let arrayNums = [1, 2, 3, 4, 5, 6]
let producto = 1

for(let factor of arrayNums){
    producto *= factor
}
console.log(producto)
console.log()

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let num = 1
do{
    console.log(num * 5)
    num++
}while(num <= 10)
console.log()

// 8. Usa un bucle para invertir una cadena de texto

cadenaTexto = "invierte esto"
let cadenaInvertida = ""
for(let j = cadenaTexto.length - 1; j > -1; j--){
    cadenaInvertida += cadenaTexto[j]
}
console.log(cadenaInvertida)
console.log()
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0, b = 1 ,c = 0, fin = 0
while(fin < 8){
    if(fin == 0){
        console.log(a)
        console.log(b)
    }
    c = a + b
    a = b
    b = c
    console.log(c)
    fin++
}
console.log()

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
arrayNums = [11, 2, 100, 23, 5, 6, 99, 10]
let numerosMayores = []
for (let num of arrayNums) {
    if(num > 10){
        numerosMayores.push(num)
    }
}
console.log(arrayNums)
console.log(numerosMayores)
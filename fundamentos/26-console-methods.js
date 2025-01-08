//consola

//log -> informacion mas general
console.log("hola mundo")

//error -> mostrar o destacar errores en el navegador
console.error("hola mundo en error: forma 1")
console.error("hola mundo en error: forma 2", new Error("fallo"))

//warn -> advertencias -> puede ocurrir un problema
console.warn("hola mundo con advertencias")

//info -> para destacar informacion adicional
console.info("hola mundo con info")

//formatear datos

// tablas
let data = [
    {encabezado: {hola: "pepei", hola2: "pepe"}, encabezado1: "valor del valor1"},
    {encabezado1: "valor1", encabezado: "valor1 del valor"}
]
console.table(data)

//group -> usamos group y groupEnd los console's  
console.group("titulo:")
console.log("nombre: juan")
console.log("valor: 1")
console.groupEnd()

//time -> evaluar el tiempo de ejecucion de un bloque de codigo
/* 
    .time("asignar un nombre a ese bloque") 
        codigo
    .timeEnd("el mismo nombre") 
*/

console.time("Nombre1")

for(let i = 0; i < 1000000000; i++){

}

console.timeEnd("Nombre1")

//assert

let edad = 18
console.assert(edad > 18, "no es mayor de edad")


//trace -> darle seguimiento a la ejecucion 
// lo que esta mas abajo es lo mas antiguo que se ha ejecutado

function funcA(){
    funcB()
}

function funcB(){
    console.trace("traza de ejecucion.")
}

funcA()


console.clear()
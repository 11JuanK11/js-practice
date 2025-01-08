// 1. Crea un función que utilice error correctamente

function funcionError(){
    const a = 10
    console.log(a += 20)
}

try {
    funcionError()
} catch (error) {
    console.error(error.message, "ocurrio un error en esta funcion")
}
// 2. Crea una función que utilice warn correctamente

function funcionAdvertencia(numero){
    if(numero < 0 || numero > 1){
        console.warn("el numero requerido debe manejarse en el rango de 0-1")
    }
}

funcionAdvertencia(20)

// 3. Crea una función que utilice info correctamente


function funcionInfo(edad, numero) {
    console.info("El usuario debe de ser mayor de edad")
    if(edad > 18){
        console.log(`${numero} este es el otro parametro`)
    }
}

funcionInfo(19, 2)

// 4. Utiliza table
let persona = {nombre: "pepe", apellido: "perez", edad: 10}

let infoTabla = [
    persona, 
    {nombre: "pepe1", apellido: "perez1", edad: 101},
    {nombre: "pepe2", apellido: "perez3", edad: 120},
    {nombre: "pepe3", apellido: "perez2", edad: 130}
]

console.table(infoTabla)

// 5. Utiliza group

console.group("Persona")
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.groupEnd("Persona")


// 6. Utiliza time

let hola = [ ",", "2", "d", " ", "j", 4, -100]

console.time("orden")
hola.sort()
console.log(hola)
console.timeEnd("orden")

// 7. Valida con assert si un número es positivo
let numeroPos = 1
console.assert(numeroPos > 0, "El numero tiene que ser positivo")

// 8. Utiliza count
for(let i = 0; i < 10; i++){
    if(i == 6){
        console.countReset("cuenta-for")
    }
    console.count("cuenta-for")

}

// 9. Utiliza trace
funcionA(0)

function funcionA(i) {
    if(i == 2){
        funcionB()
    }else{
        i++
        funcionA(i)
    }
}

function funcionB() {
    console.trace("traza de ejercicio")
}

// 10. Utiliza clear

console.clear()
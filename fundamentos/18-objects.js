//objetos

//inicializar n objeto
let persona = {
    nombre: "juan",
    edad: 19,
    alias: "JuanK"
}

//acceder a las propiedades
console.log(persona.nombre)
console.log()

//modificar valor de las propiedades

persona.nombre = "Camilo"
console.log(persona.nombre)
console.log(typeof persona.edad)
persona.edad = "20"
console.log(typeof persona.edad)
console.log()

//eliminar propiedades

delete persona.nombre
console.log(persona)
console.log()


console.log(persona)
console.log()

//añadir propiedades
persona.nacionalidad = "colombiana"

console.log(persona)
console.log()

let persona2 = {
    nombre: "nauj",
    edad: 91,
    alias: "JuanK",
    caminar: function(){
        console.log(this.nombre + " esta caminando")
    } 
}
persona2.caminar()
console.log()


let persona3 = {
    nombre: "nauj",
    edad: 91,
    alias: "JuanK",
    caminar: function(){
        console.log(this.nombre + " esta caminando")
    },
    ocupacion: {
        nombre: "hola",
        tiempo: "madrugada"
    }
}

console.log(persona3)
console.log(persona3.ocupacion)
console.log(persona3.ocupacion.tiempo)
console.log()

//igualdad de objetos (se compara la referencia en memoria)

persona = {
    nombre: "juan",
    edad: 19,
    alias: "JuanK"
}

let persona4 = {
    nombre: "juan",
    edad: 19,
    alias: "JuanK"
}

console.log(persona == persona4) //false

persona4 = persona
console.log(persona == persona4) //true
console.log()

//iterar propiedades de objetos usamos for-in, reemplazamos el of por in (misma sintaxis for-of)
//accedemos a la propiedades por medio de los corchetes y la llave, no el .

persona = {
    nombre: "juan",
    edad: 19,
    alias: "JuanK"
}


persona4 = {
    nombre: "juan",
    edad: 19,
    alias: "JuanK"
}

for (let llave in persona) {
    console.log(llave + ": " + persona[llave])
}
console.log()
for (let llave in persona) {
    console.log(persona[llave] == persona4[llave])
}

function Persona(nombre, edad){ //no es recomendable -> ideal es que sea una clase
    this.nombre = nombre
    this.edad = edad
}
let personaConstructor = new Persona("pepe", 10)
console.log(personaConstructor)

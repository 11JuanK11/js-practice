//desestructuracion -> extraer valores de arrays y objetos y asignarlo a variables

let array1 = [1, 2, 3, 4]
let persona = {
    nombre: "juan",
    edad: 19,
    alias: "JuanK"
}

//desestructuracion de arrays
let [valor0, valor1, valor2, valor3] = array1

console.log(valor0)
console.log(valor1)
console.log(valor2)
console.log(valor3)
console.log()
//array con valor predeterminados
//en la declaracion sino tiene valor en el arreglo toma el valor asignado
let [valor4, valor5, valor6, valor7, valor8 = 0] = array1

console.log(valor4)
console.log(valor5)
console.log(valor6)
console.log(valor7)
console.log(valor8)

//ignorar elementos/propiedades de un array -> dejamos espacio entre las comas en el indice de ese valor que vamos a ignorar 
let [valor9, , valor10 , ] = array1

console.log(valor9)
console.log(valor10)
console.log()

//desestructuracion de objetos --> se hace referencia con el mismo nombre de los atributos del objeto
// para hacer referencia a los atributos con variables usamos los : --> atributo : nombreVariable
//objetos con valor predeterminados

let { nombre, edad, alias, email = "pepe@gmail.com"} = persona

console.log(nombre)
console.log(edad)
console.log(alias)
console.log(email)
console.log()

let { nombre: nombre1, edad:edad1, alias:alias1} = persona

console.log(nombre1)
console.log(edad1)
console.log(alias1)
console.log()

//desestructurar objetos anidados

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

//  {..., objeto: { propiedades: nombreVariables... } }

let {nombre: nombre2, ocupacion: { tiempo: tiempo1, nombre: nombreProp} } = persona3

console.log(nombre2)
console.log(tiempo1)
console.log(nombreProp)
console.log()

//propagacion de arrays --> usamos el operador ( ... ) copia los valores

let arrays = [...array1] //se copian los valores, no se asigna la referencia
console.log(arrays)
console.log(arrays == array1) //false
console.log()

let arrays2 = [...array1, "hola", true]

console.log(arrays2)
console.log()

//combinar varios arreglos en uno

let arrays3 = [...arrays, ...arrays2]
console.log(arrays3)
console.log()

//propagacion de objetos
//copiar valores del objeto y tener la posibilidad de agregar nuevos valores
let persona2 = {...persona, email: "email.com"}
console.log(persona2)

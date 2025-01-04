// 1. Crea un objeto con 3 propiedades
let objeto = {
    atributo1: "hola",
    atributo2: 10,
    atributo3: true
}

// 2. Accede y muestra su valor

console.log(objeto)

// 3. Agrega una nueva propiedad
objeto.atributo4 = 3.1416
console.log(objeto)

// 4. Elimina una de las 3 primeras propiedades

delete objeto.atributo3
console.log(objeto)

// 5. Agrega una función e invócala

objeto.funcion = function(){
    console.log("objeto saludando")
}

objeto.funcion()

// 6. Itera las propiedades del objeto

for(let atributos in objeto){
    console.log(atributos)
}

// 7. Crea un objeto anidado

let objeto1 = {
    nombre: "objetos",
    objeto2: {
        nombre: "objeto anidado"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(objeto1.nombre)
console.log(objeto1.objeto2)
console.log(objeto1.objeto2.nombre)

// 9. Comprueba si los dos objetos creados son iguales

objeto = {
    nombre: "objetos",
    objeto2: objeto1.objeto2
}

function sonIguales(objeto1, objeto2){
    console.log(objeto1 == objeto2 ? "son iguales por referencia" : "no son iguales por referencia")
    let bandera = true
    for (let key in objeto1) {
        if(objeto1[key] != objeto2[key]){
            bandera = false
        }
        console.log(bandera)
    }
    console.log(bandera ? "son iguales por atributos" : "no son iguales por atributos")
}

sonIguales(objeto, objeto1)

// 10. Comprueba si dos propiedades diferentes son iguales

function propiedadesIguales(valor1, valor2){
    if(valor1 == valor2){
        console.log("el valor de las propiedades son iguales")
    }else{
        console.log("el valor de las propiedades no son iguales")
    }
}

propiedadesIguales(objeto1.objeto2, objeto.atributo1)
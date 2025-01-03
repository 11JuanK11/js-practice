// if/else/else if/ternaria

let myName = "Juan", user = "usuarioSecreto", password = "1234"

// 1. Imprime por consola tu nombre si una variable toma su valor

console.log(myName == "Juan" ? myName : "")

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

if(user == "usuarioSecreto" && password === "1234"){
    console.log("Bienvenido")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 0
if(num > 0){
    console.log("positivo")
}else if(num < 0){
    console.log("negativo")
}else{
    console.log("cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 10
if(age < 18){
    console.log(`no puedes votar te hacen falta ${18 - age} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let etapa = age < 18 ? "menor": "adulto"
console.log(etapa)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let mes = 20, estacion, numeroDias
if(mes == 0){
    estacion = "estacion1"
    numeroDias = 31
}else if(mes == 1){
    estacion = "estacion1"
    numeroDias = 28
}else if(mes == 2){
    estacion = "estacion1"
    numeroDias = 31
}else if(mes == 3){
    estacion = "estacion2"
    numeroDias = 30

}else if(mes == 4){
    estacion = "estacion2"
    numeroDias = 31

}else if(mes == 5){
    estacion = "estacion2"
    numeroDias = 30
}else if(mes == 6){
    estacion = "estacion3"
    numeroDias = 31

}else if(mes == 7){
    estacion = "estacion3"
    numeroDias = 31

}else if(mes == 8){
    estacion = "estacion3"
    numeroDias = 30
}else if(mes == 9){
    estacion = "estacion4"
    numeroDias = 31

}else if(mes == 10){
    estacion = "estacion4"
    numeroDias = 30
}else if(mes == 11){
    estacion = "estacion4"
    numeroDias = 31
}else{
    numeroDias = estacion = "numero incorrecto" 
}

console.log(estacion)
console.log(numeroDias)


// switch
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let saludo, idioma = "frances"
switch(idioma){
    case "ingles":
        saludo = `saludo en ${idioma}`
        break
    case "espaniol":
        saludo = `saludo en ${idioma}`
        break
    case "frances":
        saludo = `saludo en ${idioma}`
        break
    default:
        saludo = "incorrecto"
}
console.log(saludo)


// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch(mes){
    case 0:
    estacion = "estacion1"
    numeroDias = 31
    break

case 1:
    estacion = "estacion1"
    numeroDias = 28
    break

case 2:
    estacion = "estacion1"
    numeroDias = 31
    break

case 3:
    estacion = "estacion2"
    numeroDias = 30
    break


case 4:
    estacion = "estacion2"
    numeroDias = 31
    break


case 5:
    estacion = "estacion2"
    numeroDias = 30
    break

case 6:
    estacion = "estacion3"
    numeroDias = 31
    break


case 7:
    estacion = "estacion3"
    numeroDias = 31    
    break


case 8:
    estacion = "estacion3"
    numeroDias = 30
    break

case 9:
    estacion = "estacion4"
    numeroDias = 31
    break


case 10:
    estacion = "estacion4"
    numeroDias = 30
    break

case 11:
    estacion = "estacion4"
    numeroDias = 31
    break
default:
    numeroDias = estacion = "numero incorrecto" 
}

console.log(estacion)
console.log(numeroDias)
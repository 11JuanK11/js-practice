let age = 17
if (age < 18) {
    console.log("menor de edad")
}else if (age > 18) {
    console.log("mayor de edad")
}else{
    console.log("tiene 18")
}


console.log(age < 18 ? "menor de edad" : "mayor de edad")

let dayId = 10, dayName
switch(dayId){
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Numero incorrecto"
}

console.log(dayName)
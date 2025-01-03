let myName = "Juan", myLastname = "Alzate", fullName

fullName = myName + " "+ myLastname;
let saludo = "Hello, i'm " + fullName
console.log(saludo)
console.log(typeof fullName)
console.log(fullName.length)

console.log(fullName[0])
console.log(fullName[10])
console.log(fullName.toUpperCase())
console.log(saludo.indexOf("Juan"))
console.log(saludo.includes("i'm"))
console.log(saludo.slice(0, 5))
console.log(saludo.replace("Juan Alzate", "JuanK"))

let stringRaro = `
este
es
el
string
raro`

console.log(stringRaro)

let email = "juan@email.com"
let interpolacion = `estoy saludando a ${myName} ${myLastname} 
con email: ${email}` 

console.log(interpolacion)
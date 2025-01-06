// 1. Captura una excepción utilizando try-catch

try {
    const a = 10
    a = 12
} catch (error) {
    console.log(error.message)
}
console.log()

// 2. Captura una excepción utilizando try-catch y finally

try {
    const a = 10
    a = 12
} catch (error) {
    console.log(error.message)
} finally{
    console.log(2 + 2 + " esto si funciona siempre")
}
console.log()
// 3. Lanza una excepción genérica

try {
    throw new Error("ocurrio un error imprevisto")
} catch (error) {
    console.log(error.message)
}
console.log()

// 4. Crea una excepción personalizada
class ErrorPersonalizado extends Error{
    constructor(message, valor1, valor2){
        super(message)
        this.valor1 = valor1
        this.valor2 = valor2
    }

    propiedadesError(){
        console.log(`propiedad 1: ${this.valor1} - propiedad 2: ${this.valor2}`)
    }
}

// 5. Lanza una excepción personalizada

try {
    throw new ErrorPersonalizado("error personalizado", "hi", "hola")
} catch (error) {
    console.log(error.message)
    error.propiedadesError()
}
console.log()

// 6. Lanza varias excepciones según una lógica definida

function manejoErrores(a, b){
    if(!Number.isInteger(a)){
        throw new Error("error con a")
    }

    if(!Number.isInteger(b)){
        throw new TypeError("error con b")
    }

    if(a - b === 0){
        throw new ErrorPersonalizado("da 0", a, b)
    }
}
//manejoErrores(2, 2 )

// 7. Captura varias excepciones en un mismo try-catch
try {
    manejoErrores(2, "a")
} catch (error) {
    if(error instanceof TypeError){
        console.log("error de tipo")
    }else if(error instanceof ErrorPersonalizado){
        console.log("error de tipo personalizado")
    }else if(error instanceof Error){
        console.log("error generico")
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log()
let array = [2.2, 3, "aaa", "xvv", 22.01]
let arrayErrores = []

for (let element of array) {
    try {
        if(!Number.isFinite(element)){
            throw new Error(`${element} no se puede transformar`)
        }else{
            element = parseFloat(element)
        }
    } catch (error) {
        arrayErrores.push(error.message)
    }
}
console.log(arrayErrores)


// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

let objetoPrueba = {
    prop1: true,
    prop2: "hola"
}

function tienePropiedad(objeto, propiedad){
    try {
        if(!objeto[propiedad]){
            throw new ErrorPersonalizado("error no tiene propiedad", objeto, propiedad)
        }
        console.log("si tiene")
    } catch (error) {
        console.log(error.message)
    }
}

tienePropiedad(objetoPrueba, "prop3")

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function reintentos(intento, a , b){
    intento++
    if(intento != 10){
        try {
            if( (a + b) < 20){
                throw new Error("no supero el 20 --> " + (a + b))
            }
        } catch (error) {
            console.log(error.message + " - intento " + intento)
            reintentos(intento, a + 3, b + 2)
        }
    }
}

reintentos(0, 10, -10)
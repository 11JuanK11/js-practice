//excepciones
let objeto
//console.log(objeto.propiedad)
 //excepcion --> se produce el error

//capturar errores
//try-catch

try {
    //codigo sensible
    console.log(objeto.propiedad)
    console.log("sin error")
} catch {
    //codigo cuando se produce el error
    console.log("produce el error")
}

//capturando el error especifico
try {
    console.log(objeto.propiedad)
} catch (error) {
    console.log("produce el error:" + error.message)
}

//bloque finally
//independientemente de si ocurre o no un error se ejecuta esa porcion de codigo
try {
    console.log(objeto.propiedad)
    console.log("sin error")
} catch (error) {
    console.log("produce el error:" + error.message)
}finally{
    console.log("siempre se ejecuta")
}
console.log()
//lanzamiento de errores
function sumarEnteros(a, b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("ocurrio un error ya que no son numeros");
    }
    return a + b
}

try {
    console.log(sumarEnteros(2, 2))
} catch (error) {
    if(error instanceof TypeError){
        console.log("error tipo:" + error.message)

    }else if(error instanceof Error){
        console.log(error.message)
    }
}

//errores personalizados
class MiError extends Error {
    constructor(message,a, b){
        super(message)
        this.a = a
        this.b = b
    }

    metodoError(){
        console.log(this.a + " <--> " + this.b)
    }
}

function nuevoMetodo(){
    throw new MiError("hola error", 1, 2)
}

try {
    nuevoMetodo()
} catch (error) {
    console.log(error.message)
    error.metodoError()
}





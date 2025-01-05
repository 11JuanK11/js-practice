//Clases  plantillas para crear objetos

class Persona{

    //palabra reservada para crear el constructor solo se puede tener un constructor

    //constructor con todos los parametros
    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let persona = new Persona("pepe", 10, "pepito")
console.log(persona)
console.log()

class PersonaPredeterminada{

    constructor(name = "sin nombre", age = 0, alias = "sin alias"){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let persona1 = new PersonaPredeterminada("pepe")
console.log(persona1)
console.log()

//acceder a propiedades  --> igual que los objetos
console.log(persona1.age)
console.log()

persona1.age = 20
console.log(persona1.age)
console.log()

//metodos de las clases


class PersonaMetodos{

    constructor(name, age, alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("caminar")
        console.log()
    }

}

let persona3 = new PersonaMetodos("pepe", 10, "alias")

persona3.walk()

//propiedades privadas --> usamos #

class PersonaPrivada{

    #cuenta
    //se definen cuales van a ser los atributos privados 
    constructor(name, age, alias, cuenta){
        this.name = name
        this.age = age
        this.alias = alias
        this.#cuenta = cuenta
    }

    pagar(){
        console.log("pago" + "-->" + this.#cuenta)
        console.log()
    }

    //metodos getters and setters

    get cuenta(){
        return this.#cuenta
    }

    set cuenta(cuenta){
        this.#cuenta = cuenta
    }
}

let persona4 = new PersonaPrivada("pepe", 10, "alias", "cuentas")

persona4.pagar()
persona4.cuenta = "nueva cuenta"

persona4.pagar()


//herencia 

class Animal{ //clase padre
    constructor(name, age){
        this.name = name
        this.age = age
    }

    sonido(){
        console.log("emitir sonido")
    }
}

//clase hija usamos la palabra reservada extends y la clase padre
class Perro extends Animal{

    sonido(){
        //super.sonido() <-- comportamiento del metodo del padre
        console.log("guau")
    }
    
    correr(){
        console.log("el perro corre")
    }
}

let perro1 = new Perro("pepe", 10)

perro1.correr()
perro1.sonido()


class Gato extends Animal{
    constructor(name, sexo){
        super(name)
        this.sexo = sexo
    }

}

let gato1 = new Gato("gato 1", "F")

//metodos estaticos 

class Matematicas{
    //colocamos antes del metodo la palabra reservada static --> no es necesario instanciar un objeto de la clase para usar el metodo
    static sumar(a, b){
        console.log(a + b)
    }
}

Matematicas.sumar(2, 4)





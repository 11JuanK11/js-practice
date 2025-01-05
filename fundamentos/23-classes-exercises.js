// 1. Crea una clase que reciba dos propiedades
class Clase1{
    constructor(valor1 = "valor1", valor2 = "valor2"){
        this.valor1 = valor1
        this.valor2 = valor2
    }

// 2. Añade un método a la clase que utilice las propiedades
    usarPropiedades(){
        console.log(`la suma de las propiedades es: ${this.valor1 + this.valor2}`)
    }

// 4. Añade un método estático a la primera clase
    static clases(){
        console.log("la clase se llama clase1")
    }

}

let clase1 = new Clase1(10, 20)




// 3. Muestra los valores de las propiedades e invoca a la función
console.log(clase1.valor1)
console.log(clase1.valor2)
clase1.usarPropiedades()



// 5. Haz uso del método estático

Clase1.clases()

// 6. Crea una clase que haga uso de herencia

class Clase2 extends Clase1{
    static clases(){
        console.log("esta clase se llama clase 2")
    }
}

// 7. Crea una clase que haga uso de getters y setters

class Clase3{
    #pepe
    #pepito
    constructor(pepe, pepito){
        this.#pepe = pepe
        this.#pepito = pepito
    }

    get pepe(){
        return this.#pepe
    }

    set pepito(pepito){
        this.#pepito = pepito
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

let clase3 = new Clase3("pepes", "pepitos")
console.log(clase3.pepe)
console.log(clase3.pepito)
clase3.pepito = "pepitos2"
console.log(clase3.pepito)

// 10. Sobrescribe un método de una clase que utilice herencia 

Clase2.clases()
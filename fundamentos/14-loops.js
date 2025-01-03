//for
/* 
    for (def variable; condicion){
        bloque de codigo
    }
*/

for(let i = 0; i < 5; i++){
    console.log(`hola numero: ${i+1}`)
}

const numbers = [1, 2, 3, 4, 5]

console.log()
for(let i = 0; i < numbers.length; i++ ){
    console.log(`Elemento con for: ${numbers[i]}`)
}
console.log()

//while
/*
    evalua la condicion antes
    def variable para la condicion antes del ciclo
    while(cond){
        bloque de codigo
    }
*/ 
let i = 0
while( i < 5 ){
    console.log(`Elemento con while: ${i}`)
    i++
}
console.log()

//do while
/*
    evalua la condicion despues del ciclo
    def variable para la condicion
    do{
        bloque de codigo
    }while(cond)
*/ 
i = 0
do{
    console.log(`Elemento con do-while: ${i}`)
    i++
}while(i < 5)
console.log()

//for of
/*
    for(let val of estructura){
        codigo
    }
*/
let array1 = [1, 2, 3, 4]
let set1 = new Set(["pepe1", 2, 1.9, true]) 
let map1 = new Map([
    ["clave", "valor"],
    [1, 10],
    [2, 20]
])

for(let valor of array1){
    console.log(valor)
}
console.log()


for(let valor of set1){
    console.log(valor)
}
console.log()


for(let valor of map1){
    console.log(valor)
}
console.log()

//Buenas practicas
/*
    Evitar ciclos infinitos
    usar break y continue
*/

//continue: se salta la iteracion actual y empieza en la siguiente
//break: se sale de la estructura 
for(let j = 0; j < 10; j++){
    if(j == 5){
        continue
    }else if(j == 7){
        break
    }
    console.log(j)
}
console.log()


let array1 = [], array2 = new Array()
console.log(array1)
console.log(array2)


array1 = [1, 2, 3, 4]
array2 = new Array(4)

array2[0] = 1
array2[1] = 1.9
array2[2] = true
array2[3] = "hola"

console.log(array1)
console.log(array2)

array1 = []
array1.push("hola")
array1.push("1022")
array1.push(123)
array1.push(0.9)

console.log(array1)

console.log(array1.pop())
console.log(array1)

console.log(array1.shift())
console.log(array1)

console.log(array1.unshift("primer", "segundo"))
console.log(array1)

array1 = []
array1.push("hola")
array1.push("1022")
array1.push(123)
array1.push(0.9)
console.log(array1.slice(1))
console.log(array1.slice(1,3))

array1 = [1, 2, 3, 4, 5]
console.log(array1.splice(1, 2, "nuevo"))
console.log(array1)






let set1 = new Set("pepe"), set2 = new Set(["pepe1", 2, 1.9, true])

console.log(set1)
console.log(set2)

set2.add("merengue")
console.log(set2)

console.log(set2.delete("merengue"))
console.log(set2)

console.log(set2.has("merengue"))

let array1 = Array.from(set2)
console.log(array1)
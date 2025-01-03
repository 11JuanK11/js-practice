let map1 = new Map(), map2

map2 = new Map([
    ["clave", "valor"],
    [1, 10],
    [2, 20]
])
console.log(map1)
console.log(map2)

map2.set("pepito", 100)
map2.set("pepito", 190)

console.log(map2.get(1))
console.log(map2.has("agua"))
console.log(map2.delete("pepito"))

console.log(map2.keys())
console.log(map2.values())
console.log(map2.entries())
console.log(map2.size)
console.log(map2)

map2.clear()
console.log(map2.size)
console.log(map2)

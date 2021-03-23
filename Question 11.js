//Letra A
let list = ["bar", "baz", "foo", "qux", "foo", "foo", "asd", "ffd", "baz"];

list.splice(0, 0, ('foo'))
list.splice(8, 0, ('foo'))
list.splice(10, 0, ('foo'))

console.log(list)
console.log("")

//Letra B
list.splice(0, 1)
list.splice(2, 1)
list.splice(3, 2)
list.splice(4, 1)
list.splice(5, 1)

console.log(list)

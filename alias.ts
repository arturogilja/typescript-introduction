type name = string
type age = number
type greeting = (name: name, age: age) => string

const sayHello: greeting = function (name, age) {
  return `Hello ${name}, you are ${age} years old.`
}

console.log(sayHello('Arturo Gil', 24)) //Hello Arturo Gil, you are 24 years old.

//Type union
type ID =  string | number

function findById(id: ID) {
  // Do stuff
}

findById('327t1gsubhin198273') //Valid
findById(23) //Valid
//findById(true) //Argument of type 'boolean' is not assignable to parameter of type 'ID'

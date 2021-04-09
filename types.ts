const fullName: string = "Arturo Gil"
const age: number = 24

function greeting(fullName: string): string {
	return `Hello ${fullName}`
}

console.log(greeting(fullName)) //Hello Arturo Gil
// console.log(greeting(age)) //Argument of type 'number' is not assignable to parameter of type 'string'.

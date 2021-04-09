import { User, Client, Admin } from './interfaces'

function printArray<T>(arr: T[]) : T[] {
  arr.forEach(element => {
    console.log(element)
  })
  return arr
}

printArray([1, 2, 3])

const client: Client = {
  email: 'john@gmail.com',
  password: 'oir3hafdguo32',
  friends: [],
  getFriends() {
    return []
  }
}

const admin: Admin = {
  email: 'john@gmail.com',
  password: 'oir3hafdguo32',
  permissions: ['read', 'write']
}

function printUser<T extends User>(user: T) : T {
  console.log(user)
  return user
}

printUser(admin) //Valid
printUser(client) //Valid
//printUser({ name: 'George' }) //Argument of type '{ name: string; }' is not assignable to parameter of type 'User'.


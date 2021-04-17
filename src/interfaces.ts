export interface User {
  email: string
  password: string
}

export interface Client extends User {
  friends: User[]
  getFriends: () => User[]
}

export interface Admin extends User {
  permissions: string[]
}

class ClientImplementation implements Client {
  public friends: User[]
  public email: string
  public password: string
  constructor (friends: User[], email: string, password: string) {
    this.friends = friends
    this.email = email
    this.password = password 
  }
  public getFriends() {
    return this.friends
  }
  public get greeting() {
    return 'My email is' + this.email
  }
}
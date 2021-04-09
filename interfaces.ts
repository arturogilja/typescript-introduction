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

interface Person {
    name: string
    age: string 
}

type PersonKeys = keyof Person
let myName: PersonKeys = 'name'
myName = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // исключить
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // оставить

let u1: UserKeysNoMeta1 = 'name'



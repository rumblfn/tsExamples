const isFetching: boolean = true
const int: number = 42
const float: number = 4.2
const num: number = 3e10
const str1: string = 'Hello'
const numberArray: number[] = [11, 1, 3, 4, 24, 8]
const numerArray2: Array<number> = [1, 23, 3]
const stringArray: Array<string> = ['13', '1', 'ads'] // string[]
const contact: [number, string] = [123, 'vlaa']
let variable: any = 42
variable = 'New Sttrting'
variable = []

function sayMyName2(name: string): void {
    console.log(name)
}

function hrowError(message:  string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

type Login = string
const login: Login = 'admin'
const login2: number = 2
type ID = string | number
const id1: ID = 1234
const i2: ID = '1234'

type SomeType = string | null | undefined

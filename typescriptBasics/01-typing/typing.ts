let myString: string

myString = 'This is a string'

//Try to assign a number to a String -> Error
// myString = 4

let anotherString = 'This is a string without :string'

//This will still resolve into a compile error
//anotherString = 4

let yetAnotherString;

yetAnotherString = 'This is a string'

//TypeScript does not know the type, therefore we don't get an error.
yetAnotherString = 5

// Other basic types

let aString: string
let aNumber: number
let aBoolean: boolean
let anArray: Array<string> //This is a generiy type
let anything: any //Any can be used if we don't know the actual type

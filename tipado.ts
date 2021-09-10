/**
 * type of datas in typescript.
 */
let nombre:string = 'Example' // Su valor es modificable
const edad = 39 // Su valor no se puede modificar.

let isVisible:boolean= true
isVisible = false

console.log(isVisible,edad,nombre)

//Arrays
let numbers:number[] = [1,2,3]
let names:string[] = ['Pedro','Juan']

let collectionsNumbers: Array<number> = [1,2,3,4]
let collectionsStrings: Array<string> = ['Pedro','Juan']

let types:boolean[] = [true,false];

//tipo tupla
let tuple:[number,string,boolean]

tuple = [23,'Manuel',true]

console.log(tuple,tuple[2])
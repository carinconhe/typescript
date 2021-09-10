function sumar(a:number,b:number):number{
    return a+b
}
const suma:number = sumar(2,5)
console.log(suma)

function mostrar(a:string):void{
    console.log("Function 1 "+a)
}

const mostrar2:string = (a:string):void=>{console.log(`Funcion 2 ${a}`)}
mostrar('Manuel');
mostrar2('Cami'); 
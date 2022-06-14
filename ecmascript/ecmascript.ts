// let & const

// console.log(seraQuePode)
let seraQuePode = '?'
console.log(seraQuePode)


let estaFrio = true

if(estaFrio){
    let acao = 'Colocar casaco'
    console.log(acao)
}
// console.log(acao)


const cpf: string = '123.456.007-89'

// cpf = '155.555.666-55'

console.log(cpf)

function somar(a: number, b: number): number {
    return a + b
}
console.log(somar(1,5))

const subtrair = (a: number, b: number): number => a - b
console.log(subtrair(1,5))

const saldacao = () => console.log('Olá!')
saldacao()

// const falarCom = pessoa: string => console.log('Olá ' + pessoa)
const falarCom = (pessoa: string) => console.log('Olá ' + pessoa)
falarCom('João')

// function normalComThis(){
//     console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis.bind({nome: 'José'})
// normalComThisEspecial()

// // contexto lexico
// console.log(this)
// const  arrowComThis = () => console.log(this)
// arrowComThis()

// const  arrowComThisEspecial = arrowComThis.bind({nome: 'Maria'})
// arrowComThisEspecial()

function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio)
    while(inicio > fim){
        inicio--
        console.log(inicio)
    }
}

contagemRegressiva()
contagemRegressiva(3)

//rest & spread
const numbers = [1, 10, 55, -5]

console.log(Math.max(...numbers))

const turmaA: string[] = ['Maria', 'João', 'José']
const turmaB: string[] = ['Priscila', 'Carla', ...turmaA, 'Fernanda']

console.log(turmaA)
console.log(turmaB)

function retornaArray(...args: number[]): number[]{
    return args
}
const numeros: number[] = retornaArray(5,6,8,1,22,79,23,589)
console.log(numeros)

console.log(retornaArray(...numbers))

// rest & spread (tupla)
const tupla: [number, string, boolean] = [1, 'abc', true]

function tuplaParam1(a:number, b:string, c:boolean): void{
    console.log(`1) ${a} ${b} ${c}`)
}
tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]): void{
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`) 
}
tuplaParam2(...tupla)

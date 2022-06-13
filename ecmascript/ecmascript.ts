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

function normalComThis(){
    console.log(this)
}
normalComThis()

const normalComThisEspecial = normalComThis.bind({nome: 'José'})
normalComThisEspecial()

// contexto lexico
console.log(this)
const  arrowComThis = () => console.log(this)
arrowComThis()

const  arrowComThisEspecial = arrowComThis.bind({nome: 'Maria'})
arrowComThisEspecial()


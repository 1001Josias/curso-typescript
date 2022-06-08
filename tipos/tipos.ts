const nome: string = 'João'
console.log(nome)

const idade: number = 30
console.log(idade)

const gostaDeSalada: boolean = true
console.log(gostaDeSalada)

// array
const listaDeCompra: string[] = ['feijão', 'arroz', 'açucar']
console.log(listaDeCompra)

// tupla
const testeTupla: [string, number, boolean] = ['gol quadrado', 4, true]
console.log(testeTupla)

// enum
enum Cor {
    azul,
    amarelo,
    preto,
    branco,
    cinza
}

let carro: any = 'bmw'
console.log(carro)
carro = {marca: 'bmw', ano: 2022, }
console.log(carro)

// funções

function retornaMeuNome(): string {
    // return idade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void{
    console.log('oi')
    // return nome
}

digaOi()

function multiplicar(numA: number, numB: number): number{
    return numA * numB
}

// console.log(multiplicar(10, '5'))
console.log(multiplicar(10, 5))

// tipo função

let calculo: (numA: number, numB: number) => number
// calculo = digaOi
// calculo()
// calculo = 1
// calculo = []
// calculo = '1'

calculo = multiplicar

console.log(calculo(10,3))

// objetos
let usuário: {nome: string, idade: number} = {
    nome: 'Fulano',
    idade: 30
}

// usuário = {}

// usuário = {
//     name: 'De Tal',
//     age: 500
// }

console.log(usuário)

usuário = {
    idade: 100,
    nome: 'Maria'
}

console.log(usuário)

// Desafio

// Alias
type Funcionarios = {
    supervisores: string[],
    baterPonto: (hora: number) => string
}

let funcionarios: Funcionarios = {
    supervisores: ['Maria', 'João', 'José', 'Marta'],
    baterPonto: (hora) => {
        if(hora <= 8){
            return 'Ponto normal'
        }else{
            return 'Fora do horário'
        }
    }
}


console.log(funcionarios.supervisores)
console.log(funcionarios.baterPonto(15))

// funcionarios = {}

let funcionarios2: Funcionarios = {
    supervisores: ['Fulano', 'De', 'Tal'],
    baterPonto: (hora) => {
        if(hora <= 8){
            return 'Ponto normal'
        }else{
            return 'Fora do horário'
        }
    }
}

console.log(funcionarios2.supervisores)
console.log(funcionarios2.baterPonto(2))

// Union Types

let nota: number | string

nota = 10

console.log(`Minha nota é ${nota}`)

nota = '10'

console.log(`Minha nota é ${nota}`)

// nota = true

if(typeof nota === 'number'){
    console.log('É um número!')
}else{
    console.log(typeof nota)
}

// never

function falhar(msg: string): never {
    throw new Error(msg)
}

type Produto = {
    nome: string,
    preco: number,
    validarProduto: () => void
}

const produtoA: Produto = {
    nome: 'Sabão',
    preco: 5,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falhar('Precisa ter um nome')
        }
        if(this.preco < 0){
            falhar('Preço inválido')
        }
    }
}

produtoA.validarProduto()


let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

// Desafio

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
correntista.contaBancaria.depositar(4)
console.log(correntista)

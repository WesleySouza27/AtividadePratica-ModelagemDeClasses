class ContaCorrente {
    conta: number
    nome: string
    saldo: number = 0

    constructor(conta: number, nome: string, saldo?: number) {
        this.conta = conta
        this.nome = nome
        this.saldo = saldo ?? 0
    }

    alterarNome(nome: string) {
        this.nome = nome
        console.log(`Nome da conta alterado para ${nome}`)
    }

    deposito(valor: number) {
        if (valor <= 0) {
            console.log('O valor de depósito deve ser positivo')
        }
        this.saldo += valor
        console.log(`Saldo atualizado: ${this.saldo}`)
    }

    saque(valor: number) {
        if (valor <= 0) {
            console.log('o valor de saque deve ser positivo')
        } else if (valor > this.saldo) {
            console.log('Saldo insuficiente')
        } else {
            this.saldo -= valor
            console.log(`Saldo atualizado ${this.saldo}`)
        }
    }
}

const conta01 = new ContaCorrente(1, 'wesley', 10000)
conta01.alterarNome('joão')
conta01.deposito(500)
conta01.saque(300)
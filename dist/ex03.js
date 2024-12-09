"use strict";
class ContaCorrente {
    constructor(conta, nome, saldo) {
        this.saldo = 0;
        this.conta = conta;
        this.nome = nome;
        this.saldo = saldo !== null && saldo !== void 0 ? saldo : 0;
    }
    alterarNome(nome) {
        this.nome = nome;
        console.log(`Nome da conta alterado para ${nome}`);
    }
    deposito(valor) {
        if (valor <= 0) {
            console.log('O valor de depósito deve ser positivo');
        }
        this.saldo += valor;
        console.log(`Saldo atualizado: ${this.saldo}`);
    }
    saque(valor) {
        if (valor <= 0) {
            console.log('o valor de saque deve ser positivo');
        }
        else if (valor > this.saldo) {
            console.log('Saldo insuficiente');
        }
        else {
            this.saldo -= valor;
            console.log(`Saldo atualizado ${this.saldo}`);
        }
    }
}
const conta01 = new ContaCorrente(1, 'wesley', 10000);
conta01.alterarNome('joão');
conta01.deposito(500);
conta01.saque(300);

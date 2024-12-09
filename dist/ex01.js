"use strict";
class Contador {
    constructor() {
        this.valor = 0;
    }
    zerar() {
        this.valor = 0;
    }
    incrementar() {
        this.valor++;
    }
    obterValor() {
        return this.valor;
    }
}
const contador = new Contador();
console.log(contador.obterValor());
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.incrementar();
console.log(contador.obterValor());
contador.zerar();
console.log(contador.obterValor());

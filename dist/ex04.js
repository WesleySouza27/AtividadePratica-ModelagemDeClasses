"use strict";
class Calculadora {
    constructor() {
        this.historico = ['HISTORICO DE OPERAÇÕES'];
    }
    somar(n1, n2) {
        const soma = n1 + n2;
        const resultado = `${n1} + ${n2} = ${soma}`;
        this.historico.push(resultado);
        return soma;
    }
    multiplicar(n1, n2) {
        const multiplica = n1 * n2;
        const resultado = `${n1} * ${n2} = ${multiplica}`;
        this.historico.push(resultado);
        return multiplica;
    }
    dividir(n1, n2) {
        const dividido = n1 / n2;
        const resultado = `${n1} / ${n2} = ${dividido}`;
        this.historico.push(resultado).toFixed(2);
        return dividido;
    }
    diminuir(n1, n2) {
        const diminuido = n1 - n2;
        const resultado = `${n1} - ${n2} = ${diminuido}`;
        this.historico.push(resultado);
        return diminuido;
    }
    obterHistorico() {
        return this.historico;
    }
}
const minhaCalculadora = new Calculadora();
minhaCalculadora.somar(5, 6);
minhaCalculadora.somar(10, 60);
minhaCalculadora.multiplicar(5, 9);
minhaCalculadora.multiplicar(15, 7);
minhaCalculadora.dividir(15, 7);
minhaCalculadora.dividir(50, 6);
minhaCalculadora.diminuir(15, 7);
minhaCalculadora.diminuir(85, 27);
console.log(minhaCalculadora.obterHistorico());

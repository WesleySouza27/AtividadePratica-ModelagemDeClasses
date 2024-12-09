"use strict";
class BombaCombustivel {
    constructor(tipoCombustivel, valorLitro, quantidaDeCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidaDeCombustivel = quantidaDeCombustivel;
    }
    abastecerPorValor(dinheiro) {
        if (dinheiro > 0 && (this.quantidaDeCombustivel / dinheiro > 0)) {
            const quantidadeLitros = (dinheiro / this.valorLitro);
            const atualizar = this.quantidaDeCombustivel -= quantidadeLitros;
            this.quantidaDeCombustivel = atualizar;
            console.log(`com R$: ${dinheiro} você abasteceu ${quantidadeLitros} litros de combustível`);
            console.log(`Total de combustível restante: ${this.quantidaDeCombustivel}`);
        }
        else {
            console.log('Valor ou quantidade de combustível insulficiente!');
        }
    }
    abastecerPorLitro(quantidaLitros) {
        if (this.quantidaDeCombustivel >= quantidaLitros) {
            const totalPagar = quantidaLitros * this.valorLitro;
            const atualizar = this.quantidaDeCombustivel -= quantidaLitros;
            this.quantidaDeCombustivel = atualizar;
            console.log(`o valor a pagar em ${quantidaLitros} litros foi de ${totalPagar}`);
            console.log(`Total de combustível restante: ${this.quantidaDeCombustivel}`);
        }
        else {
            console.log('quantidade de combustível insulficiente');
        }
    }
    alterarValor(novoValor) {
        if (novoValor > 0) {
            this.valorLitro = novoValor;
            console.log(`Valor do litro alterado! novo valor R$: ${this.valorLitro}`);
        }
        else {
            console.log('valor precisa ser positivo!');
        }
    }
    alterarCombustivel(combustivel) {
        this.tipoCombustivel = combustivel;
        console.log(`Tipo de combustível alterado com susseco para ${combustivel}`);
    }
    alterarQuantidadeCombustivel(quantidade) {
        if (quantidade > 0) {
            this.quantidaDeCombustivel = quantidade;
            console.log(`Alterada a quantidade de combustível para ${this.quantidaDeCombustivel}  litros`);
        }
        else {
            console.log('quantidade precisa ser positiva');
        }
    }
}
const postoShew = new BombaCombustivel('gasolinaComun', 6, 300);
postoShew.abastecerPorLitro(10);
postoShew.abastecerPorValor(200);
postoShew.alterarValor(7);
postoShew.alterarCombustivel('Etanol');
postoShew.alterarQuantidadeCombustivel(500);

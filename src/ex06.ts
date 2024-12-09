class Carro {
    consumoCombustivelKML
    quantidadeCombustivel: number = 0

    constructor(consumoCombustivelKML: number, quantidadeCombustivel: number) {
        this.consumoCombustivelKML = consumoCombustivelKML
        this.quantidadeCombustivel = quantidadeCombustivel
    }

    andar(distancia: number) {
        if(distancia > 0) {

            const litrosGastos = distancia / this.consumoCombustivelKML

            if(litrosGastos <= this.quantidadeCombustivel) {
                
                this.quantidadeCombustivel -= litrosGastos
                console.log(`Voce gastou ${(litrosGastos).toFixed(2)} litros e percorreu ${distancia} km, quantidade de combustivel restante ${(this.quantidadeCombustivel).toFixed(2)} litros`)
            } else {
                console.log(`Combustível insulficiente! você pode percorrer ate ${this.quantidadeCombustivel * this.consumoCombustivelKML} KM com o combustível atual.`)
            }

        } else {
            console.log('informe uma distância válida!')
        }
    }

    obterGasolina() {
        console.log(`Total de combustível disponível ${(this.quantidadeCombustivel).toFixed(2)} litros`)
    }

    adicionarGasolina(litros: number) {
        if (litros > 0) {
            this.quantidadeCombustivel += litros
            console.log(`${litros} litros de combustível abastecido com susseco! quantidade de combustível atual: ${(this.quantidadeCombustivel).toFixed(2)} litros`)
        } else {
            console.log('informe uma quantidade de litros válida!')
        }
    }
}


const meuFusca = new Carro(12, 150)
meuFusca.andar(59)
meuFusca.adicionarGasolina(50)
meuFusca.obterGasolina()
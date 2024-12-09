class bola {
    cor: string
    circunferencia: string
    material: string

    constructor(cor: string, circunferencia: string, material: string) {
        this.cor = cor
        this.circunferencia = circunferencia
        this.material = material
    }

    trocarCor(cor: string) {
        this.cor = cor
    }

    mostrarCor() {
        console.log(`a cor da bola é ${this.cor}`)
    }
}

const bolaDeVolei = new bola('branco', '60cm', 'couro')
bolaDeVolei.mostrarCor()
bolaDeVolei.trocarCor('amarela')
bolaDeVolei.mostrarCor()
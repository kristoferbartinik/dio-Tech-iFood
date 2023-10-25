function saldoRankeadas(vitorias, derrotas){
    

    if(vitorias <= 10){
        return "ferro"
    }else if ( vitorias >= 11 && vitorias <= 20 ){
        return "Broze"
    }else if ( vitorias >= 21 && vitorias <= 50){
        return "Prata"
    }else if ( vitorias >= 51 && vitorias <= 80){
        return "Ouro"
    }else if (vitorias >= 81 && vitorias <= 90){
        return "Diamante"
    }else if ( vitorias >=91 && vitorias <= 100){
        return "Lendário"
    }else {
        return "Imortal"
    }
}
let vitorias = 95
let derrotas = 23
let saldo = vitorias - derrotas
let resultado = saldoRankeadas(vitorias, derrotas)

console.log(`O Herói tem de saldo de: ${saldo} está no nível de ${resultado}`)
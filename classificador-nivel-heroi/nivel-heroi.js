let nomeHeroi = "Goku"
let xpHeroi = 10001

let nivelHeroi

if(xpHeroi < 1000){
    nivelHeroi = "Ferro"
}else if(xpHeroi >= 2000 && xpHeroi <= 7999 ){
    nivelHeroi = "Prata"
}else if(xpHeroi <= 8000 && xpHeroi >= 10000 ){
    nivelHeroi = "Ouro"
}else if(xpHeroi >= 10001){
    nivelHeroi = "Radiante"
}
console.log("O Herói de nome " +nomeHeroi+ " está com XP " +xpHeroi+ " está no nível de " +nivelHeroi)
let nomeHeroi = ("Digite o nome do heroi: ");
let xpDoHeroi = ("Digite a quantidade de XP do heroi: ");

let nivel;
const limites = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

for (let i = 0; i < limites.length; i++) {
    if (xpHeroi <= limites[i]) {
        nivel = niveis[i];
        break;
    }
}

nivel = nivel || "Radiante";
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${xpDoHeroi}`);

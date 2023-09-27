import { Arma } from './Arma';
import { Personagem } from "./Personagem";

const arma: Arma = new Arma();
arma.nome = "Cajado do PHP";
arma.dano = 100;
arma.elemento = "Fogo";
arma.peso = 10;
arma.tipo = "Cajado";
arma.valor = 1000;

const arma2: Arma = new Arma();
arma2.nome = "tambor de odin";
arma2.dano = 999;
arma2.elemento = "Divino";
arma2.peso = 20;
arma2.tipo = "Instrumento";
arma2.valor = 5000;

const personagem: Personagem = new Personagem();
personagem.nome = 'Edécio';
personagem.classe = 'Sacerdote';
personagem.raca = "Morto-vivo";
personagem.nivel = 50;
personagem.intelecto = 1_000_000;
personagem.vida = 100_000;
personagem.arma = arma;

const personagem2: Personagem = new Personagem();
personagem2.nome = "Gladimir";
personagem2.classe = 'Bardo';
personagem2.raca = 'Orc';
personagem2.nivel = 41;
personagem2.intelecto = 80;
personagem2.vida = 1_000_000;
personagem2.arma = arma2;

console.log(personagem);
console.log(personagem2);

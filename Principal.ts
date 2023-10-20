import Prompt from 'prompt-sync';
import { Arma } from './Arma';
import { Personagem } from "./Personagem";
import { Util } from './Util';

//TODO: https://abre.ai/metodos2
const teclado = Prompt();

const nome = teclado('Digite o nome do seu personagem: ');
const classe = teclado('Digite a classe: ');
const raca = teclado('Digite a raça:');
const personagem: Personagem = new Personagem(nome, classe, raca);



const arma: Arma = new Arma();
arma.nome = teclado('Digite o nome da arma que irá utilizar: ')
arma.dano = 1 + Math.round(Math.random() * 99);
arma.elemento = teclado('Digite o elemento da arma utilizada: ');
arma.peso = 1 + Math.round(Math.random() * 9);
arma.tipo = teclado('Digite o tipo da arma utilizada: ');
arma.valor = arma.dano + 10 + Math.round(Math.random() * 500);


personagem.arma = arma;

let continua = true;

while (continua) {

  console.log('============= MENU =============');
  console.log('| 0. Visualizar status         |')
  console.log('| 1. Entrar em batalha         |');
  console.log('| 2. Explorar                  |');
  console.log('| 3. Treinar ataque            |');
  console.log('| 4. Treinar defesa            |');
  console.log('| 9. Sair                      |');
  console.log('| ============================ |');

  const opcao: number = +teclado('Escolha uma ação: ')



  switch (opcao) {
    case 0:
      console.table(personagem)
      break;
    case 1:

      break;
    case 2:

      break;
    case 3:
      const horasTreino: number = +teclado("Treinar quantas horas? ")
      personagem.treinar(horasTreino);


      break;
    case 4:

      break;
    case 9:
      continua = false;
      break;

    default:
      break;
  }

}

function gerarInimigo() {
  const nomes = ["Edécio", "Gladimir", "Bruna", "Angelo", "Irapuã"]
  const classes = ["Mago", "Bruxo", "Arqueiro", "Guerreiro", "Padre"]
  const racas = ["Orc", "Elfo", "Morto-vivo", "Tauren", "Anão"]

  const armas = ['Cajado', 'Adaga', 'Espingarda', 'Arco-flecha', 'Espada']
  const tiposArma = ['Fogo', 'Agua', 'Vento', 'Coração']

  const inimigo: Personagem = new Personagem(
    nomes[Util.randomizar(0, nomes.length - 1)],
    classes[Util.randomizar(0, classes.length - 1)],
    racas[Util.randomizar(0, racas.length - 1)],
  )

  const arma: Arma = new Arma();
  arma.nome = armas[Util.randomizar(0, armas.length - 1)]
  arma.tipo = tiposArma[Util.randomizar(0, tiposArma.length - 1)]

  inimigo.arma = arma;

}
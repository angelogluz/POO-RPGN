import { Arma } from './Arma';
import { Status } from './Status';
import { Util } from './Util';

export class Personagem {

  nome: string = "";
  raca: string = "";
  classe: string = "";
  status: Status = new Status();
  arma: Arma = new Arma();

  constructor(nome: string, classe: string, raca: string) {
    this.nome = nome;
    this.raca = raca;
    this.classe = classe;

    this.status.nivel = 1 + Math.round(Math.random() * 9);
    this.status.intelecto = Math.round(1 + Math.random() * 400);
    this.status.vida = 1_000;
  }

  static estaticoMetodo() {

  }

  treinar(horasTreino: number): void {

    this.status.ataque += (Math.round(1 + Math.random() * 4)) * horasTreino;

    const dado: number = Util.randomizar(1, 100)
    const evoluiu = dado < 20;

    if (evoluiu) {
      this.status.stamina -= horasTreino * (this.status.staminaMaxima * 10 / 100)
      this.status.manaMaxima += (Math.round(1 + Math.random() * 4)) * horasTreino;
      this.status.vidaMaxima += (Math.round(1 + Math.random() * 4)) * horasTreino;
    }
  }

  atacar(oponente: Personagem): boolean {
    const dadoHit = Util.randomizar(1, 100);
    const hit: boolean = dadoHit > oponente.status.esquiva;

    if (hit) {
      const danoCausado = this.status.ataque + Util.randomizar(1, 3);
      const absorcaoDano = (oponente.status.defesa + oponente.status.armadura) / 3;
      let danoConsolidado = (danoCausado - absorcaoDano);

      if (danoConsolidado < 0) danoConsolidado = 0;


      oponente.status.vida -= danoConsolidado;
      oponente.contraAtaque(this)
    }
    return true;
  }

  contraAtaque(personagem: Personagem): boolean {

    return true;
  }
}


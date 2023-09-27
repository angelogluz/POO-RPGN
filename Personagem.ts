import { Arma } from './Arma';

export class Personagem {

  nome: string = "";
  nivel: number = 1; //1-100
  vida: number = 100; // 100 - ...
  ataque: number = 10; // 10 - ...
  defesa: number = 10; // 10 - ...
  raca: string = "";
  classe: string = "";
  stamina: number = 100; // 100-...
  mana: number = 100;
  poderDeAtaque: number = 10;
  intelecto: number = 10;
  armadura: number = 0;
  arma: Arma = new Arma();
}

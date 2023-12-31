export class Status {

  nivel: number = 1; //1-100
  vidaMaxima: number = 100; // 100 - ...
  vida: number = this.vidaMaxima; // 100 - ...
  ataque: number = 10; // 10 - ...
  defesa: number = 10; // 10 - ...
  staminaMaxima: number = 100; // 100-...
  stamina: number = this.staminaMaxima; // 100-...
  manaMaxima: number = 100;
  mana: number = this.manaMaxima;
  poderDeAtaque: number = 10;
  intelecto: number = 10;
  armadura: number = 0;
  esquiva: number = 10; // 0...100
}
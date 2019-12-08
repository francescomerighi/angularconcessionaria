export class Auto {
  marca: string;
  modello: string;
  targa: string;
  colore: string;
  annoUscita: number;

  constructor(marca: string, modello: string, targa: string, colore: string, annoUscita: number) {
    this.marca = marca;
    this.modello = modello;
    this.targa = targa;
    this.colore = colore;
    this.annoUscita = annoUscita;
  }

  getAutoCompleta() {
    return this.marca + ' ' + this.modello;
  }
}
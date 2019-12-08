import { Component, OnInit } from '@angular/core';
import { Auto } from '../auto/auto.model';

@Component({
  selector: 'app-concessionaria',
  templateUrl: './concessionaria.component.html',
  styleUrls: ['./concessionaria.component.css']
})
export class ConcessionariaComponent implements OnInit {

  concessionaria: Auto[];
  corrente: number;

  constructor() { }

  ngOnInit() {
    this.concessionaria = [];
    this.concessionaria.push(new Auto('Audi', 'A3', 'CD 590DA', 'Bianco', 2010));
    this.corrente = 0;
  }

  onNuovoClick() {
    this.concessionaria.push(new Auto('', '', '', '', null));
    this.corrente = this.concessionaria.length - 1;
  }

  onAutoClick(indice: number) {
    this.corrente = indice;
  } 

}
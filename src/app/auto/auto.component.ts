import { Component, OnInit, Input } from '@angular/core';
import { Auto } from './auto.model';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  @Input() auto: Auto;

  constructor() { }

  ngOnInit() {
  }

}
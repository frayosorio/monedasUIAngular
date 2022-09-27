import { Component, OnInit } from '@angular/core';
import { Moneda } from '../modelos/Moneda';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent implements OnInit {

  public monedas: Moneda[] = [];
  public columnas = [
    { name: 'Nombre', prop: 'moneda' },
    { name: 'Sigla', prop: 'sigla' },
    { name: 'Símbolo', prop: 'simbolo' },
    { name: 'Emisor', prop: 'emisor' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

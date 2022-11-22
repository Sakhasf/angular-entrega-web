import { Component, OnInit } from '@angular/core';
import { Web } from '../Interfaces/web';

@Component({
  selector: 'webs-list',
  templateUrl: './webs-list.component.html',
  styleUrls: ['./webs-list.component.scss']
})
export class WebsListComponent implements OnInit {
  webs : Web[] = [{
    consumoCPU: 100,
    consumoRAM: 2000,
    consumoGPU: 3000,
    consumoHDD: 4000,
    version: 2,
  },
  {
    consumoCPU: 5000,
    consumoRAM: 14000,
    consumoGPU: 5000,
    consumoHDD: 10000,
    version: 3,
  }
  ]

  constructor() {};

  ngOnInit(): void {}

}

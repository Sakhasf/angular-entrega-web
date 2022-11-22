import { Component, OnInit } from '@angular/core';
import { Server } from '../Interfaces/server';

@Component({
  selector: 'servers-list',
  templateUrl: './servers-list.component.html',
  styleUrls: ['./servers-list.component.scss']
})
export class ServersListComponent implements OnInit  {
  servers : Server[] = [{
    nombre: "Siu guarani",
    ip: "10.140.10.1",
    estado: "Online",
  },
  {
    nombre: "Def server",
    ip: "10.10.14.1",
    estado: "En mantenimiento",
  },
  {
    nombre: "mine server",
    ip: "10.20.15.1",
    estado: "Apagado",
  }
  ]

  constructor() {};

  ngOnInit(): void {
    
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServersListComponent } from '../servers-list/servers-list.component';
import { WebDataService } from '../web-data.service';

const URLS = "http;//localhost/servidores"

@Component({
  selector: 'web-create',
  templateUrl: './web-create.component.html',
  styleUrls: ['./web-create.component.scss']
})
export class WebCreateComponent implements OnInit {

  constructor(private webDataService : WebDataService, private router : Router, private http: HttpClient){}

  ngOnInit(): void {

  }

  webForm = new FormGroup({
    nombre: new FormControl(null),
    consumoCPU: new FormControl(0),
    consumoGPU: new FormControl(0),
    consumoRAM: new FormControl(0),
    consumoHDD: new FormControl(0),
    version: new FormControl(1),
    servidor: new FormControl(null)
  });

  createWeb(): void {
    if(this.webForm.value.nombre === null){
      throw new Error('El nombre es obligatorio para agregar una web');
    }
    if(this.webForm.value.servidor === null){
      throw new Error('La id del servidor no es valida');
    } else {
        try {
          this.webDataService.create(this.webForm.value);
          this.router.navigate(['webs']) .then(() => {window.location.reload()}) }
          catch {
             throw new Error('La id del servidor no es valida'); 
        }
    }
  }
}

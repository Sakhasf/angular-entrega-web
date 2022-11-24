import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorDataService } from '../servidor-data.service';

@Component({
  selector: 'server-create',
  templateUrl: './server-create.component.html',
  styleUrls: ['./server-create.component.scss']
})
export class ServerCreateComponent implements OnInit {

  constructor (private servidorDataService : ServidorDataService, private router:Router ) {}

  serverForm = new FormGroup({
    nombre: new FormControl(null),
    ip: new FormControl('Sin asignar'),
    estado: new FormControl('Desconocido'),
    web: new FormControl(null),
  });

    ngOnInit(): void {

    }

    createServer(): void {
      if(this.serverForm.value.nombre === null){
        throw new Error('El nombre es obligatorio para agregar un servidor');
      } else {
          this.servidorDataService.create(this.serverForm.value);
      }
      this.router.navigate(['/servers']) .then(() => {window.location.reload()});
    }
}






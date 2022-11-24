import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from './Interfaces/server';
import { enviroment } from 'src/enviroments/enviroment.prod';

const URLS = "https://servers-and-webs-api.onrender.com/servidores" //enviroment.apiUrl + 'servidores';

@Injectable({
  providedIn: 'root'
})
export class ServidorDataService {

  constructor( private http: HttpClient) { }

  public getAll(): Observable<Server[]>{
    return this.http.get<Server[]>(URLS);
  }
  public create(server:any): void{
    this.http.post<Server>(URLS,server).subscribe({
      next: data =>{
        console.log(data);
      },
      error : error => {
        console.log('hubo un error', error);
      }
    })
  }
}

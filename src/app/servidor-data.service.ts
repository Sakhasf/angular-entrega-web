import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from './Interfaces/server';

const URLS = "http://localhost:3000/servidores"

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

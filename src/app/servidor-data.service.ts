import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

}

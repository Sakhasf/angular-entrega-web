import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Web } from './Interfaces/web';

const URLW = "http://localhost:3000/webs"

@Injectable({
  providedIn: 'root'
})
export class WebDataService {

  constructor( private http: HttpClient) { }

  public getAll(): Observable<Web[]>{
    return this.http.get<Web[]>(URLW);
  }
}

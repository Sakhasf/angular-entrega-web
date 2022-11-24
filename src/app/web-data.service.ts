import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Web } from './Interfaces/web';
import { enviroment } from 'src/enviroments/enviroment.prod';
import { Router } from '@angular/router';

const URLW = enviroment.apiUrl + 'webs';

@Injectable({
  providedIn: 'root'
})
export class WebDataService {

  constructor( private http: HttpClient, private router : Router) { }

  public getAll(): Observable<Web[]>{
    return this.http.get<Web[]>(URLW);
  }
  public create(web:any): void{
    this.http.post<Web>(URLW,web).subscribe({
      next: data =>{
        console.log(data);
      },
      error : error => {
        console.log('hubo un error', error);
      }
    })

  }
}

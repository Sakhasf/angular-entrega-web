import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Web } from './Interfaces/web';
import { enviroment } from 'src/enviroments/enviroment.prod';

const URLW = "https://servers-and-webs-api.onrender.com/webs" //enviroment.apiUrl + 'webs';

@Injectable({
  providedIn: 'root'
})
export class WebDataService {

  constructor( private http: HttpClient) { }

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

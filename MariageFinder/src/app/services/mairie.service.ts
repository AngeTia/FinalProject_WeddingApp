import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mairie } from '../models/mairie.models';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MairieService {

  private readonly baseURL: string = 'http://localhost:8000/api/mairies';

  constructor(private httpClient: HttpClient) { }

  getMairieList(): Observable<Mairie[]>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Mairie[]>(this.baseURL, {headers});
  }

  createMairie(mairie: Mairie): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(`${this.baseURL}`, mairie);
  }

  getMairieById(id: number): Observable<Mairie>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Mairie>(`${this.baseURL}/${id}`);
  }

  updateMairie(id: number, mairie: Mairie): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, mairie);
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  }

  deleteMairie(id: number): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

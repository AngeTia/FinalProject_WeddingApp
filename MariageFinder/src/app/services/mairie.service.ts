import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mairie } from '../models/mairie.models';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MairieService {
  set(mairie: Mairie) {
    throw new Error('Method not implemented.');
  }

  private readonly baseURL: string = 'http://localhost:8000/api/mairies';

  constructor(private httpClient: HttpClient) { }

  getMairieList(): Observable<Mairie[]>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Mairie[]>(this.baseURL, {headers});
  }

  createMairie(mairie: Mairie): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(`${this.baseURL}/create`, mairie);
  }

  getMairieById(id: number): Observable<Mairie>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Mairie>(`${this.baseURL}/${id}`);
  }

  updateMairie(id: number, mairie: Mairie): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.put(`${this.baseURL}/update`, mairie, {headers});
  }

  deleteMairie(id: number): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

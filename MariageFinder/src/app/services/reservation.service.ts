import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly baseURL: string = "http://localhost:8000/api/reservation";

  constructor(private httpClient: HttpClient) { }

  getReservationList(): Observable<Reservation[]>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Reservation[]>(this.baseURL, {headers});
  }

  createReservation(reservation: Reservation): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(`${this.baseURL}`, reservation, {headers});
  }

  getEmployeeById(id: number): Observable<Reservation>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Reservation>(`${this.baseURL}/${id}`, {headers});
  }

  updateReservation(id: number, reservation: Reservation): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.put(`${this.baseURL}/${id}`, reservation, {headers});
  }

  deleteReservation(id: number): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.delete(`${this.baseURL}/${id}`, {headers});
  }
}

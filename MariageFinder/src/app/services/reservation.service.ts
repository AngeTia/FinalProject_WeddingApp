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
    return this.httpClient.post(`${this.baseURL}`, reservation);
  }

  getEmployeeById(id: number): Observable<Reservation>{
    return this.httpClient.get<Reservation>(`${this.baseURL}/${id}`);
  }

  updateReservation(id: number, reservation: Reservation): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, reservation);
  }

  deleteReservation(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

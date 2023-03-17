import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseURL = "http://localhost:8000/api/reservations";

  constructor(private httpClient: HttpClient) { }

  getReservationList(): Observable<Reservation[]>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Reservation[]>(this.baseURL, {headers});
  }

  createReservation(reservationData: any) {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(`${this.baseURL}/create`, reservationData, {headers});
  }

  getReservationById(id: number): Observable<Reservation>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<Reservation>(`${this.baseURL}/${id}`, {headers});
  }

  updateReservation(id: number): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.put(`${this.baseURL}/update/${id}`, {headers});
  }

  deleteReservation(id: number): Observable<Object>{
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`, {headers});
  }
}

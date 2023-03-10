import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mairie } from '../models/mairie.models';
import { HttpService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class MairieService {
  private apiUrl = '';

  constructor(private api: HttpService) { }

  getByName(nom: string): Observable<Mairie[]> {
    return this.api.get<Mairie[]>(`${this.apiUrl}?nom=${nom}`);
  }
}

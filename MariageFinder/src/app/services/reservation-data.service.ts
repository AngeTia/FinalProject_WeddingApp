
import { Injectable } from '@angular/core';
import { Mairie } from '../models/mairie.models';
@Injectable({
  providedIn: 'root'
})
export class ReservationDataService{
  mairieSelect:Mairie=<Mairie>{};

  set(mairie:Mairie){
    this.mairieSelect=mairie;
  }

  get(){
    return this.mairieSelect;
  }
}

import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../models/reservation.models';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit  {

  reservations!: Reservation[];

  constructor(private reservationService: ReservationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getReservation();
  }

  private getReservation(){
    this.reservationService.getReservationList().subscribe(data => {
      this.reservations= data;
    });
  }

  reservationDetails(id: number){
    this.router.navigate(['ReservationId', id]);
  }

  updateReservation(id: number){
    this.router.navigate(['updateReservation', id]);
  }

  deleteReservation(id: number){
    this.reservationService.deleteReservation(id).subscribe( data => {
      console.log(data);
      this.getReservation();
    })
  }
}

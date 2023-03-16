import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../../models/reservation.models';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  reservations!: Reservation[];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservation();
  }

  private getReservation(): void {
    this.reservationService.getReservationList().subscribe(data => {
      this.reservations = data;
    });
  }

  reservationDetails(id: number): void {
    this.reservationService.getReservationById(id).subscribe(() => {
      this.getReservation();
    });
  }

  updateReservation(id: number): void {
    this.reservationService.updateReservation(id).subscribe(() => {
      this.getReservation();
    });
  }

  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe(() => {
      this.getReservation();
    });
  }
}

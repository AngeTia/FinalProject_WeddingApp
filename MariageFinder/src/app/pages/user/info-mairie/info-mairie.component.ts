import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mairie } from 'src/app/models/mairie.models';
import { MairieService } from 'src/app/services/mairie.service';
import { ReservationDataService } from '../../../services/reservation-data.service';

@Component({
  selector: 'app-info-mairie',
  templateUrl: './info-mairie.component.html',
  styleUrls: ['./info-mairie.component.scss']
})
export class InfoMairieComponent implements OnInit {

  mairie: Mairie[] = [];
  filteredMairie: Mairie[] = [];
  searchValue: string = "";

  constructor(private mairieService: MairieService,
    private router: Router,
    private reservationDataService :ReservationDataService
    ) { }

  ngOnInit(): void {
    this.getMairie();
  }
  
  private getMairie() {
    this.mairieService.getMairieList().subscribe(data => {
      this.mairie = data;
      this.filteredMairie = data;
    });
  }

  mairieDetails(mairie: Mairie) {
    this.reservationDataService.set(mairie);
    this.router.navigate(['/mairiedetails']);
  }

  reservationSave(mairie: Mairie) {
    this.reservationDataService.set(mairie);
    this.router.navigate(['/enregistrer']);
  }


  filterMairie() {
    this.filteredMairie = this.mairie.filter(mairie =>
      mairie.nom.toLowerCase().includes(this.searchValue.toLowerCase())
      // || mairie.addresse.toLowerCase().includes(this.searchValue.toLowerCase())
      // || mairie.phone.toLowerCase().includes(this.searchValue.toLowerCase())
      // || mairie.email.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

}

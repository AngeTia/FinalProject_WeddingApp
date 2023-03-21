import { Component, OnInit } from '@angular/core';
import { Mairie } from 'src/app/models/mairie.models';
import { MairieService } from 'src/app/services/mairie.service';
import { ReservationDataService } from 'src/app/services/reservation-data.service';

@Component({
  selector: 'app-recherche-mairie',
  templateUrl: './recherche-mairie.component.html',
  styleUrls: ['./recherche-mairie.component.scss']
})
export class RechercheMairieComponent implements OnInit {
  nom!: string;
  mois!: string;
  mairies!: Mairie[];
  mairieGet!:Mairie;

  constructor(private mairieService: MairieService, private detailMairie: ReservationDataService) { }

  ngOnInit(): void {
    this.nom = '';
    this.mairies = [];
    this.mairieGet=this.detailMairie.get();
    console.log(this.mairieGet);
    console.log(this.mairieGet.nom);
  }

  onSubmit(): void {
  }

  getAllMairies(): void {
    this.mairieService.getMairieList()
      .subscribe((mairies: Mairie[]) => {
        this.mairies = mairies;
      });
  }
}

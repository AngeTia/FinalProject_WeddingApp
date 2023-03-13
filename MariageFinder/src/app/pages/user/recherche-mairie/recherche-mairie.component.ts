import { Component, OnInit } from '@angular/core';
import { Mairie } from 'src/app/models/mairie.models';
import { MairieService } from 'src/app/services/mairie.service';

@Component({
  selector: 'app-recherche-mairie',
  templateUrl: './recherche-mairie.component.html',
  styleUrls: ['./recherche-mairie.component.scss']
})
export class RechercheMairieComponent implements OnInit {
  nom!: string;
  mois!: string;
  mairies!: Mairie[];

  constructor(private mairieService: MairieService) { }

  ngOnInit(): void {
    this.nom = '';
    this.mairies = [];
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

import { Component, OnInit } from '@angular/core';
import { Mairie } from 'src/app/models/mairie.models';
import { MairieService } from 'src/app/services/mairie.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
  identifiant!:string;
  mairies!: Mairie[];

  constructor(private mairieService: MairieService) { }

  ngOnInit(): void {
    this.identifiant;
    this.mairies = [];
  }

  onSubmit(): void {}
}

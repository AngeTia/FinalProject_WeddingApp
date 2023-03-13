import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mairie } from 'src/app/models/mairie.models';
import { MairieService } from 'src/app/services/mairie.service';

@Component({
  selector: 'app-info-mairie',
  templateUrl: './info-mairie.component.html',
  styleUrls: ['./info-mairie.component.scss']
})
export class InfoMairieComponent implements OnInit {
  mairie!: Mairie[];

  constructor(private mairieService: MairieService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMairie();
  }

  private getMairie(){
    this.mairieService.getMairieList().subscribe(data => {
      this.mairie = data;
    });
  }

  mairieDetails(id: number){
    this.router.navigate(['MairieId', id]);
  }

  updateMairie(id: number){
    this.router.navigate(['updateMairie', id]);
  }

  deleteMairie(id: number){
    this.mairieService.deleteMairie(id).subscribe( data => {
      console.log(data);
      this.getMairie();
    })
  }
}

import { Component } from '@angular/core';
import { ReservationService } from '../../../services/reservation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationDataService } from 'src/app/services/reservation-data.service';
import { Mairie } from '../../../models/mairie.models';


@Component({
  selector: 'app-enregistrer',
  templateUrl: './enregistrer.component.html',
  styleUrls: ['./enregistrer.component.scss']
})
export class EnregistrerComponent {
  formRegister!: FormGroup;
  // notification empty
  isOk = -1;

  mairieGet!:Mairie;

  constructor(private svcApi: ReservationService, private fb: FormBuilder,
    private router: Router,
    private reservationDataSerice :ReservationDataService
    ) { }

  ngOnInit(): void {
    // permet de recuperer les données de la mairie
    this.mairieGet=this.reservationDataSerice.get();
    console.log(this.mairieGet);
    console.log(this.mairieGet.nom);

    // permet de creer le formulaire
    this.formRegister = this.fb.group({
      nomEpoux: ['', [ Validators.required]],
      prenomEpoux: ['', [ Validators.required]],
      nomEpouse: ['', [ Validators.required]],
      prenomEpouse: ['', [ Validators.required]],
      contact: ['', [ Validators.required] ],
      // dateReservation: ['', [ Validators.required]],
      dateMariage: ['', [ Validators.required]],
      filename: [null],
      path: [null],
      originalFilename: [null],
      file: [null],
      reservationStatus: [false],
      mairie: [this.mairieGet.id]
    });
  }
  // la methode submitForm() permet de recuperer les données du formulaire
  submitForm() {
    // table data qui contient les données du formulaire
    let data = {
      nomEpoux: "",
      prenomEpoux: "",
      nomEpouse: "",
      prenomEpouse: "",
      contact: "",
      // dateReservation: "",
      dateMariage: "",
      filename: null,
      path: null,
      originalFilename: null,
      file: null,
      reservationStatus: false,
      mairie: this.mairieGet.id,
      // Ajouter les données du formulaire dans la table data
      ...this.formRegister.value
    };
    console.log(data);

    // permet de verifier si le formulaire est valide et de passer à la page suivante
    if (this.formRegister.valid) {
      // request create
      this.svcApi.createReservation(data).subscribe(
        (response: any) => {
          localStorage.setItem('reservation', JSON.stringify(data));
          this.isOk = response.code == 200 ? 1 : 0;
          this.router.navigate(['/recu']);
          if (this.isOk) {
            this.formRegister.reset();
          }
        },
        error => console.log(`Error ${error}`)
      );
    }
  }

}

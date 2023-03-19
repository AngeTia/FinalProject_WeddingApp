import { Component } from '@angular/core';
import { ReservationService } from '../../../services/reservation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enregistrer',
  templateUrl: './enregistrer.component.html',
  styleUrls: ['./enregistrer.component.scss']
})
export class EnregistrerComponent {
  formRegister!: FormGroup;
  // notification empty
  isOk = -1;

  constructor(private svcApi: ReservationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    // Init form
    this.formRegister = this.fb.group({
      nomEpoux: ['', [ Validators.required]],
      prenomEpoux: ['', [ Validators.required]],
      nomEpouse: ['', [ Validators.required]],
      prenomEpouse: ['', [ Validators.required]],
      contact: ['', [ Validators.required] ],
      dateReservation: ['', [ Validators.required]],
      dateMariage: ['', [ Validators.required]],
      filename: [null],
      path: [null],
      originalFilename: [null],
      file: [null],
      reservationStatus: [false],
      mairie: [null]
    });
  }

  submitForm() {
    let data = {
        nomEpoux: "",
        prenomEpoux: "",
        nomEpouse: "",
        prenomEpouse: "",
        contact: "",
        dateReservation: "",
        dateMariage: "",
        filename: null,
        path: null,
        originalFilename: null,
        file: null,
        reservationStatus: false,
        mairie: null,

      ...this.formRegister.value
    };
    console.log(data);
    if (this.formRegister.valid) {
      // request create
      this.svcApi.createReservation(data).subscribe(
        (response: any) => {
          // if created = 1 or If error error = 0
          this.isOk = response.code == 200 ? 1 : 0;
          this.router.navigate(['/recu']);
          if (this.isOk) {
            this.formRegister.reset(); // form.reset();
          }
        },
        error => console.log(`Error ${error}`)
      );
    }
  }

}

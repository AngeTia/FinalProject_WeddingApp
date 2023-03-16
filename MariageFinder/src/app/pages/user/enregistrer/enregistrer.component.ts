import { Component } from '@angular/core';
import { ReservationService } from '../../../services/reservation.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enregistrer',
  templateUrl: './enregistrer.component.html',
  styleUrls: ['./enregistrer.component.scss']
})
export class EnregistrerComponent {
  formRegister!: FormGroup;
  // notification empty
  isOk = -1;

  constructor(private svcApi: ReservationService, private fb: FormBuilder) { }

  ngOnInit(): void {

    // Init form
    this.formRegister = this.fb.group({
      nom: [''],
      prenom: [''],
      contact: ['', [ Validators.required] ],
    });
  }

  submitForm() {

    if (this.formRegister.valid) {
      // request create
      this.svcApi.createReservation(this.formRegister.value).subscribe(
        (response: any) => {
          // if created = 1 or If error error = 0
          this.isOk = response.code == 200 ? 1 : 0;
          if (this.isOk) {
            this.formRegister.reset(); // form.reset();
          }
        },
        error => console.log(`Error ${error}`)
      );
    }
  }

  createReservation() {
    if (this.formRegister.valid) {
      this.svcApi.createReservation(this.formRegister.value).subscribe(
        (response: any) => {
          this.isOk = response.code == 200 ? 1 : 0;
          if (this.isOk) {
            this.formRegister.reset();
          }
        },
        error => console.log(`Error ${error}`)
      );
    }
  }

}

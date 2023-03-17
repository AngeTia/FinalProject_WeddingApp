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
      nom: [''],
      prenom: [''],
      contact: ['', [ Validators.required] ],
    });
  }

  submitForm() {
    let data = {
      date: "iivii",
      time: "iviuviuvuivu",
      payementStatus: false,
      payementDate: "iivyi",
      mairie: null,
      CheckFolder: [],

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

import { Component } from '@angular/core';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.component.html',
  styleUrls: ['./recu.component.scss']
})
export class RecuComponent {
  data!: any
  constructor() { }

  ngOnInit(): void {
    this.data=JSON.parse(localStorage.getItem('reservation') as string);
    console.log(this.data);
    // Pour supprimer la reservation en localStorage
    localStorage.removeItem('reservation');
  }
  // la methode printPage() permet d'imprimer la page
  printPage() {
    window.print();
  }

}

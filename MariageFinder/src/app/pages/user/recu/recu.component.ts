import { Component } from '@angular/core';

@Component({
  selector: 'app-recu',
  templateUrl: './recu.component.html',
  styleUrls: ['./recu.component.scss']
})
export class RecuComponent {
   data: any
  constructor() { }

  ngOnInit(): void {
    this.data=localStorage.getItem('reservation');
    console.log(this.data);
    // Pour supprimer la reservation en localStorage
    // localStorage.removeItem('reservation');
  }

}

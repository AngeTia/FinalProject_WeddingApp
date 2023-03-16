import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/user/accueil/accueil.component';
import { InfoMairieComponent } from './pages/user/info-mairie/info-mairie.component';
import { PaiementComponent } from './pages/user/paiement/paiement.component';
import { RechercheMairieComponent } from './pages/user/recherche-mairie/recherche-mairie.component';
import { RecuComponent } from './pages/user/recu/recu.component';
import { ReservationComponent } from './pages/admin/reservation/reservation.component';
import { VerificationComponent } from './pages/user/verification/verification.component';
import { ReclamationComponent } from './pages/user/reclamation/reclamation.component';
import { ContactComponent } from './pages/user/contact/contact.component';
import { EnregistrerComponent } from './pages/user/enregistrer/enregistrer.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'recherche', component: RechercheMairieComponent },
  { path: 'info', component: InfoMairieComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'recu', component: RecuComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'reclamation', component: ReclamationComponent},
  { path: 'enregistrer', component: EnregistrerComponent},
  { path: 'recu', component: RecuComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

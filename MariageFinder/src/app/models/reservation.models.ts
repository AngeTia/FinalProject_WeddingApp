export interface Reservation {
  id: number;
  mairie_id: number;
  nom: string;
  prenom: string;
  contact: string;
  date: string;
  time: string;
  payement_status: boolean;
  payement_date: number;
}

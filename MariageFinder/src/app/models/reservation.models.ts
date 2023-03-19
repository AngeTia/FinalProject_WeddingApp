export interface Reservation {
  id: number;
  mairie_id: number;
  nomEpoux: string;
  prenomEpoux: string;
  nomEpouse: string;
  prenomEpouse: string;
  contact: string;
  date: string;
  time: string;
  reservations_status: boolean;
  payement_date: number;
}

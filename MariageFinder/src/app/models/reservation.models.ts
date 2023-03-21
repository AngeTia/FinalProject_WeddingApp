export interface Reservation {
  id: number;
  nomEpoux: string;
  prenomEpoux: string;
  nomEpouse: string;
  prenomEpouse: string;
  contact: string;
  dateReservation: string;
  dateMariage: string;
  filename: string;
  path: string;
  originalFilename: string;
  file: string;
  reservations_status: boolean;
  mairie: number;
}

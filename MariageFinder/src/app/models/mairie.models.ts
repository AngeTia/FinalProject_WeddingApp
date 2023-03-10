export interface Mairie {
  id: number;
  nom: string;
  adresse: string;
  codePostal: string;
  ville: string;
  telephone: string;
  email: string;
  siteWeb: string;
  horaires: string;
  services: string[];
}

export interface MairieSearchResult {
  id: number;
  nom: string;
  adresse: string;
  codePostal: string;
  ville: string;
}

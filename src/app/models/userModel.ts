import { Resultat } from './resultat.model';

export class User {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  address: string;
  role: string;
  resultats: Resultat[];
  moyenne: number;

  constructor(
    nom: string = '',
    prenom: string = '',
    email: string = '',
    password: string = '',
    address: string = '',
    role: string = 'user',
    resultats: Resultat[] = [],
    moyenne: number = 0
  ) {
    (this.nom = nom),
      (this.prenom = prenom),
      (this.email = email),
      (this.password = password),
      (this.address = address),
      (this.role = role);
    this.resultats = resultats;
    this.moyenne = moyenne;
  }
}

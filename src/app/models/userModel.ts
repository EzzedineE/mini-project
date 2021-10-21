export class User {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  address: string;
  role: string;

  constructor() {
    (this.nom = ''),
      (this.prenom = ''),
      (this.email = ''),
      (this.password = ''),
      (this.address = '');
    this.role = 'user';
  }
}

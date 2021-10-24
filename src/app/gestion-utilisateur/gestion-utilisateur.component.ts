import { Component, OnInit } from '@angular/core';
import { User } from '../models/userModel';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css'],
})
export class GestionUtilisateurComponent implements OnInit {
  Users: User[];

  constructor(private services: UserService) {}

  ngOnInit(): void {
    this.Users = this.services.getusers();
  }

  supprimer(i: number) {
    if (confirm('voulez vous supprimer')) {
      this.Users.splice(i, 1);
      localStorage.setItem('utilisateurs', JSON.stringify(this.Users));
    }
  }
}

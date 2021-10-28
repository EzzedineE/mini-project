import { Component, OnInit } from '@angular/core';
import { Resultat } from '../models/resultat.model';
import { User } from '../models/userModel';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css'],
})
export class ResultatComponent implements OnInit {
  users: User[];
  titre: string = 'quizz';
  min: any;
  constructor(private services: UserService) {}

  ngOnInit(): void {
    this.users = this.services.getusers();
    for (let i = 0; i < this.users.length; i++) {
      if (30 < this.users[i].moyenne && this.users[i].moyenne <= 60) {
        this.min = 'orange';
      } else if (0 < this.users[i].moyenne && this.users[i].moyenne < 30) {
        this.min = 'red';
      } else {
        this.min = 'green';
      }
    }
  }
}

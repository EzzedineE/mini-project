import { Injectable } from '@angular/core';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // verifier email existant
  verifEmail(email: string) {
    const users = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email) {
        return true;
      }
    }
    return false;
  }

  // ajouter utilisateur
  ajoutUser(user: User) {
    let users = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    users.push(user);
    localStorage.setItem('utilisateurs', JSON.stringify(users));
  }

  // save utilisateur
  setuser(user: User) {
    localStorage.setItem('userConecter', JSON.stringify(user));
  }

  // avoir utilisateur
  getuser() {
    return JSON.parse(localStorage.getItem('userConecter') || 'null');
  }

  // s'identifier
  identifier(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    for (var i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == password) {
        return users[i];
      }
    }
    return null;
  }
}

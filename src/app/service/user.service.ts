import { Injectable } from '@angular/core';
import { Resultat } from '../models/resultat.model';
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
  getOneUser(i: number) {
    const users = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    return users[i];
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
  setusers() {
    localStorage.setItem('utilisateurs', JSON.stringify(User));
  }

  // avoir utilisateur
  getuser() {
    return JSON.parse(localStorage.getItem('userConecter') || 'null');
  }
  getusers() {
    return JSON.parse(localStorage.getItem('utilisateurs') || 'null');
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
  // deconection
  logout() {
    localStorage.removeItem('userConecter');
  }
  modifier(i: number, user: User) {
    const users = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    users.splice(i, 1, user);
    localStorage.setItem('utilisateurs', JSON.stringify(users));
  }

  ajoutResultat(email: string, resultat: Resultat) {
    const users = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email) {
        users[i].resultats.push(resultat);
        break;
      }
    }
    localStorage.setItem('utilisateurs', JSON.stringify(users));
  }
}

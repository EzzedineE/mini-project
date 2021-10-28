import { Injectable } from '@angular/core';
import { Quizz } from '../models/quizz';
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
  verifQuizExist(resultats: Resultat[], quiz: Quizz): boolean {
    for (let i = 0; i < resultats.length; i++) {
      const resultat = resultats[i];
      if (resultat.quiz.titre == quiz.titre) {
        return true;
      }
    }
    return false;
  }
  ajoutResultat(email: string, resultat: Resultat): boolean {
    const users = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email) {
        if (this.verifQuizExist(users[i].resultats, resultat.quiz)) {
          return false;
        }
        const resultats = users[i].resultats;
        let moy = 0;
        for (let j = 0; j < resultats.length; j++) {
          moy += resultats[j].note;
        }
        moy /= resultats.length;
        users[i].moyenne = moy;
        users[i].resultats.push(resultat);
        break;
      }
    }
    localStorage.setItem('utilisateurs', JSON.stringify(users));
    return true;
  }

  // verifier email existant
  // verifQuestion() {
  //   const userConecter = JSON.parse(
  //     localStorage.getItem('userConecter') || '[]'
  //   );
  //   const quizz = JSON.parse(localStorage.getItem('quizz') || '[]');
  //   for (let j = 0; j < quizz.length; j++) {
  //     for (let i = 0; i < userConecter.length; i++) {
  //       if (
  //         userConecter[i].resultats.quiz.questions.question ==
  //         quizz[j].questions.question
  //       ) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // }
}

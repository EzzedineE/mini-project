import { Injectable } from '@angular/core';
import { Quizz } from '../models/quizz';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  add(quizz: Quizz) {
    const Quizz1 = JSON.parse(localStorage.getItem('quizz') || '[]');
    Quizz1.push(quizz);
    localStorage.setItem('quizz', JSON.stringify(Quizz1));
  }
  getquizz() {
    return JSON.parse(localStorage.getItem('quizz') || '[]');
  }

  constructor() {}
}

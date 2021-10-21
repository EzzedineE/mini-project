import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Quizz } from '../models/quizz';
import { QuizzService } from '../service/quizz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  chercher: string = '';
  quizz: any;
  QuizzService: any;

  delete(i: number) {
    if (confirm('voulez vous supprimer')) {
      this.quizz.splice(i, 1);
      localStorage.setItem('localArticle', JSON.stringify(this.quizz));
    }
  }

  constructor(private quizzservice: QuizzService) {}
  ngOnInit(): void {
    this.quizz = this.quizzservice.getquizz();
  }
}

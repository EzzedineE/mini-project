import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Quizz } from '../models/quizz';
import { QuizzService } from '../service/quizz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  quizz: any;
  QuizzService: any;

  reponseValider() {
    this.quizz = this.quizzservice.getquizz();
    for (let i = 0; i < this.quizz.length; i++) {}
  }

  constructor(private quizzservice: QuizzService) {}
  ngOnInit(): void {
    console.log(this.quizz);
    this.quizz = this.quizzservice.getquizz();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Quizz } from '../models/quizz';
import { QuizzService } from '../service/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  quizz: FormGroup;

  get reponses() {
    return this.quizz.get('reponses') as FormArray;
  }
  addReponse() {
    this.reponses.push(new FormControl('', [Validators.required]));
  }
  getOneReponse(i: number) {
    return this.reponses.at(i).value;
  }
  bonneReponse(i: number) {
    this.quizz.get('bonnereponse')?.setValue(i);
  }
  supprimerReponse(i: number) {
    this.reponses.controls.splice(i, 1);
  }
  add() {
    if (this.quizz.controls.bonnereponse.value !== null) {
      this.quizzservice.add(this.quizz.value);
      this.router.navigate(['/']);
    } else {
      this.toastr.error('entre la bonne reponse');
    }
  }

  constructor(
    private quizzservice: QuizzService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.quizz = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      question: new FormControl('', [Validators.required]),
      bonnereponse: new FormControl(null),
      reponses: new FormArray([new FormControl('', [Validators.required])]),
    });
  }

  errorReponse(i: number) {
    const oneReponse = this.reponses.at(i);
    return oneReponse.touched && oneReponse.hasError('required');
  }
}

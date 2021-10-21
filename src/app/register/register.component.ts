import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/userModel';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new FormGroup({
    nom: new FormControl('ezzedine', [Validators.required]),
    prenom: new FormControl('elechi', [Validators.required]),
    email: new FormControl('ezzedine.elechi@gmail.com', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('123456789', [Validators.required]),
    address: new FormControl('105 impass el echi la marsa', [
      Validators.required,
    ]),
  });

  enregistrement() {
    if (this.user.valid) {
      if (this.services.verifEmail(this.user.value.email)) {
        this.toastr.error('E-mail Existant', 'error');
      } else {
        const newUser = this.user.value;
        newUser.role = 'user';
        this.services.ajoutUser(newUser);
        this.router.navigate(['login']);
      }
    }
  }

  constructor(
    private services: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {}
}

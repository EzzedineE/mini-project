import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';
import { User } from '../models/userModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  conectedUser = new FormGroup({
    email1: new FormControl('ezzedine.elechi@gmail.com'),
    password1: new FormControl('123456789'),
  });

  // s'identifier
  identifier() {
    const login = this.services.identifier(
      this.conectedUser.value.email1,
      this.conectedUser.value.password1
    );
    if (login != null) {
      this.services.setuser(login);
      this.router.navigate(['']);
    } else {
      this.toastr.error('verrifier votre email ou votre mot de passe');
    }
  }

  constructor(
    private services: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
}

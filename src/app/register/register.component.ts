import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    role: new FormControl('user'),
  });

  enregistrement() {
    if (this.user.valid) {
      if (this.services.verifEmail(this.user.value.email)) {
        this.toastr.error('E-mail Existant', 'error');
      } else {
        const newUser = this.user.value;
        newUser.role = 'user';
        newUser.resultats = [];
        this.services.ajoutUser(newUser);
        this.router.navigate(['login']);
      }
    }
  }

  constructor(
    private services: UserService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {}
}

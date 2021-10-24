import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/userModel';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css'],
})
export class ModifierComponent implements OnInit {
  i: number;
  user: User;
  userForm: FormGroup;

  role(e: any) {
    if (e.target.checked) {
      this.user.role = 'admin';
    } else {
      this.user.role = 'user';
    }
  }

  save() {
    const verif = this.userForm.valid;
    if (verif) {
      const saveUser = this.userForm.value;
      saveUser.role = this.user.role;
      saveUser.resultats = [];
      if (this.i) {
        this.services.modifier(this.i, saveUser);
        let message = this.toastr.success('Modification valider').onHidden;
        message.subscribe(() => {
          this.router.navigate(['/gestion']); //res
        });
      } else {
        if (this.services.verifEmail(this.userForm.value.email)) {
          this.toastr.error('E-mail Existant', 'error');
        } else {
          this.services.ajoutUser(saveUser);
          this.toastr.success('Ajout valider valider');
          this.router.navigate(['/gestion']);
        }
      }
    }
  }
  constructor(
    private services: UserService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.user = JSON.parse(localStorage.getItem('utilisateurs') || '[]');
    this.i = this.route.snapshot.params['id'];

    this.user = new User(); //add case

    if (this.i) {
      //edit case
      this.user = this.services.getOneUser(this.i);
    }

    this.userForm = new FormGroup({
      nom: new FormControl(this.user.nom, [Validators.required]),
      prenom: new FormControl(this.user.prenom, [Validators.required]),
      email: new FormControl(this.user.email, [
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        Validators.required,
      ]),
      password: new FormControl(this.user.password, [Validators.required]),
      address: new FormControl(this.user.address, [Validators.required]),
    });
  }
}

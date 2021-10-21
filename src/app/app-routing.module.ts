import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './gardes/admin.guard';
import { GardeGuard } from './gardes/garde.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuizzComponent } from './quizz/quizz.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'quizz',
    component: QuizzComponent,
    canActivate: [GardeGuard, AdminGuard],
  },
  { path: '', component: HomeComponent, canActivate: [GardeGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

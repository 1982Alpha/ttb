import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftComponent } from './left/left.component';
import { LoginComponent } from './login/login.component';
import { MiddleComponent } from './middle/middle.component';
import { RegisterComponent } from './register/register.component';
import { RightComponent } from './right/right.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component:RightComponent},
  {path: 'left', component:RightComponent},
  {path: 'right', component:LeftComponent},
  {path: 'middle', component:MiddleComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signUp', component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

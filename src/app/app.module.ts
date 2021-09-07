import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { MiddleComponent } from './middle/middle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MathsService } from './services/maths.service';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DbservService } from './services/dbserv.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    RightComponent,
    LeftComponent,
    MiddleComponent,
    RegisterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,FormsModule,ReactiveFormsModule,HttpClientModule,
  ],
  providers: [MathsService,DbservService],
  bootstrap: [AppComponent]
})
export class AppModule { }

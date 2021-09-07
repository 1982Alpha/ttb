import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  countryList=[
    {"countryname":"India"},
    {"countryname":"USA"}, 
    {"countryname":"England"}, 
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myForm:NgForm){

    console.log(myForm)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbservService } from '../services/dbserv.service';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers:[MathsService]
})
export class RightComponent implements OnInit {
      
      userForm:FormGroup;
      myData:any=[];
     
  constructor(public _maths:MathsService,private _dbServ :DbservService) { }

  ngOnInit(){
    this.userForm= new FormGroup({
      'firstname': new FormControl(null,Validators.required ),
      'lastname': new FormControl(null),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      // 'gender': new FormControl('female'),
      // 'isMarried': new FormControl(null),
      // 'country': new FormControl(null),
      // 'city': new FormControl(null),
      // 'street': new FormControl(null),
      // 'pincode': new FormControl(null),
    });
    }
    onpush(){
      const firstname=this.userForm.get('firstname')?.value;
      const lastname=this.userForm.get('lastname')?.value;
      const email =this.userForm.get('email')?.value;

           this.myData.push(
             {
              firstname:firstname,
              lastname:lastname,
              email:email
             }
           )        
         
    }
  onSave(){
    this._dbServ.savedata(this.myData).subscribe
    (sub=>{
      console.log(sub);    
  },
  error=>{
   console.log(error)
  });
}
}
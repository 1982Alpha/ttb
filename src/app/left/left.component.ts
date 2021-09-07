import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { take } from 'rxjs-compat/operator/take';
import { MathsService } from '../services/maths.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  @Input() subjectChild: any;
    
    constructor(private router:Router,public _maths:MathsService) { }

  ngOnInit(): void {

    const myobs$= new Observable(obs=>
      {
        console.log("Start Observable");
        obs.next('100');
      }
    );
    myobs$.subscribe(sub=>{
      console.log(sub)
    });
    }
  gotoRightPage(){
    this.router.navigate(['/left']);  
  }
}

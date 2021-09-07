import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'vpaproject';
  subjectParent:object=[
    { id:1, name: 'tamil'},
    { id:2, name: 'English'},
    { id:3, name: 'Maths'},
    { id:4, name: 'Science'},
    { id:5, name: 'S.Science'},
  ]
  ngOnInit(){
}
}

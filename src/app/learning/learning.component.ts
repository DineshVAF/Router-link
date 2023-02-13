import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

num1:number=10;
num2:number=20;

placeholder:string='Enter the Value';

name:string="UI GEMS";

disabled:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}

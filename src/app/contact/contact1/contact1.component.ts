import { Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component implements 
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  

  displayChild: boolean = false;

  constructor() { 
     console.log("Contact1Component: Constructor");
  }
  ngOnInit(): void {
    console.log("Contact1Component: OnInit");
  }


  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log("Contact1Component: OnChanges");
  }

 

  ngDoCheck() {
    console.log("Contact1Component: DoCheck");
  }

  ngAfterContentInit() {
    console.log("Contact1Component: AfterContentInit");
  }

  ngAfterContentChecked() {
  console.log("Contact1omponent:AfterContentChecked");
  }

  ngAfterViewInit() {
  console.log("Contact1Component:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("Contact1Component:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("Contact1Component:OnDestroy");
  }
}



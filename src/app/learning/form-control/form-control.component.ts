import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  email = new FormControl("dinesh@gmail.com", [Validators.required, Validators.minLength(3), Validators.maxLength(12)]);
  isShow: boolean = false;
  fg: FormGroup | any;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: ['', [Validators.required] ]
    })
  }
  showemail() {
    console.log('valid', this.email.errors);
    console.log('email', this.email.valid);
  }

  add() {
    this.isShow = true;
    this.fg.addControl('username', new FormControl('Test'));
  }
  remove() {
    this.isShow = false;
    this.fg.removeControl('username');
  }
  onsubmit() {
    console.log('value', this.fg.value);
    console.log('valid', this.fg.valid);
  }
  ngOnInit(): void {
    // this.fg = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('asdf', Validators.required)
    // });
    this.fg.valueChanges.subscribe((formdata: any) => {
      console.log(formdata);
    })
    this.email.statusChanges.subscribe(show => {
      console.log(show);
    })

  }

}

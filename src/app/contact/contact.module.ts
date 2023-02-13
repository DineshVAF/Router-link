import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { Contact1Component } from './contact1/contact1.component';
import { Contact2Component } from './contact2/contact2.component';


@NgModule({
  declarations: [
    ContactComponent,
    Contact1Component,
    Contact2Component
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }

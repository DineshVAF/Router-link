import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { Contact1Component } from './contact1/contact1.component';
import { Contact2Component } from './contact2/contact2.component';

const routes: Routes = [
  { path: '', component: ContactComponent },
{path:'contact1',component:Contact1Component},
{path:'contact2',component:Contact2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

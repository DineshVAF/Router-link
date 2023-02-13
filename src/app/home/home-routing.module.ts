import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';

const routes: Routes = [
  { path: '', component: HomeComponent,children:[
{ path: 'home1', component: Home1Component },
{ path: 'home2', component: Home2Component },
{ path: 'home3', component: Home3Component },
{ path: 'home4', component: Home4Component },
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

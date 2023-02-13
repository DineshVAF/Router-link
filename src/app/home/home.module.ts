import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';


@NgModule({
  declarations: [
    HomeComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
   ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ConditiontaskComponent } from './conditiontask/conditiontask.component';
import { LearningComponent } from './learning/learning.component';
import { FormControlComponent } from './learning/form-control/form-control.component';
import { FormTaskComponent } from './learning/form-task/form-task.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ConditiontaskComponent,
    LearningComponent,
    FormControlComponent,
    FormTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

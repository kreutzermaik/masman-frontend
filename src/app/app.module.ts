import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';
import { AngularMaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { OverviewComponent } from './views/overview/overview.component';
import { HeaderComponent } from './components/header/header.component';
import { AddRecordDialogComponent } from './components/add-record-dialog/add-record-dialog.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { NutritionComponent } from './views/nutrition/nutrition.component';
import { WorkoutsComponent } from './views/workouts/workouts.component';
import { PunitComponent } from './components/punit/punit.component';
import {PunitService} from './services/punit.service';



@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    HeaderComponent,
    AddRecordDialogComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NutritionComponent,
    WorkoutsComponent,
    PunitComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularMaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
  providers: [PunitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

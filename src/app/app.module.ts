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
import { GoogleLoginComponent } from './components/auth/google-login/google-login.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import { CalendarComponent } from './components/calendar/calendar.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CreatePlanDialogComponent } from './components/dialogs/create/create-plan-dialog/create-plan-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    HeaderComponent,
    GoogleLoginComponent,
    CalendarComponent,
    CreatePlanDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularMaterialModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        MatCheckboxModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

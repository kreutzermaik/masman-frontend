import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { UserProfileComponent } from './components/basic-components/user-profile/user-profile.component';
import { AuthGuard } from "./guards/auth.guard";
import { LoginComponent } from './components/auth/login/login.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/basic-components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CalendarComponent } from './components/basic-components/calendar/calendar.component';
import { OverviewComponent } from './views/overview/overview.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CreateEventDialogComponent } from './components/dialogs/create/create-event-dialog/create-event-dialog.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { GoalsComponent } from './components/basic-components/goals/goals.component';
import { WorkoutsComponent } from './components/basic-components/workouts/workouts.component';
import { WorkoutComponent } from './components/basic-components/workout/workout.component';
import { CreateWorkoutComponentComponent } from './components/dialogs/create/create-workout-component/create-workout-component.component';
import { EditEventDialogComponent } from './components/dialogs/edit/edit-event-dialog/edit-event-dialog.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    LoginComponent,
    HeaderComponent,
    CalendarComponent,
    OverviewComponent,
    CreateEventDialogComponent,
    GoalsComponent,
    WorkoutsComponent,
    WorkoutComponent,
    CreateWorkoutComponentComponent,
    EditEventDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularMaterialModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    FullCalendarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

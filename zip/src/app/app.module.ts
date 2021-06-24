import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MyInstituteComponent } from './components/my-institute/my-institute.component';
import { HomeComponent } from './components/home/home.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { ExamScheduleComponent } from './components/exam-schedule/exam-schedule.component';
import { ProgressReportComponent } from './components/progress-report/progress-report.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { HolydaysComponent } from './components/holydays/holydays.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { TeachingContentComponent } from './components/teaching-content/teaching-content.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { BillingComponent } from './components/billing/billing.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ElectiveComponent } from './components/elective/elective.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import {MatRadioModule } from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox'

@NgModule({
  declarations: [
    AppComponent,
    MyInstituteComponent,
    HomeComponent,
    AttendenceComponent,
    AssignmentsComponent,
    ExamScheduleComponent,
    ProgressReportComponent,
    AssessmentsComponent,
    HolydaysComponent,
    TimetableComponent,
    TeachingContentComponent,
    LeavesComponent,
    BillingComponent,
    ActivityComponent,
    ElectiveComponent,
    FeedbackComponent,
    LoginComponent,
    DesktopComponent,







  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

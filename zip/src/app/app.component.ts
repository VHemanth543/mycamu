import { Component } from '@angular/core';
import { ActivityComponent } from './components/activity/activity.component';
import { AssessmentsComponent } from './components/assessments/assessments.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { AttendenceComponent } from './components/attendence/attendence.component';
import { BillingComponent } from './components/billing/billing.component';
import { ElectiveComponent } from './components/elective/elective.component';
import { ExamScheduleComponent } from './components/exam-schedule/exam-schedule.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { HolydaysComponent } from './components/holydays/holydays.component';
import { HomeComponent } from './components/home/home.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { MyInstituteComponent } from './components/my-institute/my-institute.component';
import { ProgressReportComponent } from './components/progress-report/progress-report.component';
import { TeachingContentComponent } from './components/teaching-content/teaching-content.component';
import { TimetableComponent } from './components/timetable/timetable.component';


export  interface list {
  name : string;
  icon : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = "V Hemanth"
  title = 'camu-app';

  icon = "attendence";

  component : any;

  selected = "My Institute"

  List : list[] = [
    {name : "My Institute" , icon : "account_balance"},
    {name : "Home" , icon : "home"},
    {name : "Attendence" , icon : "event"},
    {name : "Assignments" , icon : "assignment"},
    {name : "Exam Schedule" , icon : "schedule"},
    {name : "Progress Report" , icon : "description"},
    {name : "Assessments" , icon : "assessment"},
    {name : "Holydays" , icon : "beach_access"},
    {name : "Time Table" , icon : "date_range"},
    {name : "Teaching Content" , icon : "book"},
    {name : "Leave" , icon : "cloud_queue"},
    {name : "Billing" , icon : "attach_money"},
    {name : "Activity" , icon : " directions_run"},
    {name : "Elective" , icon : "track_changes"},
    {name : "Feedback" , icon : "feedback"}
  ]





  change(value : any){

    if(value.selected[0]?.value == "My Institute")this.component = MyInstituteComponent;
    else if(value.selected[0]?.value == "Home")this.component = HomeComponent;
    else if(value.selected[0]?.value == "Attendence")this.component = AttendenceComponent;
    else if(value.selected[0]?.value == "Assignments")this.component = AssignmentsComponent;
    else if(value.selected[0]?.value == "Exam Schedule")this.component = ExamScheduleComponent;
    else if(value.selected[0]?.value == "Progress Report")this.component = ProgressReportComponent;
    else if(value.selected[0]?.value == "Assessments")this.component = AssessmentsComponent;
    else if(value.selected[0]?.value == "Holydays")this.component = HolydaysComponent;
    else if(value.selected[0]?.value == "Time Table")this.component = TimetableComponent;
    else if(value.selected[0]?.value == "Teaching Content")this.component = TeachingContentComponent;
    else if(value.selected[0]?.value == "Leave")this.component = LeavesComponent;
    else if(value.selected[0]?.value == "Billing")this.component = BillingComponent;
    else if(value.selected[0]?.value == "Activity")this.component = ActivityComponent;
    else if(value.selected[0]?.value == "Elective")this.component = ElectiveComponent;
    else if(value.selected[0]?.value == "Feedback")this.component = FeedbackComponent;


  }
}



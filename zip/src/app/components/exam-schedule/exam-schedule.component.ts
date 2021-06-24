import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.scss']
})
export class ExamScheduleComponent implements OnInit {

  constructor() { }

  message : string = "No exam schedule found!"

  change(){

    this.message = "No progress reports found!"
  }

  tabchange(){
    this.message = "No exam schedule found!"
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

interface list {
  code : string;
  name : string;
}

export interface TabelElement {
  date: string;
  project: number;
  status: number;
  view: string;
}

const Tabel_DATA: TabelElement[] = [

];

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['DATE', 'PROJECT', 'STATUS', 'VIEW'];
  dataSource = Tabel_DATA;

  subjects = new FormControl('');
  subjectsList: list[] = [

    {code : 'GE8076', name: 'Professional Ethics in Engineering'},
    {code : 'CS6801', name: 'MULTICORE ARCHITECTURE & PROGRAMMING'},
    {code : 'MG6088', name: 'SOFTWARE PROJECT MANAGEM'},
    {code : 'CS6811', name: 'PROJECT WORK'},
    {code : 'NPTEL', name: 'NPTEL'},
    {code : 'SPORTS', name: 'SPORTS'},
    {code : 'CS6008', name: 'Human Computer Interaction'},
    {code : 'CS8078' , name: 'GREEN COMPUTING'},
    {code : 'CS8811' , name: 'Project Work'},


  ];


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  ngOnInit(): void {
  }

}

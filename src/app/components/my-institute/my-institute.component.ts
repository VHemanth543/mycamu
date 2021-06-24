import { Component, OnInit } from '@angular/core';

export interface CircularTable {
  category: string;
  name: string;
  attachment: string;
  LinkName: string;
}

const CIRCULAR_DATA: CircularTable[] = [

  {category : "MODEL EXAM", name: "PEE" , attachment: "https://www.mycamu.co.in/camu_attachment/get/60b0610b60ab7fbfdef4a939" , LinkName : "PEE MODEL EXAM QUESTION PAPER.doc"},
  {category : "MODEL EXAM", name: "Professional Ethics In Engineering" , attachment: "https://www.mycamu.co.in/camu_attachment/get/60b0605cbc00438bc1f35a3a" , LinkName : "PEE MODEL EXAM QUESTION PAPER.doc"},
  {category : "MODEL EXAM", name: "GC" , attachment: "https://www.mycamu.co.in/camu_attachment/get/60af12a99a47642fb24d27b2" , LinkName : "Model Exam.doc"},

];

@Component({
  selector: 'app-my-institute',
  templateUrl: './my-institute.component.html',
  styleUrls: ['./my-institute.component.scss']
})




export class MyInstituteComponent implements OnInit {

  displayedColumns: string[] = ['CATEGORY' , 'NAME' , 'ATTACHMENT'];
  dataSource = CIRCULAR_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

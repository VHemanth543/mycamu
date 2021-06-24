import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  register  =['STUDENT' , 'PARENT'];

  terms : boolean = false;

  LoginData = this.fb.group({
    UserName : ['' , Validators.required],
    Password : ['' , Validators.required]
  })

  RegisterData = this.fb.group({
    UserName : ['', Validators.required],
    Email : ['' , Validators.required , Validators.email],
    CamuPin :['' , Validators.required],
    Password : ['', Validators.required],
    ConformPassword : ['', Validators.required],
  })

  ApplicationData = this.fb.group({
    InstituteCode : ['' , Validators.required],
    Email : ['' , Validators.required , Validators.email],
  })


  constructor(private fb : FormBuilder , private router : Router) { }

  ngOnInit(): void {

  }

  login(){
    console.log(this.LoginData.value)
    if(this.LoginData.value.UserName != "" && this.LoginData.value.Email != "")
    {
      this.router.navigate(['/desktop'])
    }

  }

  reg(){
    console.log(this.RegisterData.value)
    if(this.RegisterData.value.UserName != "" && this.RegisterData.value.Email != "" && this.RegisterData.value.Password == this.RegisterData.value.ConformPassword)
    {
      this.router.navigate(['/login'])
    }
  }

  application(){
    console.log(this.ApplicationData.value)
    if(this.ApplicationData.value.CamuPin != ""){
      this.router.navigate(['/desktop'])
    }
  }
}

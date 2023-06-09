import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AuthserviceService } from 'src/app/shared/authservice.service';
 //import { Injectable } from '@angular/core';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  email:string ='';
  password:string ='';
 

  constructor(private auth:AuthService,private router:Router){

  }

  ngOnInit(): void {
    
  }

  signup(){
    if(this.email==''){
      alert("you have to enter your email")
      return;
    }
    if(this.password==''){
      alert("you have to enter your password")
      return;
   }
   this.auth.signup(this.email,this.password);
   this.email='';
   this.password='';
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email:string ='';
  password:string ='';
  

constructor(private auth:AuthService,public router:Router){}

ngOnInit():void{
  
}
// login(){
//   if(this.email==''){
//     alert("you have to enter your email")
//     return;
//   }
//   if(this.password==''){
//     alert("you have to enter your password")
//     return;
//  }
//  this.auth.login(this.email,this.password);
//  this.email='';
//  this.password='';
// }

login()
  {
    if(this.email =='')
    {
      alert("you have to enter your email")
      return;
    }
    
    if(this.password =='')
    {
      alert("you have to enter your password")
      return;
    }
    this.auth.login(this.email,this.password)
    this.email='';
    this.password='';
  }

  // // signin with Google
  // signInWithGoogle()
  // {
   
  //   this.auth.googleSignIn();
  // }

  

}

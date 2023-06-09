import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AuthserviceService } from 'src/app/shared/authservice.service';
// import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
email: string= '';
  

constructor(private auth:AuthService,private router:Router) { }
ngOnInit(): void {
    
}
forgotpassword() {
  this.auth.forgotpassword(this.email);
  this.email='';
   }
}

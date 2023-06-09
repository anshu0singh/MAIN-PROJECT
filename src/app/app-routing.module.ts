import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CoverPageComponent } from './components/cover-page/cover-page.component';
import { HomeComponent } from './components/home/home.component';
import { CrudComponent } from './components/crud/crud.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { PlayComponent } from './components/play/play.component';
import { LogoutComponent } from './components/logout/logout.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'cover-page',component:CoverPageComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  { path: 'crud', component: CrudComponent },
  { path: 'questions', component: QuestionsComponent },
  {path:'cover-page',component:CoverPageComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'quizz',component:QuizzComponent},
  {path:'play',component:PlayComponent},
  {path:'logout',component:LogoutComponent},
  {path:'verify-email',component:VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

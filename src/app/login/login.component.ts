import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { trigger, state, style, transition, animate } from '@angular/animations'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'firebase-angular-auth'
  isSignedIn = false;
  constructor(public firebaseService : FirebaseService){}
  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string, password: string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  async onSignin(email:string, password: string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false

  }
}

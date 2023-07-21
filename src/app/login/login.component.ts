import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { FirebaseError } from './error.interface';
import { trigger, state, style, transition, animate } from '@angular/animations'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'firebase-angular-auth'
  isSignedIn = false;

  errorMessageSignUp: string | null = null; // Error message for sign-up
  errorMessageSignIn: string | null = null; // Error message for sign-in

  constructor(public firebaseService : FirebaseService){}

  ngOnInit(): void {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn = true
    else
    this.isSignedIn = false
  }

  async onSignup(email:string, password: string){
    try {
      await this.firebaseService.signup(email,password);
      if(this.firebaseService.isLoggedIn)
        this.isSignedIn = true;
    } catch (error) {
      this.errorMessageSignUp = this.getCompactErrorMessage(error);
    }
  }

  async onSignin(email:string, password: string){
    try {
      await this.firebaseService.signin(email,password)
      if(this.firebaseService.isLoggedIn)
        this.isSignedIn = true;
    }
    catch (error) {
      this.errorMessageSignIn = this.getCompactErrorMessage(error);
    }
  }

  private getCompactErrorMessage(error: any): string {
    switch (error.code) {
      case 'auth/invalid-email':
        return 'Invalid email address. Please enter a valid email.';
      case 'auth/wrong-password':
        return 'Invalid password. Please check your password and try again.';
      case 'auth/user-not-found':
        return 'User not found. Please sign up to create an account.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long. Please choose a stronger password.';
      default:
        return 'An error occurred. Please try again later.';
    }
  }

  handleLogout(){
    this.isSignedIn = false

  }
}

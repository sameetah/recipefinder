import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FirebaseError } from '../../interfaces/error.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('signIn', style({
        transform: 'translateX(0)',
        zIndex: 2
      })),
      state('signUp', style({
        transform: 'translateX(0)',
        zIndex: 1
      })),
      transition('signIn => signUp', animate('400ms ease-in-out')),
      transition('signUp => signIn', animate('400ms ease-in-out'))
    ])
  ]  
})
export class LoginComponent implements OnInit {
  title = 'firebase-angular-auth';
  isSignedIn = false;
  loginState = 'signIn';

  errorMessageSignUp: string | null = null;
  errorMessageSignIn: string | null = null;

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
    this.isSignedIn = false;
  }

  switchState() {
    this.loginState = this.loginState === 'signIn' ? 'signUp' : 'signIn';
  }
}

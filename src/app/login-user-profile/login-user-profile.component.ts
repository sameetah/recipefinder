import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../login/firebase.service';

@Component({
  selector: 'app-login-user-profile',
  templateUrl: './login-user-profile.component.html',
  styleUrls: ['./login-user-profile.component.scss']
})
export class LoginUserProfileComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService){}

ngOnInit():void{
}
logout(){
  this.firebaseService.logout()
  this.isLogout.emit()
} 
}


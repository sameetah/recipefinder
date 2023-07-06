import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogBoxComponent } from '../contact-dialog-box/contact-dialog-box.component';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  name: string = "";
  email: string = "";
  message: string = "";
  nameInvalid = false;
  emailInvalid = false;
  messageInvalid = false;

  
  constructor(private dialog: MatDialog, @Inject(FaIconLibrary) private library: FaIconLibrary) {
    library.addIcons(faEnvelope);
  }
  

  openDialog() {
      this.nameInvalid = this.name ? false: true;
      this.emailInvalid = this.email ? !this.validateEmail(this.email) : true;
      this.messageInvalid = this.message ? false: true;


      const dialogRef = this.dialog.open(ContactDialogBoxComponent, {
        width: '300px', //initial width for the dialog box
        panelClass: 'custom-dialog',
        data: {name: this.name, email:this.email, message:this.message},
        closeOnNavigation: true, // Close the dialog on navigating away from the page
        disableClose: false, // Enable the close button    
          // any other configurations for dialog box
        });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
        // Handle any actions after the dialog is closed
      });
    }
    validateEmail(email: string): boolean {
      // Implement email validation logic here
      // Return true if the email is valid, false otherwise
      return /\S+@\S+\.\S+/.test(email);
      } 
  }


import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'
@Component({
  selector: 'app-contact-dialog-box',
  templateUrl: './contact-dialog-box.component.html',
  styleUrls: ['./contact-dialog-box.component.scss']
})

export class ContactDialogBoxComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


  name: string = "";
  email: string = "";
  message: string = "";
  isFormSubmitted: boolean = false

  submitForm() {
    if (this.name && this.email && this.message) {
      // Perform any desired actions with the form data
      // For example, you can pass the form data back to the ContactFormComponent:
      this.dialogRef.close({
        name: this.name,
        email: this.email,
        message: this.message
      });

      // Set the flag to show the success message after a brief delay
  }
  }
}

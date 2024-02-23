import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogBoxComponent } from './components/contact-dialog-box/contact-dialog-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipeFinder';
}

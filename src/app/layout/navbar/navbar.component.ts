import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  private offcanvas: bootstrap.Offcanvas | null = null; 

  ngOnInit() {
    const element = document.getElementById('offcanvasDarkNavbar');
    if(element) {
      this.offcanvas = new bootstrap.Offcanvas(element);
    } else {
      console.error('offcanvasDarkNavbar element not found');
    }
  }
  

  dismissOffcanvas() {
    this.offcanvas?.hide();
    setTimeout(() => {
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) {
            backdrop.remove();
        }
    }, 300);
  }
}

import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../../../auth/auth.component';
import { AuthService } from '../../../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  currentSection: any
  isNavbarContentOpen: any

  constructor(private router: Router, private dialog: MatDialog, public authService: AuthService) { }

  public openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }

  public closeNavbarContent() {
    this.isNavbarContentOpen = false;

  }

  public navigateTo(path: any) {
    this.router.navigate([path]);
  }

  @HostListener('document:click', [`$event`])
  public onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector(".modal-container");
    const openButtons = document.querySelectorAll(".open-button");

    let clickInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    })

    if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }


  handleOpenLoginModal() {
    this.dialog.open(AuthComponent, {
      width: "400px",
      disableClose: false
    })
  }

  name: string;

  ngOnInit() {
    this.name = this.readLocalStorageValue();
  }

  readLocalStorageValue() {
    return localStorage.getItem('username');
  }

  logOut() {
    this.authService.logout();
  }
}

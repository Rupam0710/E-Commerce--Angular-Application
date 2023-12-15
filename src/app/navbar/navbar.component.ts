import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  currentSection: any
  isNavbarContentOpen: any

  public openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }

  public closeNavbarContent() {
    this.isNavbarContentOpen = false;

  }

  public navigateTo(path: any) {

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
}

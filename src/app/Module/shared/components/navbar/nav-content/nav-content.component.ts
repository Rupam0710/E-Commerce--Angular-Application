import { Component, Input, OnInit } from '@angular/core';
import { navigation } from './nav-content';


@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrl: './nav-content.component.scss'
})
export class NavContentComponent implements OnInit {

  category: any;
  @Input() selectedSection: any;

  ngOnInit(): void {
    this.category = navigation;
    console.log("selected section", this.selectedSection);

  }
}

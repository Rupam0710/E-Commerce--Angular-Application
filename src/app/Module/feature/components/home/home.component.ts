import { Component, OnInit } from '@angular/core';
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';
import { lengha_page1 } from '../../../../../Data/Women/lenghaCholi';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { mensShoesPage1 } from '../../../../../Data/shoes';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  menJeans: any;
  womenGouns: any;
  lenghaCholi: any;
  mensKurta: any;
  mensShoes: any;

  ngOnInit(): void {
    this.menJeans = menJeans.slice(0, 5);
    this.womenGouns = gounsPage1.slice(0, 5);
    this.lenghaCholi = lengha_page1.slice(0, 5);
    this.mensKurta = mens_kurta.slice(0, 5);
    this.mensShoes = mensShoesPage1.slice(0, 5);
  }

}

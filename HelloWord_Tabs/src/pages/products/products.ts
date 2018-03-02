import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

  numProducts: Number;
  priceNotebook: Number;

  constructor(public navCtrl: NavController) {
    this.numProducts = 127;
    this.priceNotebook = 1990;
  }

}

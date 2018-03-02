import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ProductsPage } from '../products/products';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductsPage;
  tab3Root = AboutPage;
  tab4Root = ContactPage;

  constructor() {

  }
}

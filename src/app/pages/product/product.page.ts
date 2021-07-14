import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  public listProducts = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

}

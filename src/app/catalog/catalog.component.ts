import { Component, OnInit } from '@angular/core';
import { Product }    from '../product';
import {PRODUCTS} from '../mock-products';
import {ProductService} from '../product.service';
import {MongodbService} from '../mongodb.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
products: any;
respuesta: any;
  constructor(
    private mongodbService: MongodbService
  ) {}

  ngOnInit() {
    // this.getProducts();
  }
  getProducts() {
  // this.productService.getProducts().subscribe(products=>this.products=products)
    console.log('entro funcion componente');
    this.mongodbService.getProducts().subscribe(respuesta => {
      this.respuesta = respuesta;
      console.log(this.respuesta);
    });
  }

}

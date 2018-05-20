import { Component, OnInit } from '@angular/core';

import {ServiciodbbService} from '../serviciodbb.service';

@Component({
  selector: 'app-cata2',
  templateUrl: './cata2.component.html',
  styleUrls: ['./cata2.component.css']
})
export class Cata2Component implements OnInit {
  respuesta: any;
  products: any;
  constructor(
     private servicio: ServiciodbbService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    // this.productService.getProducts().subscribe(products=>this.products=products)
    console.log('entro funcion componente');

    this.servicio.getProducts().subscribe(respuesta => {
      this.respuesta = respuesta;
      this.products = this.respuesta.response.data; // De esta forma obtienes el arreglo del resultado del servidor
      console.log(this.respuesta);
    });
  }

}

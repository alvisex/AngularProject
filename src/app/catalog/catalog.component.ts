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
respuesta:any;


  constructor(private productService: ProductService,private mongodbService: MongodbService) {
  
    
}

  getProducts():void{
  
  //this.productService.getProducts().subscribe(products=>this.products=products)
  this.mongodbService.getProducts().subscribe(respuesta=>{console.log(this.products=respuesta)} )
  
  }


  ngOnInit() {
  this.getProducts();

  }
  


}

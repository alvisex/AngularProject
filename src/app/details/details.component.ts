import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../product.service';

import {ServiciodbbService} from '../serviciodbb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
@Input() product: Product;
serverRes: any;
  constructor(
  private location: Location,
  private route: ActivatedRoute,
  private productService: ProductService,

  private servicio: ServiciodbbService
  ) { }

  ngOnInit() {
  this.getProduct();

  }

  getProduct():void{
  const id=+ this.route.snapshot.paramMap.get('id');
  this.productService.getProduct(id)
  .subscribe(product => this.product = product);
  }

  getProductBD() {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    const cn = 'products';

    this.servicio.getOneP(id, cn).subscribe( res => {
      this.serverRes = res ;
      // console.log(this.serverRes);
      this.product = this.serverRes.response.data[0];
      console.log(this.product);
    });
  }

    goBack(): void{
  this.location.back();
  }

}

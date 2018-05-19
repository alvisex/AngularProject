import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
@Input() product: Product;

  constructor(private location: Location,
  private route: ActivatedRoute,

  private productService: ProductService
  
  ) { }

  ngOnInit() {
  this.getProduct();
  
  }
  
  getProduct():void{
  const id=+ this.route.snapshot.paramMap.get('id');
  this.productService.getProduct(id)
  .subscribe(product => this.product = product);
  }
  
    goBack(): void{
  this.location.back();
  }

}

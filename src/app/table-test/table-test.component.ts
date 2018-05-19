import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Product }    from '../product';
import {PRODUCTS} from '../mock-products';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit {


products: Array<any>;

   getProducts():void{
  
  this.productService.getProducts().subscribe(products=>this.products=products)
  }

  title = 'Añadir data';

  
  
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    const data = this.dataSource.data;
    data.push(this.model);
    this.dataSource.data = data;
    this.model = {};
    this.msg = "producto añadido..... "; 

  }
  
  
 
 
  //myValue;
  //editEmployee(k){
    //this.model2.name = this.employees[k].name;
    //this.model2.position = this.employees[k].position;
    //this.model2.talla=this.employees[k].talla;
    //this.model2.precio=this.employees[k].precio;
    //this.model2.depto=this.employees[k].depto;
    //this.myValue = k;

  //}
 
  clickMe(){
    this.msg = "";
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
  this.getProducts();

 
  }
  



displayedColumns = ['id','name'];
  dataSource = new MatTableDataSource<Product>(PRODUCTS);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  





}
















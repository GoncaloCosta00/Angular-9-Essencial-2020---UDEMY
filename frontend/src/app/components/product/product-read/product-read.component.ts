import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  //  atributo products do tipo Product[] -> array de produtos
  products: Product[]

  displayedColumns = ['id','name','price']

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //subscrevendo, vou receber os produtos e quando chegar resposta vou ter inquisição dos produtos
    this.productService.read().subscribe(products=>{
      this.products = products
      console.log(products)
    })
  }


}

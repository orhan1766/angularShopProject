import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute) { }
  title = "Urun Listesi";
  filterText = "";
  // product1=new Product(1,"Laptop",15000,1,"https://picsum.photos/id/1/200/200","Asus Zenbook",);
  // product2=new Product(2,"Mouse",500,1,"https://picsum.photos/id/21/200/200","Everest",);
  // product3=new Product(3,"Keyboard",700,1,"https://picsum.photos/id/31/200/200","Dell",);
  // product4=new Product(4,"Monitor",3000,1,"https://picsum.photos/id/41/200/200","Samsung",);
  // product5=new Product(5,"Book",60,2,"https://picsum.photos/id/51/200/200","Bu Ulke",);
  products: Product[] = [];
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
      this.products=data;
    });
    })
    
  }

  addToCart(product: Product) {
    this.alertifyService.success(product.name + " sepete eklendi.")
  }
}

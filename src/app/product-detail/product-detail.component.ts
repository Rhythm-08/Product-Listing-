import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../fake-store.service';
import { productListModal } from '../interface';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  constructor(private fakeService:FakeStoreService) {

  }

  productDetailArray:productListModal[]=[]
  ngOnInit(): void {
    this.productDetailArray=this.fakeService.getProductDetails()
    console.log(this.productDetailArray);

  }

}

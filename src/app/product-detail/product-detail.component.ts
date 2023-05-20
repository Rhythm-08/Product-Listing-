import { Component, OnDestroy, OnInit } from '@angular/core';
import { FakeStoreService } from '../fake-store.service';
import { productListModal } from '../interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit,OnDestroy {
  constructor(private fakeService: FakeStoreService, private router: Router) {

  }


  productDetailArray: productListModal[] = []
  ngOnInit(): void {
    this.productDetailArray = this.fakeService.getProductDetails()


    if (this.productDetailArray.length < 1) {
      const data = localStorage.getItem('productDetails')
      if (data) {
        this.productDetailArray = JSON.parse(data)
      }
    }

  }
  onButtonClick(){
    this.router.navigate(['product-list'])
  }
  ngOnDestroy(): void {
    this.productDetailArray.pop();
  }

}

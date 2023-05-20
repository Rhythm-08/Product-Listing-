import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { productListModal } from './interface';
@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {
  baseUrl = environment.BASE_URL;
  constructor(private httpService:HttpClient) { }
  storeProductDetails:productListModal[]=[]


  getAllProducts(){
    return this.httpService.get(this.baseUrl);
  }


  setProductDetail(data:productListModal){
    this.storeProductDetails.pop();
    this.storeProductDetails.push(data);
  }
  getProductDetails(){
    return this.storeProductDetails;
  }


}

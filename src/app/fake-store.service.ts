import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { productListModal } from './interface';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {
  baseUrl = environment.BASE_URL;
  constructor(private httpService:HttpClient) { }
  storeProductDetails:productListModal[]=[]


  getAllProducts(){
    return this.httpService.get(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }


    setProductDetail(data:productListModal){
      localStorage.clear();

      this.storeProductDetails.pop();
      this.storeProductDetails.push(data);
      localStorage.setItem('productDetails',JSON.stringify(this.storeProductDetails))
    }
  getProductDetails(){
    return this.storeProductDetails;
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {

      console.error('An error occurred:', error.error.message);
    } else {

      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }

    return throwError('Something went wrong. Please try again later.');
  }
}

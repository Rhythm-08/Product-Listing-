import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../fake-store.service';
import { Router } from '@angular/router';
import { productListModal } from '../interface';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  productListArray:productListModal[]=[]
  viewBackgroundColor = '';
  constructor(private fakeService:FakeStoreService,private router:Router){}

  ngOnInit(){
     this.fakeService.getAllProducts().subscribe((response:any)=>{

      this.productListArray=response
     });
  }
  onClick(id:number){

    this.fakeService.setProductDetail(this.productListArray[id-1]);
    this.router.navigate(['product-details'])

  }
  onMouseOver(event:MouseEvent) {
    const target = event.target as HTMLTableCellElement;
    target.style.color = 'purple';
  target.style.fontStyle= 'italic'
  }

  onMouseOut(event:MouseEvent) {
    const target = event.target as HTMLTableCellElement;
    target.style.color = '';
    target.style.fontStyle= ''
  }
}

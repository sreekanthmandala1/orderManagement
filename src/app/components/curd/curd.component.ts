import { OrdersService } from './../../services/orders.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.scss']
})
export class CurdComponent implements OnInit {
  closeResult = '';
  
    // dataTitle = this.ordersService.getDataTitle();
   fetching = false;
   editMode:boolean = false;
   editIndex:any;
   Edit:boolean = false;
  // OrderNumber: any;
  // OrderDueDate: any;
  // CustomerBuyerName: any;
  // CustomerAddress: any;
  // CustomerPhone: any;
  // OrderTotal: any;
  @ViewChild('OrderNumber') OrderNumber:any=ElementRef;
   @ViewChild('OrderDueDate') OrderDueDate:any=ElementRef;
   @ViewChild('CustomerBuyerName') CustomerBuyerName:any=ElementRef;
   @ViewChild('CustomerAddress') CustomerAddress:any=ElementRef;
   @ViewChild('CustomerPhone') CustomerPhone:any=ElementRef;
   @ViewChild('OrderTotal') OrderTotal:any=ElementRef;
  constructor(private ordersService:OrdersService,
    private modalService: NgbModal,) {
    
   }

  ngOnInit(): void {
    this.onFetchProduct();
    
  }

  // open(content:any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  open(content:any) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  
  
  products : any=[
    {

    },
  ];

  onAddProduct(OrderNumber:any , OrderDueDate:any, CustomerBuyerName:any , CustomerAddress:any,CustomerPhone:any , OrderTotal:any ){
    if(this.editMode){
      this.products[this.editIndex] = {
          OrderNumber : OrderNumber.value,
          OrderDueDate :OrderDueDate.value,
          CustomerBuyerName :CustomerBuyerName.value,
          CustomerAddress :CustomerAddress.value,
          CustomerPhone :CustomerPhone.value,
          OrderTotal :OrderTotal.value,
          
      }
      this.editMode = false;
      this.OrderNumber.nativeElement.value = '';
    this.OrderDueDate.nativeElement.value = '';
    this.CustomerBuyerName.nativeElement.value = '';
    this.CustomerAddress.nativeElement.value = '';
    this.CustomerPhone.nativeElement.value = '';
    this.OrderTotal.nativeElement.value = '';
    }else{
      this.products = this.products || []
      this.products.push({
        OrderNumber:OrderNumber.value,
        OrderDueDate:OrderDueDate.value,
        CustomerBuyerName :CustomerBuyerName.value,
          CustomerAddress :CustomerAddress.value,
          CustomerPhone :CustomerPhone.value,
          OrderTotal :OrderTotal.value,
      })
    }
    this.onSaveProduct()
  }

  onSaveProduct(){
     this.ordersService.saveProducts(this.products).subscribe((response)=>{
      console.log(response)
      
    },
    (err)=>console.log(err)
    )
  }

  onFetchProduct(){
    this.fetching = true;
    this.ordersService.fetchProducts().subscribe((response)=>{
      // console.log(response)
      const data = JSON.stringify(response)
      console.log(data)
      this.products = JSON.parse(data)
      this.fetching = false;
    },
    (err)=>console.log(err)
    )
  }

  onDeleteProduct(id:number){
    if(confirm('Do you want to delete this product?')){
      this.products.splice(id,1);
      this.onSaveProduct()
    }
  }

  onEditProduct(index:number){
    this.Edit = true;
    this.editMode = true;
    this.editIndex = index;
    // console.log(this.products[index].i)
    this.OrderNumber.nativeElement.value = this.products[index].OrderNumber;
    this.OrderDueDate.nativeElement.value = this.products[index].OrderDueDate;
    this.CustomerBuyerName.nativeElement.value = this.products[index].CustomerBuyerName;
    this.CustomerAddress.nativeElement.value = this.products[index].CustomerAddress;
    this.CustomerPhone.nativeElement.value = this.products[index].CustomerPhone;
    this.OrderTotal.nativeElement.value = this.products[index].OrderTotal;
  }

  onAllDeleteProduct(name:any){
    this.products.splice(name);
  }

  
}

function content(content: any) {
  throw new Error('Function not implemented.');
}
function index(index: any) {
  throw new Error('Function not implemented.');
}

function i(i: any) {
  throw new Error('Function not implemented.');
}


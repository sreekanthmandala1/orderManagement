import { OrdersService } from './../../services/orders.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { OrdersModel } from '../models/orders.model';



// const ELEMENT_DATA: OrdersModel[] = [
//   {OrderNumber: 1, OrderDueDate: '19 Nov', CustomerBuyerName: 'sreekanth', CustomerAddress: '5-685 Hyderabad', CustomerPhone : 9876543210, OrderTotal : 4343},
//   {OrderNumber: 2, OrderDueDate: '34 dec', CustomerBuyerName: 'abc', CustomerAddress: '2-5 Delhi', CustomerPhone : 9876543210, OrderTotal : 4343},
//   {OrderNumber: 3, OrderDueDate: '30 june', CustomerBuyerName: 'def', CustomerAddress: '7-85 Hyderabad', CustomerPhone : 9876543210, OrderTotal : 4343},
//   {OrderNumber: 4, OrderDueDate: '9 may', CustomerBuyerName: 'ghi', CustomerAddress: '567-2 Hyderabad', CustomerPhone : 9876543210, OrderTotal : 4343},
//   {OrderNumber: 5, OrderDueDate: '30 feb', CustomerBuyerName: 'jkl', CustomerAddress: '849-4 Hyderabad', CustomerPhone : 9876543210, OrderTotal : 4343},
//   {OrderNumber: 6, OrderDueDate: '5 dec', CustomerBuyerName: 'mno', CustomerAddress: '78-0 Hyderabad', CustomerPhone : 9876543210, OrderTotal : 4343},
//   {OrderNumber: 7, OrderDueDate: '12 march', CustomerBuyerName: 'pqr', CustomerAddress: '948-5 Hyderabad', CustomerPhone : 9876543210, OrderTotal : 4343},
//   {OrderNumber: 8, OrderDueDate: '6Nov', CustomerBuyerName: 'stuvwxy', CustomerAddress: '5-685 Hyderabad', CustomerPhone : 9876543210, OrderTotal : 4343},
  
  
// ];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  closeResult = '';
  displayedColumns: string[] = ['OrderNumber', 'OrderDueDate', 'CustomerBuyerName', 'CustomerAddress','CustomerPhone','OrderTotal'];
  // dataSource = DataTabelDataSource;

  constructor(private modalService: NgbModal,
    private OrdersService: OrdersService) { }

  ngOnInit(): void {
    // this.dataSource = new DataTabelDataSource()
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
  onGetOrders(){
    // this.OrdersService.addOrder(this.ELEMENT_DATA).subscribe((response)=>{
    //   console.log(response)
      
    // },
    // (err)=>console.log(err)
    // )
  }
 
}

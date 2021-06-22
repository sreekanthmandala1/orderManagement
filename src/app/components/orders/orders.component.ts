import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export interface PeriodicElement {
  OrderNumber: number;
  OrderDueDate: string;
  CustomerBuyerName: string;
  CustomerAddress: string;
  CustomerPhone: number;
  OrderTotal: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {OrderNumber: 1, OrderDueDate: '19Nov', CustomerBuyerName: 'sreekanth', CustomerAddress: '5-685 Hyderabad', CustomerPhone : 9876543210, OrderTotal : 4343},
  
];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  closeResult = '';
  displayedColumns: string[] = ['OrderNumber', 'OrderDueDate', 'CustomerBuyerName', 'CustomerAddress','CustomerPhone','OrderTotal'];
  dataSource = ELEMENT_DATA;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
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
}

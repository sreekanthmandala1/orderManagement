import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdersModel } from '../components/models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  

  saveProducts(products:any[]){
    // return this.http.post(this.url,products);
    return this.http.put('http://localhost:3000/orders',products);
  }
  
  fetchProducts(){
    return this.http.get('http://localhost:3000/orders');
  }
 
}

import { InvoiceModel } from './../_models/invoice'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductModel } from '../_models/product'

const url = 'http://localhost:5050/api'

@Injectable({
  providedIn: 'root',
})
export class IssuerService {
  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${url}/product`)
  }

  addInvoice(invoice: InvoiceModel): Observable<InvoiceModel> {
    return this.http.post<InvoiceModel>(`${url}/invoice`, invoice)
  }

  getInvoices(): Observable<InvoiceModel[]> {
    return this.http.get<InvoiceModel[]>(`${url}/invoice`)
  }
}

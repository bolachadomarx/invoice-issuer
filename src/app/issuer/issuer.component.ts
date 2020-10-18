import { IssuerService } from './../_service/issuer.service'
import { ProductModel } from './../_models/product'
import { Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTable, MatTableDataSource } from '@angular/material/table'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

interface InvoiceProductModel {
  product: ProductModel
  quantity: number
}
@Component({
  selector: 'app-issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css'],
})
export class IssuerComponent implements OnInit {
  products: ProductModel[] = [
    {
      id: 1,
      code: 'IQBWE9RG8',
      description: 'Sapato ADADAS 50',
      value: 2500,
      discount: 0,
    },
    {
      id: 2,
      code: 'I3BWE9RG9',
      description: 'Sandálias de Erudito T3',
      value: 3000,
      discount: 0,
    },
    {
      id: 3,
      code: 'AQBWE9RG3',
      description: 'Robe de mago T5',
      value: 4000,
      discount: 0,
    },
  ]

  @ViewChild(MatTable, { static: true }) table: MatTable<any>
  dataSource: MatTableDataSource<InvoiceProductModel>
  displayedColumns: string[] = ['code', 'description', 'value', 'discount', 'quantity', 'delete']

  invoiceProducts: InvoiceProductModel[] = []
  fb: FormBuilder = new FormBuilder()
  invoiceForm: FormGroup
  productInvoiceform: FormGroup
  total: number = 0

  constructor(private readonly issuerService: IssuerService) {
    this.productInvoiceform = this.fb.group({
      product: ['', Validators.required],
      quantity: ['', Validators.required],
    })

    this.invoiceForm = this.fb.group({
      client: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.invoiceProducts)
  }

  addProduct() {
    const invoiceProduct = Object.assign(
      {},
      { product: this.productInvoiceform.get('product').value, quantity: this.productInvoiceform.get('quantity').value }
    )
    this.invoiceProducts.push(invoiceProduct)
    this.dataSource.data = this.invoiceProducts
    this.calcTotal()
    this.productInvoiceform.reset()
  }

  calcTotal() {
    this.total = 0
    this.invoiceProducts.map((product) => {
      const productValue = product.product.value * product.quantity
      this.total = this.total + productValue
    })
  }

  deleteProduct(index) {
    this.invoiceProducts.splice(index, 1)
    this.dataSource.data = this.invoiceProducts
    this.calcTotal()
  }

  addInvoice() {
    const date = new Date()
    const invoiceCode = 'invoice' + this.invoiceForm.get('client').value + date.toISOString()
    const invoice = Object.assign({}, this.invoiceForm.value, { products: this.invoiceProducts }, { code: invoiceCode })
  }
}

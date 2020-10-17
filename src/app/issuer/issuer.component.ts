import { ProductModel } from './../_models/product'
import { Component, OnInit } from '@angular/core'

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

  constructor() {}

  ngOnInit(): void {}
}

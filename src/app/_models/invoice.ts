import { ProductModel } from './product'

export interface InvoiceModel {
  id: number
  code: string
  client: string
  products: ProductModel[]
}

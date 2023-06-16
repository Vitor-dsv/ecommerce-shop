export interface IProduct {
  id?: number
  description: string
  src: string
  monetaryValue: number
}
export type TProductList = {
  data: IProduct[]
  countAll?: number
}

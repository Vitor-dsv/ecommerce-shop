import { TProductList } from '@/services/product/ProductModel'
import {
  TQueryParamsPaging,
  getAllProductsHighestPriceWithPaging,
  getAllProductsLowestPriceWithPaging,
  getAllProductsWithPaging,
} from '@/services/product/ProductService'
import { useCallback, useEffect, useState } from 'react'

export enum EFilterProducts {
  All = 1,
  Highest,
  Lowest,
}

export type TUseProducts = {
  index: number
  countAll?: number
  products?: TProductList['data']
  filter: EFilterProducts
  getAll: (index: number) => Promise<void>
  getAllHighestPrice: (index: number) => Promise<void>
  getAllLowestPrice: (index: number) => Promise<void>
}

const INITIAL_INDEX = 0

export const useProducts = (max: number) => {
  const [products, setProducts] = useState<TProductList['data']>()
  const [index, setIndex] = useState<number>(INITIAL_INDEX)
  const [countAll, setCountAll] = useState<number>()
  const [filter, setFilter] = useState<EFilterProducts>(EFilterProducts.All)

  const buildProducts = async (
    index: number,
    filter: EFilterProducts,
    fetch: (params: TQueryParamsPaging) => Promise<TProductList>,
  ) => {
    setIndex(index)
    setFilter(filter)

    const { data, countAll } = await fetch({ index, max })

    if (index === 0) setCountAll(countAll)

    setProducts(data)
  }

  const getAll = async (index: number) =>
    await buildProducts(index, EFilterProducts.All, getAllProductsWithPaging)

  useEffect(() => {
    // First fetch.
    getAll(INITIAL_INDEX)
  }, [])

  const getAllHighestPrice = useCallback(
    async (index: number) =>
      await buildProducts(
        index,
        EFilterProducts.Highest,
        getAllProductsHighestPriceWithPaging,
      ),
    [max],
  )

  const getAllLowestPrice = useCallback(
    async (index: number) =>
      await buildProducts(
        index,
        EFilterProducts.Lowest,
        getAllProductsLowestPriceWithPaging,
      ),
    [max],
  )

  return {
    products,
    filter,
    index,
    countAll,
    getAll,
    getAllHighestPrice,
    getAllLowestPrice,
  }
}

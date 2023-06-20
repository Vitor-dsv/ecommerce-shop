import { TProductList } from '@/services/product/ProductModel'
import {
  TQueryParamsPaging,
  getAllProductsHighestPriceWithPaging,
  getAllProductsLowestPriceWithPaging,
  getAllProductsWithPaging,
} from '@/services/product/ProductService'
import { useCallback, useEffect, useState } from 'react'

export type TUseProducts = {
  index: number
  countAll?: number
  products?: TProductList['data']
  getAll: (index: number) => Promise<void>
  getAllHighestPrice: (index: number) => Promise<void>
  getAllLowestPrice: (index: number) => Promise<void>
}

const INITIAL_INDEX = 0

export const useProducts = (max: number) => {
  const [products, setProducts] = useState<TProductList['data']>()
  const [index, setIndex] = useState<number>(INITIAL_INDEX)
  const [countAll, setCountAll] = useState<number>()

  const buildProducts = async (
    index: number,
    fetch: (params: TQueryParamsPaging) => Promise<TProductList>,
  ) => {
    setIndex(index)

    const { data, countAll } = await fetch({ index, max })

    if (index === 0) setCountAll(countAll)

    setProducts(data)
  }

  const getAll = async (index: number) =>
    await buildProducts(index, getAllProductsWithPaging)

  useEffect(() => {
    // First fetch.
    getAll(INITIAL_INDEX)
  }, [])

  const getAllHighestPrice = useCallback(
    async (index: number) =>
      await buildProducts(index, getAllProductsHighestPriceWithPaging),
    [max],
  )

  const getAllLowestPrice = useCallback(
    async (index: number) =>
      await buildProducts(index, getAllProductsLowestPriceWithPaging),
    [max],
  )

  return {
    products,
    index,
    countAll,
    getAll,
    getAllHighestPrice,
    getAllLowestPrice,
  }
}

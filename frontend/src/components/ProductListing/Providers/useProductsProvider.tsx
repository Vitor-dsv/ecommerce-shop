import { createContext } from 'react'
import { TUseProducts, useProducts } from '../hooks/useProducts'

export const UseProductContext = createContext<TUseProducts | null>(null)

interface Props {
  children: JSX.Element
}

const UseProductsProvider = ({ children }: Props) => {
  const {
    products,
    countAll,
    index,
    getAll,
    getAllHighestPrice,
    getAllLowestPrice,
    filter
  } = useProducts(10)

  return (
    <UseProductContext.Provider
      value={{ filter, products, countAll, index, getAll, getAllHighestPrice, getAllLowestPrice }}
    >
      {children}
    </UseProductContext.Provider>
  )
}

export default UseProductsProvider

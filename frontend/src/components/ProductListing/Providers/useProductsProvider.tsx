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
    filter,
    isLoading
  } = useProducts(10)

  return (
    <UseProductContext.Provider
      value={{ filter, products, countAll, index, getAll, getAllHighestPrice, getAllLowestPrice, isLoading }}
    >
      {children}
    </UseProductContext.Provider>
  )
}

export default UseProductsProvider

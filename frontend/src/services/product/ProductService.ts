import { ENDPOINTS, requesterAPI } from '../ConfigurationProxy'
import { TProductList } from './ProductModel'

export type TQueryParamsPaging = {
  index: number
  max: number
}

type TGetParams = {
  endpoint: string
  queryParams: TQueryParamsPaging
}

const getListProduct = async ({
  endpoint,
  queryParams,
}: TGetParams): Promise<TProductList> => {
  const url = `${endpoint}?index=${queryParams.index}&max=${queryParams.max}`

  return (await requesterAPI.get<TProductList>(url)).data
}

export const getAllProductsWithPaging = async (
  queryParams: TQueryParamsPaging,
): Promise<TProductList> =>
  await getListProduct({ endpoint: ENDPOINTS.PRODUCT, queryParams })

export const getAllProductsHighestPriceWithPaging = async (
  queryParams: TQueryParamsPaging,
): Promise<TProductList> =>
  await getListProduct({
    endpoint: ENDPOINTS.PRODUCT_ORDER_HIGHEST,
    queryParams,
  })

export const getAllProductsLowestPriceWithPaging = async (
  queryParams: TQueryParamsPaging,
): Promise<TProductList> =>
  await getListProduct({
    endpoint: ENDPOINTS.PRODUCT_ORDER_LOWEST,
    queryParams,
  })

import axios, { AxiosRequestConfig } from 'axios'

export const requesterAPI = axios.create({
  // TODO: Modify for production.
  baseURL: 'http://localhost:8080',
})

export const ENDPOINTS = {
  PRODUCT: '/product',
  PRODUCT_ORDER_HIGHEST: '/product/price/highest',
  PRODUCT_ORDER_LOWEST: '/product/price/lowest',
}

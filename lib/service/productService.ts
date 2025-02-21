import { cache } from 'react'
import dbConnect from '@/lib/dbConnect'
import ProductModel, { Product } from '../models/productModels'

export const revalidate = 3600

// Helper function to map MongoDB documents to Product type
const mapToProduct = (doc: any): Product => ({
  ...doc,
  _id: doc._id?.toString() || '', // Convert _id to string
  isFeatured: doc.isFeatured ?? false, // Ensure default value for isFeatured
})

// Get latest products
const getLatest = cache(async (): Promise<Product[]> => {
  await dbConnect()
  const products = await ProductModel.find({})
    .sort({ _id: -1 })
    .limit(6)
    .select(
      '_id name slug image price brand description category rating numReviews countInStock isFeatured banner'
    )
    .lean()

  return products.map(mapToProduct)
})

// Get featured products
const getFeatured = cache(async (): Promise<Product[]> => {
  await dbConnect()
  const products = await ProductModel.find({ isFeatured: true })
    .limit(3)
    .select(
      '_id name slug image price brand description category rating numReviews countInStock isFeatured banner'
    )
    .lean()

  return products.map(mapToProduct)
})

// Get product by slug
const getBySlug = cache(async (slug: string): Promise<Product | null> => {
  await dbConnect()
  const product = await ProductModel.findOne({ slug })
    .select(
      '_id name slug image price brand description category rating numReviews countInStock isFeatured banner'
    )
    .lean()

  return product ? mapToProduct(product) : null
})

// Combine all services into a single object
const productService = {
  getBySlug,
  getFeatured,
  getLatest,
}

export default productService

import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { ProductsGrid } from '@/components/ui/ProductsGrid'
import { products } from '@/data/products'

export const Products = () => {
  return (
    <>
      <Navbar />
      <ProductsGrid products={products} />
      <Footer />
    </>
  )
}

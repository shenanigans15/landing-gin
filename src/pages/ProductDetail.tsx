import { useParams } from 'react-router'
import { Navbar } from '@/components/layout/Navbar'
import { products } from '@/data/products'
import { Truck } from 'lucide-react'
import { BrandButton } from '../components/ui/BrandButton'
import { CounterButton } from '../components/ui/counter-button'

export const ProductDetail = () => {
  const { slug } = useParams()

  const product = products.find((product) => product.slug === slug)

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="max-w-max w-full space-y-8 text-center">
            <div>
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <h1 className="mt-6 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Producto no encontrado
              </h1>

              <p className="mt-2 text-base text-gray-500">
                Lo sentimos, pero el artículo que buscas ya no está disponible o
                la URL es incorrecta.
              </p>
            </div>

            <div className="mt-10 flex justify-center space-x-4">
              <a
                href="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Volver al inicio
              </a>

              <a
                href="/contacto"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Contactar soporte
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="mt-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <div className="image-overlay" />
          </div>
          <div>
            <h1 className="mt-20 text-4xl font-bold">{product.name}</h1>
            <p className="mt-4 text-3xl font-semibold text-amber-500">
              ${product.price}
            </p>
            <p className="mt-4 text-neutral-400">{product.description}</p>
            <div className="mt-6 flex">
              <h2 className="text-xl">Cantidad</h2>
              <CounterButton className="ml-auto border-amber-500" />
            </div>
            <div className="mt-4">
              <BrandButton size="sm" className="w-full h-12 text-xl">
                Agregar al carrito
              </BrandButton>
            </div>
            <div className="inline-flex gap-2 mt-4">
              <Truck className="text-neutral-400" />
              <p className="text-neutral-400">Envíos a todo el país!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

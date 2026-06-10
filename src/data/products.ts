import type { Product } from '@/components/interfaces/product.interface'

export const products: Product[] = [
  {
    id: '1',
    name: 'Brújula Vikinga Clásico',
    price: 16000,
    description: 'Botella de gin artesanal clásico',
    slug: 'brujula-vikinga-clasico',
    stock: 1,
    image: '/gin-bottle.png',
    tags: ['gin', 'bottle'],
  },
  {
    id: '2',
    name: 'Caja de botánicos',
    price: 5000,
    description: 'Caja de mix de botánicos',
    slug: 'caja-botanicos',
    stock: 1,
    image: '/images/caja-botanicos.jpg',
    tags: ['caja', 'box', 'botanicos'],
  },
  {
    id: '3',
    name: 'Pack Gin + Botánicos',
    price: 20000,
    description: 'Pack de gin artesanal y caja de botánicos',
    slug: 'pack-gin-botanicos',
    stock: 1,
    image: '/images/gin-botanico.jpg',
    tags: ['gin', 'bottle', 'pack', 'caja', 'box', 'botanicos'],
  },
  {
    id: '4',
    name: 'Pack 3 botellas de gin',
    price: 42000,
    description: 'Pack de tres botellas de gin artesanal clásico',
    slug: 'pack-tres-gin',
    stock: 1,
    image: '/images/gin-pack.jpg',
    tags: ['gin', 'bottle', 'pack'],
  },
]

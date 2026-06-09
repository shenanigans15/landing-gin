export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Brújula Vikinga Clásico',
    price: 16000,
    description: 'Botella de gin artesanal clásico',
    image: '/gin-bottle.png',
  },
  {
    id: '2',
    name: 'Caja de botánicos',
    price: 5000,
    description: 'Caja de mix de botánicos',
    image: '/images/caja-botanicos.jpg',
  },
  {
    id: '3',
    name: 'Pack Gin + Botánicos',
    price: 20000,
    description: 'Pack de gin artesanal y caja de botánicos',
    image: '/images/gin-botanico.jpg',
  },
  {
    id: '4',
    name: 'Pack 3 botellas de gin',
    price: 42000,
    description: 'Pack de tres botellas de gin artesanal clásico',
    image: '/images/gin-pack.jpg',
  },
]

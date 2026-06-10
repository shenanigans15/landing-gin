import type { User } from './user.interface'

export interface Product {
  id: string
  name: string
  price: number
  description: string
  slug: string
  stock: number
  image: string
  images?: string[]
  tags: string[]
  user?: User
}

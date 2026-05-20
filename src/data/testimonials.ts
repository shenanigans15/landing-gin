interface Testimonial {
  name: string
  location: string
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Martín R.',
    location: 'Jujuy',
    text: 'Un gin distinto. Muy equilibrado y con un aroma increíble.',
  },
  {
    name: 'Lucía G.',
    location: 'Salta',
    text: 'Se nota que es artesanal. Nada que ver con los gins comerciales.',
  },
  {
    name: 'Carlos M.',
    location: 'San Salvador',
    text: 'Lo probé por recomendación y ahora siempre tengo una botella.',
  },
]

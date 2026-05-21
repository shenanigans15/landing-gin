export type SocialName = 'facebook' | 'instagram' | 'whatsapp' | 'email'

export type Social = {
  name: SocialName
  href: string
}

export const socials: Social[] = [
  {
    name: 'whatsapp',
    href: 'https://wa.me/5493888203094?text=Hola%20quiero%20información',
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/profile.php?id=61563837113267',
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/brujulavikinga.gin/',
  },
  {
    name: 'email',
    href: 'mailto:brujulavikinga.spj@gmail.com?subject=Consulta&body=Hola%20quiero%20información',
  },
]

import { Button } from '../ui/button'

export const Navbar = () => {
  return (
    <header>
      <div>
        {/* Logo + Marca */}
        <div>
          <img />
          <div>
            <h1> Brújula Vikinga</h1>
            <span>Handcrafted Gin</span>
          </div>
        </div>

        {/* Links */}
        <nav>
          <a href="">Inicio</a>
          <a href="">Características</a>
          <a href="">Opiniones</a>
        </nav>
        {/* CTA */}
        <Button>Comprar</Button>
      </div>
    </header>
  )
}

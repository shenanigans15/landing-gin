import { Button } from '../ui/button'

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center px-6 bg-black overflow-hidden"
    >
      {/* Glow ambiental sutil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Texto */}
        <div>
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Handcrafted Gin
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl text-neutral-100 font-viking leading-tight">
            Brújula Vikinga
          </h1>

          <p className="mt-6 text-neutral-400 max-w-md">
            Destilado en el norte argentino en pequeños lotes. Un gin con
            carácter, pensado para quienes buscan algo distinto.
          </p>

          <div className="mt-8 flex gap-4">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-5 text-base shadow-lg shadow-amber-500/20">
              Comprar
            </Button>

            <Button
              variant="outline"
              className="border-neutral-600 text-white hover:bg-neutral-800 px-6 py-5 text-base"
            >
              Ver productos
            </Button>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative flex justify-center">
          <img
            src="/gin-bottle.png"
            className="
              relative w-[300px] md:w-[360px] translate-y-6
              drop-shadow-[0_30px_80px_rgba(0,0,0,0.9)]
              brightness-95 contrast-110
            "
          />
        </div>
      </div>
    </section>
  )
}

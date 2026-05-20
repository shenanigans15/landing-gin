import { Button } from '../ui/button'

export const CTA = () => {
  return (
    <section className="relative bg-black py-28 px-6 text-center overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-amber-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Titulo */}
        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          Descubrí un gin distinto
        </h2>

        {/* Texto */}
        <p className="mt-6 text-neutral-400">
          Producción limitada. Cada botella es unica. Sólo 7 botellas por lote.
          No esperes a ques se agote.
        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-amber-600 hover:bg-amber-800 text-black px-8 py-6 text-lg">
            Comprar ahora
          </Button>

          <Button
            variant="outline"
            className="border-neutral-700 text-white hover:bg-neutral-800 px-8 py-6 text-lg"
          >
            Ver productos
          </Button>
        </div>

        {/* Nota sutil */}
        <p className="mt-6 text-xs text-neutral-500">
          Envíos disponibles a todo el país.
        </p>
      </div>
    </section>
  )
}

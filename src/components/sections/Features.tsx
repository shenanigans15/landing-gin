import { Leaf, FlaskConical, Mountain } from 'lucide-react'

export const Features = () => {
  return (
    <section
      id="features"
      className="relative py-24 px-6 overflow-hidden scroll-mt-60"
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/yungas.jpg"
          className="w-full h-full object-cover blur-sm scale-105"
        />

        {/* Oscurecer (más suave) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Un gin con identidad propia
        </h2>

        <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
          Cada botella refleja el origen, el proceso y el carácter de un
          destilado artesanal pensado para destacar.
        </p>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-left">
            <Leaf className="w-6 h-6 text-amber-500 mb-4" />
            <h3 className="text-lg font-semibold text-white">
              Ingredientes naturales
            </h3>
            <p className="text-neutral-400 mt-2">
              Botánicos seleccionados cuidadosamente para lograr un perfil
              único.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-left">
            <FlaskConical className="w-6 h-6 text-amber-500 mb-4" />
            <h3 className="text-lg font-semibold text-white">
              Producción artesanal
            </h3>
            <p className="text-neutral-400 mt-2">
              Destilado en pequeños lotes para mantener calidad y carácter.
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="bg-black/40 backdrop-blur-md border border-neutral-800 rounded-xl p-6 text-left">
            <Mountain className="w-6 h-6 text-amber-500 mb-4" />
            <h3 className="text-lg font-semibold text-white">
              Origen del norte
            </h3>
            <p className="text-neutral-400 mt-2">
              Inspirado en el entorno natural del norte argentino.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-black">

      {/* Glow background effect */}
      <div className="absolute w-[400px] h-[400px] bg-gold/20 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-white/10 blur-[100px] rounded-full bottom-10 right-10"></div>

      {/* Content box */}
      <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl">

        <p className="text-gold tracking-[5px] uppercase text-sm mb-4">
          Luxury Handmade Candles
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white">
          HIPNO-SPARK
        </h1>

        <p className="mt-6 max-w-2xl text-gray-300 text-lg leading-8">
          Illuminate your space with premium handcrafted candles that bring warmth,
          elegance, and unforgettable luxury moments.
        </p>

        <button className="mt-10 px-8 py-4 rounded-full bg-gold text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.35)]">
          Shop Collection →
        </button>

      </div>
    </section>
  );
}
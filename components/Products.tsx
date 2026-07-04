export default function Products() {
  const products = [
    {
      name: "Vanilla Dream",
      price: "₹699",
      desc: "Soft calming vanilla aroma for peaceful evenings.",
    },
    {
      name: "Rose Luxury",
      price: "₹799",
      desc: "Elegant rose fragrance for romantic vibes.",
    },
    {
      name: "Ocean Breeze",
      price: "₹899",
      desc: "Fresh aquatic scent that refreshes your space.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Featured Collection
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">

        {products.map((item, index) => (
          <div
            key={index}
            className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:border-gold/40"
          >
            
            <div className="h-40 bg-gradient-to-br from-zinc-800 to-black rounded-xl mb-6 flex items-center justify-center text-gold text-sm tracking-[3px]">
              HIPNO-SPARK
            </div>

            <h3 className="text-2xl font-semibold">{item.name}</h3>

            <p className="text-gray-400 mt-2 text-sm leading-6">
              {item.desc}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-gold font-bold text-lg">
                {item.price}
              </span>

              <button className="px-5 py-2 rounded-full bg-gold text-black text-sm font-semibold hover:scale-105 transition">
                Buy Now
              </button>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
export default function WhyChoose() {
  const points = [
    {
      title: "Premium Quality Wax",
      desc: "We use high-grade natural wax for clean and long-lasting burn.",
    },
    {
      title: "Handcrafted Design",
      desc: "Each candle is carefully handmade with attention to detail.",
    },
    {
      title: "Luxury Fragrances",
      desc: "Imported oils that create a rich and premium aroma experience.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950 text-white">

      <h2 className="text-center text-4xl md:text-5xl font-bold mb-14">
        Why Choose <span className="text-gold">HIPNO-SPARK</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {points.map((item, index) => (
          <div
            key={index}
            className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-gold/40 transition-all duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gold/10 border border-gold/30"></div>

            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
export default function Reviews() {
  const reviews = [
    {
      name: "Aarav Sharma",
      text: "Amazing luxury candles. The fragrance feels premium and long-lasting.",
      rating: 5,
    },
    {
      name: "Priya Verma",
      text: "Perfect for home decor and gifting. Truly elegant brand feel.",
      rating: 5,
    },
    {
      name: "Rohan Gupta",
      text: "Packaging and quality both are top-notch. Loved it!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">

      <h2 className="text-center text-4xl md:text-5xl font-bold mb-14">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-gold/40 transition"
          >

            <div className="text-gold mb-3">
              {"★".repeat(r.rating)}
            </div>

            <p className="text-gray-300 text-sm leading-6 mb-6">
              "{r.text}"
            </p>

            <h4 className="font-semibold text-white">
              - {r.name}
            </h4>

          </div>
        ))}

      </div>
    </section>
  );
}
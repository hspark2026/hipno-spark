import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-pink-50 to-white">
        <h1 className="text-5xl font-bold tracking-wide">
          HIPNO-SPARK
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Luxury Handmade Candles crafted to create warmth, elegance and unforgettable moments.
        </p>

        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Shop Collection
        </button>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Product 1 */}
          <div className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold">🕯️ Vanilla Dream</h3>
            <p className="text-gray-600 mt-2">₹699</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full">
              Buy Now
            </button>
          </div>

          {/* Product 2 */}
          <div className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold">🌹 Rose Luxury</h3>
            <p className="text-gray-600 mt-2">₹799</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full">
              Buy Now
            </button>
          </div>

          {/* Product 3 */}
          <div className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
            <h3 className="text-xl font-bold">🌊 Ocean Breeze</h3>
            <p className="text-gray-600 mt-2">₹899</p>
            <button className="mt-4 px-4 py-2 bg-black text-white rounded-full">
              Buy Now
            </button>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          HIPNO-SPARK is a luxury candle brand focused on handcrafted designs,
          premium fragrance oils, and aesthetic home decor experiences.
        </p>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t">
        © 2026 HIPNO-SPARK. All rights reserved.
      </footer>
    </main>
  );
}
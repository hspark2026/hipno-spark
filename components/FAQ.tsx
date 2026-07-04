"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What makes HIPNO-SPARK candles premium?",
      a: "We use high-quality wax, luxury fragrances, and handcrafted designs for a premium experience.",
    },
    {
      q: "Do you offer delivery?",
      a: "Yes, we provide fast and safe delivery across India.",
    },
    {
      q: "Are these candles long-lasting?",
      a: "Yes, our candles are designed for long burn time with consistent fragrance release.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black text-white">

      <h2 className="text-center text-4xl md:text-5xl font-bold mb-14">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">

        {faqs.map((item, i) => (
          <div
            key={i}
            className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-xl"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-5 font-semibold flex justify-between items-center"
            >
              {item.q}
              <span className="text-gold text-xl">
                {open === i ? "−" : "+"}
              </span>
            </button>

            {open === i && (
              <div className="p-5 pt-0 text-gray-300 text-sm">
                {item.a}
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}
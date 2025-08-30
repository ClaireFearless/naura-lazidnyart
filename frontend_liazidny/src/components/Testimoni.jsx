import React from 'react';

const testimonials = [
  {
    name: "FAY CHANNEL",
    comment: "Bagus baguus 😍 bahan berkualitas",
    rating: 5
  },
  {
    name: "June Sa",
    comment: "Motif sulamnya cantik bangeet, terima kasih seller❤️❤️❤️",
    rating: 5
  },
  {
    name: "titik soehari",
    comment: "Sulamannya rapi banget, ownernya ramah,recomendes banget deh produk2nya",
    rating: 5
  }
];

const Testimoni = () => {
  return (
    <section
      id="testimoni"
      className="py-16 px-6 md:px-12 text-body"
      style={{ backgroundColor: '#fdfcfb' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-heading mb-12">Apa Kata Mereka?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-left"
            >
              <p className="text-lg italic text-body mb-4">“{t.comment}”</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-600">{t.name}</span>
                <span className="text-yellow-500 text-lg">
                  {'★'.repeat(t.rating)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
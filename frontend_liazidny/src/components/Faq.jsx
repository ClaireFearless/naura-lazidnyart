import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Apa saja produk yang ditawarkan Lia Zidny Art?",
      a: "Kami menyediakan busana yang dijahit custom, produk dengan hiasan sulam pita seperti tas dan sandal, berbagai jenis batik (tulis, cap, printing), hingga penyewaan kostum karnaval."
    },
    {
      q: "Di mana lokasi Lia Zidny Art?",
      a: "Workshop kami berada di Jl. Dummy No. 123, Kota Imajinasi. Anda bisa mengunjungi kami dengan membuat janji terlebih dahulu melalui WhatsApp."
    },
    {
      q: "Apakah bisa memesan busana dengan desain sendiri?",
      a: "Tentu saja! Kami sangat senang bisa mewujudkan busana impian Anda. Silakan hubungi kami untuk mendiskusikan desain yang Anda inginkan."
    },
    {
      q: "Berapa lama proses pengerjaan pesanan custom?",
      a: "Lama pengerjaan bervariasi tergantung kerumitan desain, biasanya antara 2 minggu hingga 1 bulan. Kami akan memberikan estimasi waktu saat proses diskusi."
    },
    {
      q: "Bagaimana cara merawat kain batik agar warnanya awet?",
      a: "Disarankan untuk mencuci batik dengan tangan menggunakan sabun khusus (lerak) atau sampo. Hindari menjemur di bawah sinar matahari langsung agar warna tidak pudar."
    },
    {
      q: "Apakah kostum karnaval bisa disewa untuk luar kota?",
      a: "Bisa, dengan syarat dan ketentuan berlaku. Silakan hubungi kami untuk informasi lebih lanjut mengenai mekanisme penyewaan luar kota."
    }
  ];

  return (
    <section id="faq" className="bg-base py-16 px-6 md:px-12 text-body">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-heading mb-8">Pertanyaan Umum (FAQ)</h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              title={faq.q}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <p>{faq.a}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
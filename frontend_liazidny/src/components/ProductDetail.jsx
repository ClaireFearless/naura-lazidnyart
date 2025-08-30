// src/components/ProductDetail.jsx
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'   // ✅ import Header

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct]           = useState(null)
  const [related, setRelated]           = useState([])
  const [openDropdown, setOpenDropdown] = useState(null)

  // 1. Fetch detail produk
  useEffect(() => {
    fetch(`/api/produk/${id}/`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  // 2. Fetch produk serupa
  useEffect(() => {
    if (!product) return

    const kategoriUtama = (product.kategori || '').trim().toLowerCase()
    fetch(`/api/produk/?kategori=${encodeURIComponent(kategoriUtama)}`)
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(p => p.id !== product.id)
          .filter(p => ((p.kategori || '').trim().toLowerCase() === kategoriUtama))
        const random4 = filtered.sort(() => 0.5 - Math.random()).slice(0, 4)
        setRelated(random4)
      })
  }, [product])

  if (!product) {
    return <div className="py-20 text-center text-gray-500">Memuat detail produk...</div>
  }

  // 3. Siapkan FAQ dinamis
  const faqList = [
    { title: 'Detail Produk', content: product.detail_produk },
    { title: 'Spesifikasi',   content: product.spesifikasi   },
    { title: 'Ukuran',        content: product.ukuran        }
  ]

  return (
    <>
      <Header />

      {/* offset supaya section tidak tertutup Header */}
      <section className="mt-16 px-6 md:px-12 py-16 bg-base">
        <div className="max-w-4xl mx-auto">
          {/* Gambar & Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <img
              src={product.gambar}
              alt={product.nama}
              className="w-full h-80 object-cover rounded"
            />
            <div>
              <h1 className="text-2xl font-bold text-body mb-2">{product.nama}</h1>
              <p className="text-amber-600 text-xl font-bold mb-4">
                Rp {new Intl.NumberFormat('id-ID').format(product.harga)}
              </p>
              <p className="text-body mb-6">{product.deskripsi}</p>
            </div>
          </div>

          {/* FAQ Dinamis */}
          <div className="space-y-4 mb-10">
            {faqList.map((faq, idx) => (
              <div key={idx} className="border border-gray-300 rounded overflow-hidden">
                <button
                  className="w-full text-left px-4 py-3 font-semibold text-body
                             bg-white hover:bg-amber-100 hover:text-amber-700
                             transition-colors"
                  onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                >
                  {faq.title}
                </button>
                {openDropdown === idx && (
                  <div className="px-4 py-3 text-sm text-gray-600 border-t">
                    {faq.content || 'Belum ada informasi.'}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Keunggulan */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-body mb-4">Keunggulan Lia Zidny Art</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Bahan premium dan nyaman dipakai',
                'Desain eksklusif dan handmade',
                'Custom ukuran dan warna',
                'Garansi kualitas & layanan ramah'
              ].map((text, i) => (
                <div key={i} className="bg-white border border-gray-300 rounded p-4 shadow-sm">
                  <p className="text-sm text-body">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Produk Serupa */}
          <div className="mb-20">
            <h2 className="text-xl font-bold text-body mb-4">Produk Serupa</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.length > 0 ? related.map(item => (
                <Link
                  key={item.id}
                  to={`/produk/${item.id}`}
                  className="bg-white border rounded overflow-hidden shadow-sm block
                             hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-2">
                    <p className="text-sm text-body font-medium">{item.nama}</p>
                    <p className="text-amber-600 text-sm font-bold">
                      Rp {new Intl.NumberFormat('id-ID').format(item.harga)}
                    </p>
                  </div>
                </Link>
              )) : (
                <p className="text-center text-gray-500 col-span-4">Tidak ada produk serupa.</p>
              )}
            </div>
          </div>
        </div>

        {/* Tombol WhatsApp Fixed */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4 z-50">
          <a
            href={`https://wa.me/6281234567890?text=Saya tertarik dengan produk ${product.nama}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 rounded font-semibold text-white"
            style={{ backgroundColor: '#C1633D' }}
          >
            Beli via WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
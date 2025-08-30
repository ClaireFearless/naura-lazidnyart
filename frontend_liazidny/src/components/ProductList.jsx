// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [filtered, setFiltered] = useState([])
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [loading, setLoading] = useState(true)

  const categories = ['all', 'busana', 'sulam', 'batik', 'kostum']
  const sortOptions = [
    { value: 'default',    label: 'Urutkan' },
    { value: 'newest',     label: 'Terbaru' },
    { value: 'bestseller', label: 'Terlaris' },
    { value: 'price_low',  label: 'Harga Terendah' },
    { value: 'price_high', label: 'Harga Tertinggi' }
  ]

  // Ambil data dari API
  useEffect(() => {
    fetch('/api/produk/', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Terapkan filter & sort setiap kali products, category, atau sortBy berubah
  useEffect(() => {
    let temp = [...products]

    // 1. Filter by category (kecuali 'all')
    if (category !== 'all') {
      temp = temp.filter(p => {
        const prodCat = p.kategori || p.category
        return prodCat?.toLowerCase() === category
      })
    }

    // 2. Sort sesuai pilihan
    switch (sortBy) {
      case 'newest':
        temp.sort(
          (a, b) =>
            new Date(b.tanggal_dibuat) - new Date(a.tanggal_dibuat)
        )
        break
      case 'bestseller':
        temp.sort((a, b) => {
          const scoreA = (a.is_terlaris ? 1000 : 0) + (a.sales_count || 0)
          const scoreB = (b.is_terlaris ? 1000 : 0) + (b.sales_count || 0)
          return scoreB - scoreA
        })
        break
      case 'price_low':
        temp.sort((a, b) => (a.harga || 0) - (b.harga || 0))
        break
      case 'price_high':
        temp.sort((a, b) => (b.harga || 0) - (a.harga || 0))
        break
      default:
        break
    }

    setFiltered(temp)
  }, [products, category, sortBy])

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Memuat produk...
      </div>
    )
  }

  return (
    <section
      id="products"
      className="mt-16 px-6 md:px-12 py-16 bg-base"
    >
      <div className="max-w-6xl mx-auto">

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`py-2 px-5 rounded-full font-medium transition-colors
                ${category === cat
                  ? 'bg-heading text-white shadow'
                  : 'bg-white text-body border border-gray-300 hover:bg-amber-100 hover:text-amber-700'
                }`}
            >
              {cat === 'all'
                ? 'Semua'
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Count + Sort Dropdown */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-body">
            Menampilkan <strong>{filtered.length}</strong> produk
          </span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-body"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {filtered.map(item => (
            <Link
              to={`/produk/${item.id}`}
              key={item.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm
                        transform hover:scale-105 transition-transform duration-200 block"
            >
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                {item.is_terlaris && (
                  <span className="inline-block bg-amber-500 text-white text-xs px-2 py-1 rounded-full mb-2">
                    Terlaris
                  </span>
                )}
                <h3 className="text-body font-semibold mb-2">
                  {item.nama}
                </h3>
                <p className="text-amber-600 font-bold">
                  Rp {new Intl.NumberFormat('id-ID').format(item.harga)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList
import React from "react"
import "../style/style.css"

function Viewpopup({ product, onClose }) {
  if (!product) return null

  return (
    <div className="overlay">
      <form className="view-popup">
        <h2>Tentang Produk</h2>
        <div className="popup-input">
          <div>
            <label>Nama produk:</label>
            <br />
            <input type="text" value={product.name} readOnly />
            <br />

            <label>Gambar produk:</label>
            <br />
            <img src={product.image} alt={product.name} />
            <br />

            <label>Sku produk:</label>
            <br />
            <input type="text" value={product.sku} readOnly />
            <br />
          </div>

          <div>
            <label>Harga produk:</label>
            <br />
            <input type="number" value={product.price} readOnly />
            <br />

            <label>Kuantitas produk:</label>
            <br />
            <input type="number" value={product.quantity} readOnly />
            <br />

            <label>Marketplace produk:</label>
            <br />
            <input type="text" value={product.marketplace} readOnly />
            <br />
          </div>
        </div>
        <button onClick={onClose}>X</button>
      </form>
    </div>
  )
}

export default Viewpopup

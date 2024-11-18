import React, { useState, useEffect } from "react";
import "../style/style.css";

function EditPopup({ product, onClose, onSave }) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        sku: "",
        price: 0,
        quantity: 0,
        marketplace: "",
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                image: product.image,
                sku: product.sku,
                price: product.price,
                quantity: product.quantity,
                marketplace: product.marketplace,
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, id: product.id });
    };

    if (!product) return null;

    return (
        <div className="overlay">
            <form className="edit-popup" onSubmit={handleSubmit}>
                <h2>Edit Produk</h2>
                <div className="popup-input">
                    <div>
                        <label>Nama produk:</label><br />
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />
                        <label>Gambar produk:</label><br />
                        <img src={formData.image} alt={formData.name}/><br />
                        <label>Sku produk:</label><br />
                        <input type="text" name="sku" value={formData.sku} onChange={handleChange} required /><br />
                    </div>
                    <div>
                        <label>Harga produk:</label><br />
                        <input type="number" name="price" value={formData.price} onChange={handleChange} required /><br />
                        <label>Kuantitas produk:</label><br />
                        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required /><br />
                        <label>Marketplace produk:</label><br />
                        <input type="text" name="marketplace" value={formData.marketplace} onChange={handleChange} required /><br />
                    </div>
                </div>
                <div className="popup-button">
                    <button type="submit">Simpan</button>
                    <button type="button" onClick={onClose}>Batal</button>
                </div>
            </form>
        </div>
    );
}

export default EditPopup

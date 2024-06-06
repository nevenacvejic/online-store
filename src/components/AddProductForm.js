// *****************************************
//  * Komponenta za dodavanje novog proizvoda u katalog
//  * Ime komponente: AddProductForm
//  * Programer: Nevena Cvejić
//  * Verzija: 1.0 (8. april 2024.)
// *****************************************

import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    material: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/products', productData);
      // Uspesno dodat proizvod
      console.log('Proizvod uspešno dodat.');
    } catch (error) {
      console.error('Greška prilikom dodavanja proizvoda:', error);
    }
  };

  return (
    <div className="container">
      <h2>Dodaj novi proizvod</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Naslov</label>
          <input type="text" className="form-control" id="title" name="title" value={productData.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Opis</label>
          <textarea className="form-control" id="description" name="description" value={productData.description} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">Kategorija</label>
          <input type="text" className="form-control" id="category" name="category" value={productData.category} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="material" className="form-label">Materijal</label>
          <input type="text" className="form-control" id="material" name="material" value={productData.material} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Dodaj proizvod</button>
      </form>
    </div>
  );
};

export default AddProductForm;

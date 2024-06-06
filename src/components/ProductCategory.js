// *****************************************
//  * Komponenta za prikazivanje liste proizvoda iz određene kategorije
//  * Ime komponente: ProductCategory
//  * Programer: Nevena Cvejić
//  * Verzija: 1.0 (8. april 2024.)
// *****************************************

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [materialFilter, setMaterialFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products?category=${category}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  // Sortiranje proizvoda po ceni
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);

  // Primena filtera za materijal i veličinu
  const filteredProducts = sortedProducts.filter(product => {
    if (materialFilter && product.material !== materialFilter) return false;
    if (sizeFilter && product.size !== sizeFilter) return false;
    return true;
  });

  return (
    <div className="container">
      <h2>{category}</h2>
      <div className="row">
        <div className='col-md-3 mb-3'>
        <select  className='form-select' value={materialFilter} onChange={e => setMaterialFilter(e.target.value)}>
          <option value="">Izaberite materijal</option>
          <option value="Koža">Koža</option>
          <option value="Platno">Prevrnuta koža</option>
          <option value="Platno">Platno</option>
          <option value="Platno">Guma</option>
        </select>
        </div>
        <div className='col-md-3 mb-3'>
        <select className='form-select' value={sizeFilter} onChange={e => setSizeFilter(e.target.value)}>
          <option value="">Izaberite veličinu</option>
          {renderSizeOptions()}
        </select>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Opis: {product.description}</p>
                <p className="card-text">Kategorija: {product.category}</p>
                <p className="card-text">Materijal: {product.material}</p>
                <p className="card-text">Cena: ${product.price}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">Detalji</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  function renderSizeOptions() {
    const sizes = [];
    for (let i = 36; i <= 47; i++) {
      sizes.push(<option key={i} value={i}>{i}</option>);
    }
    return sizes;
  }
}

export default ProductCategory;

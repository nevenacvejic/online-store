// *****************************************
//  * Komponenta za prikazivanje liste kategorije proizvoda
//  * Ime komponente: ProductCategories
//  * Programer: Nevena Cvejić
//  * Verzija: 1.0 (8. april 2024.)
// *****************************************


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container">
      <h2>Kategorije Proizvoda</h2>
      <div className="row">
        {categories.map(category => (
          <div key={category.id} className="col-md-4 mb-3">
            <Link to={`/categories/${category.id}`} className="btn btn-primary">
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategories;

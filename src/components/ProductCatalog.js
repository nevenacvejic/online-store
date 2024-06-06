// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const ProductCatalog = ({ selectedCategory }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//         try {
//             let url = 'http://localhost:3000/catalog';
//             if (selectedCategory) {
//               url += `?category=${selectedCategory}`;
//             }
//             const response = await axios.get(url);
//             setProducts(response.data);
//           } catch (error) {
//             console.error('Error fetching products:', error);
//           }
//         };

//     fetchProducts();
//   }, [selectedCategory]);

//   return (
//     <div className="container">
//       <h2>Katalog proizvoda</h2>
//       <div className="row">
//         {products.map(product => (
//           <div key={product.id} className="col-md-4 mb-3 product-card">
//           <div className="card">
//             <img src={product.image} className="card-img-top img-fluid w-50 h-auto" />
//             <div className="card-body">
//               <h5 className="card-title">{product.title}</h5>
//               <p className="card-text">{product.description}</p>
//               <p className="card-text price">Cena: ${product.price}</p>
//               <Link to={`/product/${product.id}`} className="btn btn-details">Detalji</Link>
//             </div>
//           </div>
//         </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductCatalog;

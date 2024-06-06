// import React from 'react';
// import { Link } from 'react-router-dom';

// const CategoryProducts = ({ category }) => {
 
//   const products = [
//     {
//                id: 1,
//                title: 'Nike patike',
//                image: '/images/patike1.jpg',
//                price: 100,
//                description: 'Patike za trčanje',
//                size: '40',
//                material: 'Platno'
//             },
//   ];

//   return (
//     <div className="container">
//       <h2>{category}</h2>
//       <div className="row">
//         {products.map(product => (
//           <div key={product.id} className="col-md-4 mb-3">
//             <div className="card">
//               <img src={product.image} className="card-img-top" alt={product.title} />
//               <div className="card-body">
//                 <h5 className="card-title">{product.title}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-text">Cena: ${product.price}</p>
//                 <Link to={`/product/${product.id}`} className="btn btn-primary">Detalji</Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CategoryProducts;

// *****************************************
//  * Komponenta za prikazivanje cipela na štiklu
//  * Ime komponente: Heels
//  * Programer: Nevena Cvejić
//  * Verzija: 1.0 (10. april 2024.)
// *****************************************

import React from 'react';

const Heels = ({ products }) => {

   

    return (
        <div>
            <h2 className='text-center'>Štikle</h2>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-3">
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Materijal: {product.material}</p>
                                <p className="card-text">Veličina: {product.size}</p>
                                <p className="card-text">Cena: ${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Heels;

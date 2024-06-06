// *****************************************
//  * Komponenta za prikazivanje kataloga proizvoda
//  * Ime komponente: Catalog
//  * Programer: Nevena Cvejić
//  * Verzija: 1.0 (8. april 2024.)
// *****************************************

import React from 'react';
import { Link } from 'react-router-dom';


  const Catalog = () => {
 

    return (
        <div className="container-fluid p-0 position-relative" style={{ backgroundImage: `url('/images/catalog.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <div className="container text-center py-5">
          <h2 className="mb-5">Katalog Proizvoda</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Link className='btn btn-dark btn-lg text-white text-decoration-none mb-2 d-block' to="/sneakers">Patike</Link>
              <Link className='btn btn-dark btn-lg text-white text-decoration-none mb-2 d-block' to="/shoes">Cipele</Link>
              <Link className='btn btn-dark btn-lg text-white text-decoration-none mb-2 d-block' to="/heels">Štikle</Link>
              <Link className='btn btn-dark btn-lg text-white text-decoration-none mb-2 d-block' to="/boots">Čizme</Link>
              <Link className='btn btn-dark btn-lg text-white text-decoration-none mb-2 d-block' to="/slippers">Papuče</Link>
            </div>
          </div>
        </div>
        
      </div>
    );
  }

export default Catalog;


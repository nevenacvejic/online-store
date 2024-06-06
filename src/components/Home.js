// *****************************************
//  * Komponenta za prikazivanje početne strane
//  * Ime komponente: Home
//  * Programer: Nevena Cvejić
//  * Verzija: 1.0 (8. april 2024.)
// *****************************************
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <img src="/images/shoes.jpg" alt="Welcome" className="img-fluid mb-4" />
      <div className="jumbotron">
        <h1 className="display-4">Dobrodošli u online prodavnicu obuće</h1>
        <p className="lead">Ovde možete pronaći najbolje proizvode po najpovoljnijim cenama.</p>
        <hr className="my-4" />
        <Link className="btn btn-dark btn-lg" to="/catalog" role="button">Katalog proizvoda</Link>
      </div>
    </div>
  );
}

export default Home;

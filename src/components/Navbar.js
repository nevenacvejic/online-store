// *****************************************
//  * Komponenta za prikazivanje navbar-a u aplikaciji
//  * Ime komponente: Navbar
//  * Programer: Nevena Cvejić
//  * Verzija: 1.0 (8. april 2024.)
// *****************************************


import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = ({ isAdmin, isLoggedIn }) => {  //da li je korisnik administrator, i da li je korisnik prijavljen 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className="container">
        <Link className='navbar-brand' to='/'>Online Store</Link>
        <button className='navbar-toggler' type='button' onClick={toggleMenu}>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Početna</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/catalog'>Katalog proizvoda</Link>
            </li>
            {isAdmin && (
              <li className='nav-item'>
                <Link className='nav-link' to='/admin'>Administracija</Link>
              </li>
            )}
          </ul>
          <ul className='navbar-nav ml-auto'>
            {isLoggedIn ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/logout'>Odjava</Link>
                </li>
              </>
            ) : (
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>Prijava</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

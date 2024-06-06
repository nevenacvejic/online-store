// *****************************************
//  * Komponenta za prijavljivanje administratora
//  * Ime komponente: Login
//  * Programer: Nevena Cvejić
//  * Verzija: 1.0 (10. april 2024.)
// *****************************************

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setIsAdmin }) => {  //funkcije koje se koriste za postavljanje stanja prijavljenog korisnika i administratorskih prava
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  //funkcija za navigaciju između različitih ruta

  const handleSubmit = async (e) => {   //handleSubmit funkcija - poziva se prilikom slanja forme
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      const { isAdmin } = response.data;  //izvlači informaciju o tome da li je korisnik administrator
      setIsLoggedIn(true);
      setIsAdmin(isAdmin);
      navigate('/'); 
    } catch (error) {
      setError('Pogresno korisnicko ime ili lozinka. Pokusajte ponovo.');
    }
  };

  return (
    <div className="container">
      <h2>Prijava na administratorski panel</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Korisničko ime</label>
          <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Lozinka</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Prijavi se</button>
      </form>
      {error && <p className="text-danger mt-2">{error}</p>}
    </div>
  );
};

export default Login;

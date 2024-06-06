import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog';
import ProductDetails from './components/ProductDetails'; 
import ProductCategory from './components/ProductCategory';
import ProductCategories from './components/ProductCategories';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Profile from './components/Profile';
import Login from './components/Login';

import Sneakers from './components/Sneakers';
import Shoes from './components/Shoes';
import Heels from './components/Heels';
import Boots from './components/Boots';
import Slippers from './components/Slippers';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); //da li je korisnik administrator
  const [isLoggedIn, setIsLoggedIn] = useState(false); //da li je korisnik prijavljen




  const sneakersData = [
    {
        id: 1,
        name: 'Nike Air Max',
        image: '/images/airmax.png',
        material: 'Koža',
        size: 42,
        price: 100
        
    },
    {
        id: 2,
        name: 'Converse',
        image: 'images/converse.png',
        material: 'Platno',
        size: 39,
        price: 80
        
    },
    {
      id: 3,
      name: 'Adidas Superstar',
      image: 'images/superstar.png',
      material: 'Platno',
      size: 37,
      price: 100
      
  },
  {
    id: 4,
    name: 'Adidas Campus',
    image: 'images/campus.png',
    material: 'Prevrnuta koža',
    size: 40,
    price: 100
    
},
{
  id: 5,
  name: 'Jordan',
  image: 'images/jordan.png',
  material: 'Koža',
  size: 45,
  price: 100
  
},
{
  id: 6,
  name: 'New Balance',
  image: 'images/nb.png',
  material: 'Koža',
  size: 38,
  price: 100
  
},
    
];

const shoesData = [
  {
      id: 1,
      name: 'Muške brapn cipele',
      image: 'images/shoe1.png',
      material: 'Koža',
      size: 42,
      price: 150
  },
  {
      id: 2,
      name: 'Muške crne cipele',
      image: 'images/shoe2.png',
      material: 'Koža',
      size: 40,
      price: 120
  },
  {
    id: 2,
    name: 'Muške šarene cipele',
    image: 'images/shoe3.png',
    material: 'Koža',
    size: 43,
    price: 100
}
];

const heelsData = [
  {
    id: 1,
    name: 'Leopard sandale na štiklu',
    image: 'images/heels1.png',
    material: 'Prevrnuta koža',
    size: 38,
    price: 100
  },
  {
    id: 2,
    name: 'YSL sandale na štiklu',
    image: 'images/heels2.png',
    material: 'Koža',
    size: 37,
    price: 250
  },
  {
    id: 3,
    name: 'Crne sandale na štiklu',
    image: 'images/heels3.png',
    material: 'Prevrnuta koža',
    size: 37,
    price: 150
  },
  {
    id: 4,
    name: 'Srebrne sandale na štiklu',
    image: 'images/heels4.png',
    material: 'Koža',
    size: 39,
    price: 150
  },
  {
    id: 4,
    name: 'Crvene cipele na štiklu',
    image: 'images/heels5.png',
    material: 'Koža',
    size: 39,
    price: 100
  },
  {
    id: 4,
    name: 'Plave cipele na štiklu',
    image: 'images/heels6.png',
    material: 'Koža',
    size: 40,
    price: 280
  }
];

const slippersData = [
  {
    id: 1,
    name: 'Plave ženske papuče',
    image: 'images/slippers1.png',
    material: 'Guma',
    size: 38,
    price: 80
  },
  {
    id: 2,
    name: 'Zelene ženske papuče',
    image: 'images/slippers2.png',
    material: 'Guma',
    size: 39,
    price: 100
  },
  {
    id: 3,
    name: 'Braon ženske papuče',
    image: 'images/slippers3.png',
    material: 'Koža',
    size: 39,
    price: 50
  },
  {
    id: 3,
    name: 'Hermes ženske papuče',
    image: 'images/slippers4.png',
    material: 'Koža',
    size: 36,
    price: 250
  },
  {
    id: 3,
    name: 'Hermes muške papuče',
    image: 'images/slippers5.png',
    material: 'Koža',
    size: 43,
    price: 250
  },
  {
    id: 3,
    name: 'Nike muške papuče',
    image: 'images/slippers6.png',
    material: 'Guma',
    size: 45,
    price: 40
  }
];


const bootsData = [
  {
    id: 1,
    name: 'Crne čizme na štiklu',
    image: 'images/boots.png',
    material: 'Koža',
    size: 39,
    price: 180
  },
  {
    id: 2,
    name: 'Duboke čizme na štiklu',
    image: 'images/boots1.png',
    material: 'Koža',
    size: 38,
    price: 150
  },
  {
    id: 3,
    name: 'Muške braon čizme',
    image: 'images/boots2.png',
    material: 'Koža',
    size: 45,
    price: 90
  },
  {
    id: 4,
    name: 'Muške cipele',
    image: 'images/boots3.png',
    material: 'Prevrnuta koža',
    size: 47,
    price: 180
  },
  {
    id: 5,
    name: 'Ugg ženske čizme',
    image: 'images/boots4.png',
    material: 'Platno',
    size: 37,
    price: 200
  }


];



  return (
    <Router>
      <div className="App">
        <Navbar isAdmin={isAdmin} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/categories/:categoryId' element={<ProductCategory />} />
          <Route path='/contact' element={<Contact />} />
          {isAdmin && <Route path='/admin' element={<Admin />} />}
          {isLoggedIn && <Route path='/profile' element={<Profile />} />}
          
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />

          <Route path='/sneakers' element={<Sneakers products={sneakersData} />} />
          <Route path='/shoes' element={<Shoes products={shoesData} />} />
          <Route path="/heels" element={<Heels products={heelsData} />} />
          <Route path="/boots" element={<Boots products={bootsData} />} />
          <Route path="/slippers" element={<Slippers products={slippersData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

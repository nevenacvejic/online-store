// *****************************************
//  * Komponenta za prikazivanje profila admina
//  * Ime komponente: Admin
//  * Programer: Nevena Cvejić
//  * Verzija: 1.0 (10. april 2024.)
// *****************************************

import axios from "axios";
import { useState } from "react"

//definicija komponente Admin
const Admin = ({ user }) => {            //funkcionalna komponenta koja prihvata "user" kao prop
    const [newProductData, setNewProductData] = useState({  // postavljanje inicijalnog stanja "newProductData" koje sadrži atribute nekog novog proizvoda
        title: '',
        description: '',
        category: '',
        material: '',
        price: '',
        image: '',
    });

    const handleChange = (e) => {  //handleChange funkcija - poziva se pri promeni vrednosti u input poljima 
        const { name, value } = e.target;
        setNewProductData({ ...newProductData, [name]: value}); //ažuriranje stanja u polju
    };

    const handleSubmit = async(e) => { //handleSubmit funkcija - poziva se prilikom slanja forme
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/products', newProductData);
            console.log('Proizvod uspešno dodat.');

            setNewProductData({
                title: '',
                description: '',
                category: '',
                material: '',
                price: '',
                image: '',
            });
        } catch (error) {
            console.error('Greška prilikom dodavanja proizvoda:', error);
        }
    
    };

    return (
        <div>
            <h2>Profil administratora</h2>
            <p>Dobrodošli, {user.username}! </p>
            <h3>Dodaj novi proizvod</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Naslov" value={newProductData.title} onChange={handleChange} required/>
                <textarea name="description" placeholder="Opis" value={newProductData.description} onChange={handleChange} required/>
                <input type="text" name="category" placeholder="Kategorija" value={newProductData.category} onChange={handleChange} required/>
                <input type="text" name="material" placeholder="Materijal" value={newProductData.material} onChange={handleChange} required/>
                <input type="text" name="price" placeholder="Cena" value={newProductData.price} onChange={handleChange} required/>
                <input type="text" name="image" placeholder="URL slike" value={newProductData.image} onChange={handleChange} required/>
                <button type="submit">Dodaj proizvod</button>
            </form>
        </div>
    )
};

export default Admin;
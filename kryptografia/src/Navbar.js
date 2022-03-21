import React from 'react';
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

function Navbar() {
    return (
        <div>
            <Link to="/railfence">Rail fence</Link>
            <Link to="/macierzoweA">Przestawienia macierzowe A</Link>
            <Link to="/macierzoweB">Przestawienia macierzowe B</Link>
            <Link to="/macierzoweC">Przestawienia macierzowe C</Link>
            <Link to="/cezar">Szyfr Cezara</Link>
            <Link to="/vigenere">Szyfrowanie Vigenere'a</Link>
        </div>
    )
}

export default Navbar
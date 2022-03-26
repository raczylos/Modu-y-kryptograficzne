import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/Navbar.css'

function Navbar() {
    return (
        <div>
            <NavLink className={({ isActive }) => isActive ? 'active' : '' } to="/railfence">Rail fence</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : '' } to="/macierzoweA">Przestawienia macierzowe A</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : '' } to="/macierzoweB">Przestawienia macierzowe B</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : '' } to="/macierzoweC">Przestawienia macierzowe C</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : '' } to="/cezar">Szyfr Cezara</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active' : '' } to="/vigenere">Szyfrowanie Vigenere'a</NavLink>
        </div>
    )
}

export default Navbar
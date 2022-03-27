import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'
import MacierzoweB from './MacierzoweB';
import SzyfrCezara from './SzyfrCezara';

function Home() {
    return (
        <div>
            <h1>Kryptografia</h1>
            <Navbar />
            <Routes>
                <Route path="/railfence" element={<div />}></Route>
                <Route path="/macierzoweA" element={<div />}></Route>
                <Route path="/macierzoweB" element={<MacierzoweB />}></Route>
                <Route path="/macierzoweC" element={<div />}></Route>
                <Route path="/cezar" element={<SzyfrCezara />}></Route>
                <Route path="/vigenere" element={<div />}></Route>
            </Routes>
        </div>
    )
}

export default Home
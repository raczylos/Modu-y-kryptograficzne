import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Kryptografia</h1>
            <Navbar />
            <Routes>
                <Route path="/railfence" element={<div />}></Route>
                <Route path="/macierzoweA" element={<div />}></Route>
                <Route path="/macierzoweB" element={<div />}></Route>
                <Route path="/macierzoweC" element={<div />}></Route>
                <Route path="/cezar" element={<div />}></Route>
                <Route path="/vigenere" element={<div />}></Route>
            </Routes>
        </div>
    )
}

export default Home
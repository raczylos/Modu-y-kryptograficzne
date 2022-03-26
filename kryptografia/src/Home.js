import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'
import Vigenere from './Vigenere';
import MatrixC from './MatrixC';

function Home() {
    return (
        <div>
            <h1>Kryptografia</h1>
            <Navbar />
            <Routes>
                <Route path="/railfence" element={<div />}></Route>
                <Route path="/macierzoweA" element={<div />}></Route>
                <Route path="/macierzoweB" element={<div />}></Route>
                <Route path="/macierzoweC" element={<MatrixC />}></Route>
                <Route path="/cezar" element={<div />}></Route>
                <Route path="/vigenere" element={<Vigenere />}></Route>
            </Routes>
        </div>
    )
}

export default Home
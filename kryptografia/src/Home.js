import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'
import MacierzoweB from './MacierzoweB';
import SzyfrCezara from './SzyfrCezara';
import Vigenere from './Vigenere';
import MatrixC from './MatrixC';
import Railfence from './railfence';
import MacierzoweA from './MacierzoweA';

function Home() {
    return (
        <div>
            <h1>Kryptografia</h1>
            <Navbar />
            <Routes>
                <Route path="/railfence" element={<Railfence />}></Route>
                <Route path="/macierzoweA" element={<MacierzoweA />}></Route>
                <Route path="/macierzoweB" element={<MacierzoweB />}></Route>
                <Route path="/macierzoweC" element={<MatrixC />}></Route>
                <Route path="/cezar" element={< SzyfrCezara/>}></Route>
                <Route path="/vigenere" element={<Vigenere />}></Route>
            </Routes>
        </div>
    )
}

export default Home
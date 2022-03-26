import React, { useState } from 'react';
function Vigenere() {
    const [input, setInput] = useState('')
    const [key, setKey] = useState('')
    const [encoded, setEncoded] = useState('')
    const vigCipher = (input, key) => {
        let keyIdx = 0
        let keyLen = key.length
        let encodedResult = ""
        let shift = 0
        const base = ('z'.charCodeAt() - 'a'.charCodeAt() + 1)
        let inputLen = input.length
        for(let i = 0; i < inputLen; i++) {
            const regex = /^[a-zA-Z]*$/
            if(!regex.test(input[i])) { 
                encodedResult += input[i]
                continue
            }
            shift = key[keyIdx].toLowerCase().charCodeAt() - 'a'.charCodeAt()
            let newLetterCode = (input[i].toLowerCase().charCodeAt() - 'a'.charCodeAt() + shift) % base + 'a'.charCodeAt()
            encodedResult += String.fromCharCode(newLetterCode)
            keyIdx = (keyIdx + 1) % keyLen
        }
        setEncoded(encodedResult)
        return encodedResult
    }
    return (
        <div className='form'>
            <label>Tekst</label>
            <input type="text" onChange={(e) => {setInput(e.target.value)}}></input>
            <label>Klucz</label>
            <input type="text" onChange={(e) => {setKey(e.target.value)}}></input>
            <button onClick={() => {vigCipher(input, key)}}>Zaszyfruj</button>
            <label>Wynik</label>
            <textarea disabled id="encoded-text" placeholder="zakodowany tekst" value={encoded}></textarea>
        </div>
    )
}

export default Vigenere
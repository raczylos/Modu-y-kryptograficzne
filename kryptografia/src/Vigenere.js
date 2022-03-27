import { Divider, Switch } from '@mui/material';
import React, { useState } from 'react';
import './styles/Vigenere.css'
function Vigenere() {
    const [input, setInput] = useState('')
    const [key, setKey] = useState('')
    const [encoded, setEncoded] = useState('')
    const [isDecipher, setIsDecipher] = useState(false)
    
    const vigCipher = (text, key) => {
        if(isDecipher){
            text = encoded
        }
        text.toLowerCase()
        let keyIdx = 0
        let keyLen = key.length
        let encodedResult = ""
        let shift = 0
        const base = ('z'.charCodeAt() - 'a'.charCodeAt() + 1)
        let inputLen = text.length
        for(let i = 0; i < inputLen; i++) {
            const regex = /^[a-zA-Z]*$/
            if(!regex.test(text[i])) { 
                encodedResult += text[i]
                continue
            }
            shift = key[keyIdx].toLowerCase().charCodeAt() - 'a'.charCodeAt()
            let newLetterCode = 0
            if(isDecipher) {
                newLetterCode = (text[i].charCodeAt() - 'a'.charCodeAt() - shift) % base + 'a'.charCodeAt()
                if(newLetterCode < 'a'.charCodeAt()) {
                    newLetterCode += base
                }
            }
            else {
                newLetterCode = (text[i].charCodeAt() - 'a'.charCodeAt() + shift) % base + 'a'.charCodeAt()
            }
            encodedResult += String.fromCharCode(newLetterCode)
            keyIdx = (keyIdx + 1) % keyLen
        }
        setEncoded(encodedResult)
        return encodedResult
    }
    return (
        <div className='form'>
            <div className='switch-wrapper'>
                <Switch checked={isDecipher} onChange={(e) => { setIsDecipher(e.target.checked)}} color="secondary"></Switch>
                <label>Deszyfrowanie</label>
            </div>
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
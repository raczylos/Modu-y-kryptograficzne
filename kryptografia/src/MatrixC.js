import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function MatrixC() {
    const [input, setInput] = useState('')
    const [key, setKey] = useState('')
    const [encoded, setEncoded] = useState('')

    const columnOrder = (key) => {
        const sortedKey = key.replace(/\s/g, '').split('').sort()
        let order = [...sortedKey]
        let sortedObj = {}
        for(let letter of sortedKey){
            sortedObj[letter] = true
        }
        let count = 1
        for(let letter in sortedObj) {
            for(let i = 0; i < key.length; i++) {
                if(key[i] === letter) {
                    order[i] = count
                    count++
                }
            }
        }
        return order
    }

    const matrixCipher = (input, key) => {
        input = input.replace(/\s/g, '')
        let order = columnOrder(key)
        let matrix = []
        let encodedResult = ""
        const inputLen = input.length
        let cursor = 0 // current index
        for(let num of order) {
            let word = []
            for(let i = 0; (i < num && cursor < inputLen); i++){
                word.push(input[cursor])
                cursor++
            }
            matrix.push(word)
            if(cursor >= inputLen){
                break
            }
        }
        for(let col of order){
            let newWord = ""
            for(let row of matrix) {
                newWord += row[col-1] ?? ''
            }
            if(!newWord) {
                continue
            }
            encodedResult += newWord + " "
        }
        setEncoded(encodedResult)
    }
    return (
        <div className='form'>
            <label>Tekst</label>
            <input type="text" onChange={(e) => {setInput(e.target.value)}}></input>
            <label>Klucz</label>
            <input type="text" onChange={(e) => {setKey(e.target.value)}}></input>
            <button onClick={() => {matrixCipher(input, key)}}>Zaszyfruj</button>
            <label>Wynik</label>
            <textarea disabled id="encoded-text" placeholder="zakodowany tekst" value={encoded}></textarea>
        </div>
    )
}

export default MatrixC
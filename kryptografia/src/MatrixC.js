import { Switch } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MatrixC() {
    const [input, setInput] = useState('')
    const [key, setKey] = useState('convenience')
    const [encoded, setEncoded] = useState('')
    const [isDecipher, setIsDecipher] = useState(false)

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

    const encoding = (matrix, order) => {
        let result = ""
        for(let col of order){
            let newWord = ""
            for(let row of matrix) {
                newWord += row[col-1] ?? ''
            }
            if(!newWord) {
                continue
            }
            result += newWord + " "
        }
        return result
    }

    const matrixDecipher = (text, key) => {
        const keyLen = key.length
        let order = columnOrder(key)
        let matrix = new Array(keyLen)
        let textArr = text.split(" ")
        let encodedResult = ""
        for(let i = 0; i < keyLen; i++) {
            let idx = order.indexOf(i + 1)
            matrix[i] = textArr[idx]
        }
        for(let num of order) {
            let currentOrder = num
            while(currentOrder > 0){
                for(let i = 0; i < matrix.length; i++) {
                    encodedResult += matrix[i][0] ?? ''
                    matrix[i] = matrix[i].slice(1)
                    currentOrder--
                    if(currentOrder <= 0){
                        break
                    }
                }
            }
        }
        setEncoded(encodedResult)
    }

    const matrixCipher = (text, key) => {
        if(isDecipher) {
            matrixDecipher(encoded, key)
            return
        }
        text = text.replace(/\s/g, '')
        let order = columnOrder(key)
        let matrix = []
        let encodedResult = ""
        const inputLen = text.length
        let cursor = 0 // current index
        for(let num of order) {
            let word = []
            for(let i = 0; (i < num && cursor < inputLen); i++){
                word.push(text[cursor])
                cursor++
            }
            matrix.push(word)
            if(cursor >= inputLen){
                break
            }
        }
        encodedResult = encoding(matrix, order)
        setEncoded(encodedResult)
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
            <input type="text" value={key} onChange={(e) => {setKey(e.target.value)}}></input>
            <button onClick={() => {matrixCipher(input, key)}}>Zaszyfruj</button>
            <label>Wynik</label>
            <textarea disabled id="encoded-text" placeholder="zakodowany tekst" value={encoded}></textarea>
        </div>
    )
}

export default MatrixC
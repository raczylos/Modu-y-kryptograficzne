import React, { useState } from "react";

function MacierzoweB() {
	const [key, setKey] = useState();
	const [secretMessage, setSecretMessage] = useState();
	const [encoded, setEncoded] = useState();
	const [decipher, setDecipher] = useState();

	const setOrderOfLettersInKey = () => {
		let splitKey = key.replace(/\s/g, "").split("");
		let sortedKey = key.replace(/\s/g, "").split("").sort();
		let sortedObj = {};

		for (let letter of sortedKey) {
			sortedObj[letter] = true;
		}
		// let order = {}
		let orderArr = [];
		let count = 0;
		for (let letter in sortedObj) {
			for (let i = 0; i < splitKey.length; i++) {
				if (splitKey[i] === letter) {
					// orderArr[i] = count
					orderArr[count] = i;
					// order[count] = letter
					count++;
				}
			}
		}

		// return order
		return orderArr;
	};

	const matrixEncrypt = () => {
		let order = setOrderOfLettersInKey();

		let messageWithoutWhiteSpace = secretMessage
			.replace(/\s/g, "")
			.split("");
		let keyWithoutWhiteSpace = key.replace(/\s/g, "").split("");
		let arrayLength = keyWithoutWhiteSpace.length;
		let arrayHeigh = Math.ceil(
			messageWithoutWhiteSpace.length / arrayLength
		);

		let array = [];

		let index = 0;

		for (let i = 0; i < arrayHeigh; i++) {
			let arrPom = [];
			for (let j = 0; j < arrayLength; j++) {
				arrPom.push(messageWithoutWhiteSpace[index]);
				index++;
			}
			array.push(arrPom);
			// array[i] = arrPom
		}
		console.log(array);

		console.log(order);
		let encodedChar = [];
		let encodedString = [];
		for (let i = 0; i < arrayLength; i++) {
			for (let j = 0; j < arrayHeigh; j++) {
				if (array[j][order[i]] !== undefined) {
					encodedChar.push(array[j][order[i]]);
				}
			}
			encodedString.push(encodedChar.join(""));
			encodedChar.length = 0;
		}

		console.log(encodedString);

		setEncoded(encodedString);

		return encodedString;
	};

	const matrixDecrypt = () => {
		let order = setOrderOfLettersInKey();

		let keyWithoutWhiteSpace = key.replace(/\s/g, "").split("");
		let arrayLength = keyWithoutWhiteSpace.length;

		let encodedArr = encoded.join("");

		let arrayHeigh = Math.ceil(encodedArr.length / arrayLength);

		let array = [];

		for (let i = 0; i < arrayHeigh; i++) {
			let arrPom = [];
			for (let j = 0; j < arrayLength; j++) {
				if (encoded[order.indexOf(j)][i] != undefined) {
					arrPom.push(encoded[order.indexOf(j)][i]);
				}
			}
			array.push(arrPom);
		}

		console.log(array);

		setDecipher(array);
		return array;
	};

	return (
		<div>
			<input
				placeholder="Podaj klucz"
				onChange={(e) => setKey(e.target.value)}
			/>
			<input
				placeholder="Podaj wiadomość do zaszyfrowania"
				onChange={(e) => setSecretMessage(e.target.value)}
			/>
			<button onClick={matrixEncrypt}>Szyfruj</button>
			<button onClick={matrixDecrypt}>Deszyfruj</button>
			<p>Wiadomość zaszyfrowana</p>
			<input value={encoded} />
			<p>Wiadomość oddeszyfrowana</p>
			<input value={decipher} />
		</div>
	);
}

export default MacierzoweB;

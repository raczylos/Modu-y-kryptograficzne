import React, { useState } from "react";

function SzyfrCezara() {
	const [key, setKey] = useState();
	const [secretMessage, setSecretMessage] = useState();
	const [encoded, setEncoded] = useState();
	const [decipher, setDecipher] = useState();

	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let shiftedAlphabet = "";

	for (let i = 0; i < alphabet.length; i++) {
		let offset = (i + parseInt(key)) % alphabet.length;
		
		shiftedAlphabet += alphabet[offset];
	}


	const encode = () => {

		let result = "";
		let messageLowerCase = secretMessage.toLowerCase();
        console.log(shiftedAlphabet)

		for (let i = 0; i < secretMessage.length; i++) {
			result += shiftedAlphabet[alphabet.indexOf(messageLowerCase[i])];
		}
		console.log(result);
		setEncoded(result);
		return result;
	};

	const decode = () => {
		
		let result = "";
		let messageLowerCase = encoded.toLowerCase();
       
		for (let i = 0; i < encoded.length; i++) {
			result += alphabet[shiftedAlphabet.indexOf(messageLowerCase[i])];
		}
		console.log(result);
		setDecipher(result);
		return result;
	};

	return (
		<div>
			<input
				type="number"
				placeholder="Podaj klucz"
				onChange={(e) => setKey(e.target.value)}
			/>
			<input
				placeholder="Podaj wiadomość do zaszyfrowania"
				onChange={(e) => setSecretMessage(e.target.value)}
			/>
			<button onClick={encode}>Szyfruj</button>
			<button onClick={decode}>Deszyfruj</button>
			<p>Wiadomość zaszyfrowana</p>
			<input value={encoded} />
			<p>Wiadomość odszyfrowana</p>
			<input value={decipher} />
		</div>
	);
}
export default SzyfrCezara;

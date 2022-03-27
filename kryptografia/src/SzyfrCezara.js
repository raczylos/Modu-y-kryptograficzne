import React, { useState } from "react";

function SzyfrCezara() {
	const [key, setKey] = useState();
	const [secretMessage, setSecretMessage] = useState();
	const [encoded, setEncoded] = useState();
	const [decipher, setDecipher] = useState();

	const encode = () => {
		let alphabet = "abcdefghijklmnopqrstuvwxyz";
		let shiftedAlphabet = "";


		for (let i = 0; i < alphabet.length; i++) {
			let offset = (i + parseInt(key)) % alphabet.length;
            
			shiftedAlphabet += alphabet[offset];
		}

		let result = "";
		let messageLowerCase;
		messageLowerCase = secretMessage.toLowerCase();
        
        console.log(shiftedAlphabet)

		for (let i = 0; i < secretMessage.length; i++) {
			result += shiftedAlphabet[alphabet.indexOf(messageLowerCase[i])];
		}
		console.log(result);
		setEncoded(result);
		return result;
	};

	const decode = () => {
		let alphabet = "abcdefghijklmnopqrstuvwxyz";
		let shiftedAlphabet = "";

		for (let i = 0; i < alphabet.length; i++) {
			let offset = (i + parseInt(key)) % alphabet.length;
			shiftedAlphabet += alphabet[offset];
		}
        
		let result = "";
		let messageLowerCase = encoded.toLowerCase();
       
		for (let i = 0; i < encoded.length; i++) {
			let index = shiftedAlphabet.indexOf(messageLowerCase[i]);
			result += alphabet[index];
		}
		console.log(result);
		setDecipher(result);
		return result;
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
			<button onClick={encode}>Szyfruj</button>
			<button onClick={decode}>Deszyfruj</button>
			<p>Wiadomość zaszyfrowana</p>
			<input value={encoded} />
			<p>Wiadomość oddeszyfrowana</p>
			<input value={decipher} />
		</div>
	);
}
export default SzyfrCezara;

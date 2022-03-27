import React from 'react';

function Algorithm(props) {
    let word = props.text;
    let newWord = word;
    let keyText = props.keyText;
    let n = 0;

    for (let a = 0; a < keyText.length; a++) {
        if (keyText.charAt(a) !== '-') {
            n++;
        }
    }

    for (let a = 0, nr = 0; a < word.length; a += n) {
        for (let a2 = 0, a3 = a + a2; a2 < keyText.length; a2++) {
            if (keyText.charAt(a2) !== '-') {
                let v = (nr * n) + keyText.charCodeAt(a2) - 49;
                if (v < word.length) {
                    if (props.isCiphering)
                        newWord = setCharAt(newWord, a3, word.charAt(v));
                    else
                        newWord = setCharAt(newWord, v, word.charAt(a3));
                    a3++;
                }
            }
        }
        nr++;
    }

    if (props.isCiphering) //Potrzebne poniewaz by zaczelo rozszyfrowywac
        return <p>Ciphering: {newWord}</p>;
    else
        return <p>Deciphering: {newWord}</p>;
}

function setCharAt(text, id, c) {
    if (id > text.length - 1)
        return text;
    return text.substring(0, id) + c + text.substring(id + 1);
}


class MacierzoweA extends React.Component {
    constructor(props) {
        super(props);
        this.handleCipheringChange = this.handleCipheringChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.state = {
            inputText: '',
            key: '3-1-4-2',
            isCiphering: true
        };
    }

    handleCipheringChange(newValue) {
        this.setState({ isCiphering: newValue.target.checked });
    }
    handleInputChange(newText) {
        this.setState({ inputText: newText.target.value });
    }
    handleKeyChange(newValue) {
        this.setState({ key: newValue.target.value });
    }


    render() {
        const inputText = this.state.inputText;
        const keyText = this.state.key;
        const isCiphering = this.state.isCiphering;
        return (
            <div>
                <p>Cipher&emsp;
                    <input type="checkbox" checked={this.state.isCiphering} onChange={this.handleCipheringChange} />
                </p>
                <p>
                    Input:&emsp;
                    <input value={inputText} onChange={this.handleInputChange} />
                </p>
                <p>
                    Key:&emsp;
                    <input value={keyText} onChange={this.handleKeyChange} />
                </p>
                <Algorithm
                    text={inputText}
                    keyText={keyText}
                    isCiphering={isCiphering} />
            </div>
        );
    }
}

export default MacierzoweA
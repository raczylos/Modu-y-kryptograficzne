import React from 'react';

function Algorithm(props) {
    let text = props.text;
    let newText = props.text;
    let n = parseInt(props.rails);
    if (Number.isNaN(n)) {
        return '';
    }
    if (n < 2 || n > text.length)
        return '';

    for (let a = 0, nr = 0; a < n; a++) {
        for (let a2 = a; a2 < text.length; nr++) {
            if (props.isCiphering)
                newText = setCharAt(newText, nr, text.charAt(a2));
            else
                newText = setCharAt(newText, a2, text.charAt(nr));

            if ((nr % 2 === 0 || a === 0) && a !== n - 1)
                a2 += (n - 1 - a) * 2;
            else
                a2 += a * 2;
        }
    }

    if (props.isCiphering) //Potrzebne poniewaz by zaczelo rozszyfrowywac
        return <p>Ciphering: {newText}</p>;
    else
        return <p>Deciphering: {newText}</p>;
}

function setCharAt(text, id, c) {
    if (id > text.length - 1)
        return text;
    return text.substring(0, id) + c + text.substring(id + 1);
}


class Railfence extends React.Component {
    constructor(props) {
        super(props);
        this.handleCipheringChange = this.handleCipheringChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRailsChange = this.handleRailsChange.bind(this);
        this.state = {
            inputText: '',
            rails: 3,
            isCiphering: true
        };
    }

    handleCipheringChange(newValue) {
        this.setState({ isCiphering: newValue.target.checked });
    }
    handleInputChange(newText) {
        this.setState({ inputText: newText.target.value });
    }
    handleRailsChange(newValue) {
        this.setState({ rails: newValue.target.value });
    }


    render() {
        const inputText = this.state.inputText;
        const rails = this.state.rails;
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
                    Rails:&emsp;
                    <input type="number" value={this.state.rails} onChange={this.handleRailsChange} />
                </p>
                <Algorithm
                    text={inputText}
                    rails={rails}
                    isCiphering={isCiphering} />
            </div>
        );
    }
}

export default Railfence
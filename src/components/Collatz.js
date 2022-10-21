import React, { Component } from 'react'

export default class Collatz extends Component {

    num = React.createRef();

    collatz = () => {
        var valor = this.num.current.value;
        var aux = valor + ", ";

        do {
            if( valor % 2 == 0) {
                valor = valor / 2;
            } else {
                valor = valor * 3 + 1;
            }
            console.log(valor + ", ");
            aux += valor + ", ";
        } while (valor > 1);

        this.setState({
            texto : aux
        });
    }

    state = {
        texto : ""
    }
    render() {
        return (<div>
            <h1>Collatz</h1>
            <ol>
                <li>Si el numero es par : Dividir entre 2</li>
                <li>Si el numero es impar : multiplicamos por 3 y sumamos 1</li>
            </ol>

            <label>Introduce un numero</label>
            <input type="text" id="num" ref={this.num}/>

            <button type="button" onClick={this.collatz}>Calcular</button>

            <h2>{this.state.texto}</h2>
        </div>)
    }
}

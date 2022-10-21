import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    num = React.createRef();

    tablaMultiplicar = (e) => {
        e.preventDefault();
        var aux = [];
        var valor = parseInt(this.num.current.value);

        for(var i = 1; i <= 10; i++) {
            var tabla = valor + " * " + i + " = " + (i*valor);
            aux.push(tabla);
        }

        this.setState({
            resultado : aux
        });
    }

    state = {
        resultado : []
    }

    render() {
        return (
        <div>
            <h1>Tabla de multiplicar</h1>
            <form>
                <label>Introduce un numero</label>
                <input type="text" id="num" ref={this.num}/>

                <button type="button" onClick={this.tablaMultiplicar}>Calcular</button>

                {
                    this.state.resultado.map((numero, index) => {
                        return (<h2 key={index}>{numero}</h2>);
                    })
                }

            </form>
        </div>
        )
    }
}

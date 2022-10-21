import React, { Component } from 'react'

export default class TablaMultiplicar2 extends Component {
    select = React.createRef();

    tablaMultiplicar = (e) => {
        e.preventDefault();
        var aux = [];

        for(var i = 1; i <= 10; i++) {
            var aleat = parseInt(Math.random() * 51);
            aux.push(aleat);
        }

        this.setState({
            resultado : aux
        });
    }

    mostrarTabla = () => {
        var aux2 = [];
        var valor = parseInt(this.select.current.value);

        for(var i = 1; i <= 10; i++) {
            var tabla = valor + " * " + i + " = " + (i*valor);
            aux2.push(tabla);
        }

        this.setState({
            resultado2 : aux2
        });
    }

    state = {
        resultado : [] ,
        resultado2 : []
    }

    render() {
        return (
        <div>
            <h1>Tabla de multiplicar v2</h1>
            <form>
                <label>Selecciona un numero</label>
                <select ref={this.select} onClick={this.tablaMultiplicar}>
                {
                    this.state.resultado.map((numero, index) => {
                        return (<option key={index}>{numero}</option>);
                    })
                }
                </select>

                <button type="button" onClick={this.mostrarTabla}>Mostrar tabla</button>

                <table>
                    <tbody>
                        <tr style={{display:"grid"}}>
                        {
                            this.state.resultado2.map((numero, index) => {
                                return (<td key={index}>{numero}</td>);
                            })
                        }
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        )
    }
}

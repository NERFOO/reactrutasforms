import React, { Component } from 'react'

export default class FormSimple extends Component {

    //NECESITAMOS UNA VARIABLE DE REFERENCIA PARA CADA CONTROL DE FORMULARIO QUE DESEEMOS RECUPERAR SU VALOR
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();
    //MTODO PARA CAPTURAR EL SUBMIT DEL FORMULARIO, DEBE RECIBIR UN EVENT (e)
    recibirDatosForm = (e) => {
        //LA PRIMERA INSTRUCCION SIEMPRE SERA DETENER LA POPAGACION DEL EVENTO
        e.preventDefault();
        //EN LAS REFERENCIAS DE OBJETOS PARA CAPTURAR EL VALUE SE UTILIZA REFERENCIA.CURRENT.VALUE
        console.log(this.cajaNombre.current.value);
        console.log(this.cajaEdad.current.value);

        this.setState({
            user: {
                nombre: this.cajaNombre.current.value,
                edad: this.cajaEdad.current.value
            }
        });
    }

    state = {
        user: null
    }

    render() {
        return (<div>
            {
                this.state.user &&
                (<div>
                    <h2>Usuario : {this.state.user.nombre}, Edad : {this.state.user.edad}</h2>
                </div>)
            }
            <form onSubmit={ this.recibirDatosForm }>
                <h1>Ejemplo simple forms</h1>
                <label>Nombre: </label>
                <input type="text" ref={this.cajaNombre}/>
                <br/>
                <label>Edad: </label>
                <input type="text" ref={this.cajaEdad}/>
                <br/>
                <button>Enviar datos</button>
            </form>
        </div>)
    }
}

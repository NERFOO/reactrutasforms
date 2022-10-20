import fotoCine from '../assets/images/img3.jpg';
import React, { Component } from 'react'

export default class Musica extends Component {
    render() {
    return (<div>
            <h1>Musica</h1>
            <img src={fotoCine} style={{width:"150px" , height:"150px"}}/>
        </div>)
    }
}

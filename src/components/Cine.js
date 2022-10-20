import fotoCine from '../assets/images/img1.jpg';
import React, { Component } from 'react'

class Cine extends Component{
    render() {
        return (
            <div>
                <h1>Cine</h1>
                <img src={fotoCine} style={{width:"150px" , height:"150px"}}/>
            </div>
        )
    }
}

export default Cine;
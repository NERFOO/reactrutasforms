import fotoCine from '../assets/images/img2.jpg';
import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <img src={fotoCine} style={{width:"150px" , height:"150px"}}/>
            </div>
        )
    }
}

export default Home;

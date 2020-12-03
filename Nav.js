import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Nav extends Component{
state = {
     toggle:false
}


    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        const {toggle} = this.state;
        return(
            <>
                 <ul className={toggle?"toggle" : ""} >
              <li><Link to="/"> FOR ENTREPENEURS</Link></li>
              <li><Link to="/Experts">FOR EXPERTS</Link></li>
              <li><Link to="/Login">Login</Link></li>
              <li><Link to="/Signup">Sign Up</Link></li>
              <li className="close" onClick={this.menuToggle}>X</li>
            </ul>
            <div className="menu" onClick={this.menuToggle} >Menu</div>
            </>
        )
    }
}
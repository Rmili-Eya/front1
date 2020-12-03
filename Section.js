import React, { Component } from 'react' ;
import Entrepeneurs from './section/Entrepeneurs';
import Experts from './section/Experts';
import Login from './section/Login';
import Signup from './section/Signup';
import {Route} from 'react-router-dom';

 export class Section extends Component{
    render(){
        return(
           <section>
            < Route path="/" component ={Entrepeneurs} exact />
            < Route path="/Experts" component={Experts} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
           </section>
        )
    }
}

export default Section
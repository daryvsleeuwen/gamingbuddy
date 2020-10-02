import React from 'react';
import UserBox from './user-box';

export default class HomePage extends React.Component{
    constructor(){
        super();
        this.test = <span className="test">fewfwf</span>
    }

    componentDidMount = ()=>{

    }

    render(){
        return <div className="grid-box">
            <UserBox sideinfo={this.test} username="Killa_xX" subtitle="Rocket Leaque"></UserBox>
        </div>
    }
}
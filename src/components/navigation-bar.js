import React from 'react';
import homeicon from '../assets/homeicos.svg';
import homeicon from '../assets/homeicos.svg';
import homeicon from '../assets/homeicos.svg';
import '../styles/navbar.css';

export default class NavigationBar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div className="navigation-bar">
                <div className="navigation-icon-box">
                    <img src={homeicon}/>
                    <span className="icon-box-text"></span>
                </div>

                <div className="navigation-icon-box">
                    <img src={this.props.imagesource}/>
                    <span className="icon-box-text"></span>
                </div>

                <div className="navigation-icon-box">
                    <img src={this.props.imagesource}/>
                    <span className="icon-box-text"></span>
                </div>
            </div>
    }
}
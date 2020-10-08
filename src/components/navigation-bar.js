import React from 'react';
import homeicon from '../assets/home-24px.svg';
import chaticon from '../assets/chat-24px.svg';
import accounticon from '../assets/account-circle-24px.svg';
import '../styles/navbar.css';

export default class NavigationBar extends React.Component{
    constructor(){
        super();
    }

    render(){
        return <div className="navigation-bar">
                <div className="navigation-icon-box" onClick={() =>{
                    if(typeof this.props.leftclick === 'function'){
                        this.props.leftclick();
                    }
                }}>
                    <img src={homeicon}/>
                    <span className="icon-box-text pop-r">Home</span>
                </div>

                <div className="navigation-icon-box" onClick={() =>{
                    if(typeof this.props.middleclick === 'function'){
                        this.props.middleclick();
                    }
                }}>
                    <img src={chaticon}/>
                    <span className="icon-box-text pop-r">Chats</span>
                </div>

                <div className="navigation-icon-box" onClick={() =>{
                    if(typeof this.props.rightclick === 'function'){
                        this.props.rightclick();
                    }
                }}>
                    <img src={accounticon}/>
                    <span className="icon-box-text pop-r">Account</span>
                </div>
            </div>
    }
}
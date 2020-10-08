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
                <div className="navigation-icon-box">
                    <img src={homeicon}/>
                    <span className="icon-box-text pop-r">Home</span>
                </div>

                <div className="navigation-icon-box">
                    <img src={chaticon}/>
                    <span className="icon-box-text pop-r">Chats</span>
                </div>

                <div className="navigation-icon-box">
                    <img src={accounticon}/>
                    <span className="icon-box-text pop-r">Account</span>
                </div>
            </div>
    }
}
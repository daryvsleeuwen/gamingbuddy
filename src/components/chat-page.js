import React from 'react';
import NavigationBar from './navigation-bar';

export default class ChatPage extends React.Component{
    constructor(){
        super();
    }

    linkToChatPage = () =>{
        this.props.history.push('/chat');
    }

    linkToHomePage = () =>{
        this.props.history.push('/');
    }

    linkToAccountPage = () =>{
        this.props.history.push('/account');
    }

    render(){
        return <div className="test">
             <NavigationBar active='middle'></NavigationBar>
        </div>
    }
}
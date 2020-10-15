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
        return <div className="grid-box">
        <div className="content-holder">
         
        </div>
        <NavigationBar router={this.props.history} active='middle' ></NavigationBar>
    </div>
    }
}
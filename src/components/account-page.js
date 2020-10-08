import React from 'react';
import NavigationBar from './navigation-bar';

export default class AccountPag extends React.Component{
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
             <NavigationBar leftclick={this.linkToHomePage} middleclick={this.linkToChatPage} rightclick={this.linkToAccountPage}></NavigationBar>
        </div>
    }
}
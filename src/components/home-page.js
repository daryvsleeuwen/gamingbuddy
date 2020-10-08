import React from 'react';
import UserBox from './user-box';
import NavigationBar from './navigation-bar';

export default class HomePage extends React.Component{
    constructor(){
        super();
        this.test = <span className="pop">6 hours played</span>
    }

    componentDidMount = ()=>{

    }

    render(){
        return <div className="grid-box">
            <div className="content-holder">
                <UserBox sideinfo={this.test} imagesource={'../assets/profile-image.png'} username="Killa_xX" subtitle="Rocket Leaque"></UserBox>

            </div>
            <NavigationBar></NavigationBar>   
        </div>
    }
}
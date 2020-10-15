import React from 'react';
import UserBox from './user-box';
import NavigationBar from './navigation-bar';
import IconButton from './icon-button';
import searchicon from "../assets/search-24px.svg";

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.sideinfo = <span className="pop-l">6 hours played</span>
    }

    componentDidMount = ()=>{

    }

    linkToProfile = (id) =>{
        this.props.history.push(`/profile/${34}`);
    }

    linkToBuddySearch = () =>{
        this.props.history.push('/buddysearch');
    }

    render(){
        return <div className="grid-box">
            <div className="content-holder">
                <h1 className="page-title pop-m">Gaming Buddy</h1>
                <div className="buddy-section">
                    <span className="buddy-section-title pop-r">Your buddies</span>
                </div>
                <UserBox click={this.linkToProfile} sideinfo={this.sideinfo} imagesource='../assets/profile-image.jpg' username="Killa_xX" subtitle="Rocket Leaque"></UserBox>
                <UserBox click={this.linkToProfile} sideinfo={this.sideinfo} imagesource='../assets/profile-image.jpg' username="Killa_xX" subtitle="Rocket Leaque"></UserBox>
                <UserBox click={this.linkToProfile} sideinfo={this.sideinfo} imagesource='../assets/profile-image.jpg' username="Killa_xX" subtitle="Rocket Leaque"></UserBox>
                <IconButton click={this.linkToBuddySearch} icon={searchicon}></IconButton>
            </div>  
            <NavigationBar router={this.props.history} active='left'></NavigationBar>
        </div>
    }
}
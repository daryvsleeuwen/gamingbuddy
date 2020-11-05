import React from 'react';
import UserBox from './user-box';
import NavigationBar from './navigation-bar';
import IconButton from './icon-button';
import searchicon from "../assets/search-24px.svg";
import DatabaseHandler from '../js/DatabaseHandler.js';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {userboxes: []};
        this.userId = sessionStorage.getItem('loggedUserID');
        this.databasehandler = new DatabaseHandler();
    }

    componentDidMount = ()=>{
        this.getAllBuddies();
    }

    getAllBuddies = () =>{
        this.databasehandler.read(this.userId + '/buddies', (data) =>{
            let buddies = data.val();
            let boxes = [];

            buddies.forEach(buddy => {             
                this.databasehandler.read(buddy, (data) =>{
                    let userdata = data.val();  
                    let sideinfo = <span className="userbox-sideinfo pop-l">{`played ${userdata.lastplayed} hours ago`}</span>; 

                    boxes.push(
                        <UserBox key={buddy} click={this.linkToProfile} sideinfo={sideinfo} imagesource={userdata.profileimage} username={userdata.username} subtitle={`Last played: ${userdata.lastplayedgame}`}></UserBox>
                    );

                    this.setState({
                        userboxes: boxes
                    });
                }); 
            });
        });
        
    }

    returnBuddyProfiles = () =>{
        return this.state.userboxes;
    }

    linkToProfile = () =>{
        this.props.history.push(`/profile`);
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
                    <this.returnBuddyProfiles/>
                </div>
                <IconButton click={this.linkToBuddySearch} icon={searchicon}></IconButton>
            </div>  
            <NavigationBar router={this.props.history} active='left'></NavigationBar>
        </div>
    }
}
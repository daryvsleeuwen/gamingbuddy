import React from 'react';
import '../styles/navbar.css';

export default class NavigationBar extends React.Component{
    constructor(props){
        super(props);
        this.left = React.createRef();
        this.middle = React.createRef();
        this.right = React.createRef();
    }

    componentDidMount = () =>{
        if(this.props.active){
            this[this.props.active].current.classList.add('active-navigation-box');
        }
    }

    linkToChatPage = () =>{
        this.props.router.push('/chat');
    }

    linkToHomePage = () =>{
        this.props.router.push('/');
    }

    linkToAccountPage = () =>{
        this.props.router.push('/account');
    }

    render(){
        return <div className="navigation-bar">
                <div className="navigation-icon-box" onClick={this.linkToHomePage}>
                    <svg id="home-24px" xmlns="http://www.w3.org/2000/svg" ref={this.left} width="35.993" height="30.594" viewBox="0 0 35.993 30.594">
                        <path id="Path_4" data-name="Path 4" d="M16.4,33.594V22.8h7.2v10.8h9V19.2h5.4L20,3,2,19.2H7.4v14.4Z" transform="translate(-2 -3)" fill="#787878"/>
                    </svg>

                    <span className="icon-box-text pop-r">Home</span>
                </div>

                <div className="navigation-icon-box" onClick={this.linkToChatPage}>
                    <svg id="chat-24px" xmlns="http://www.w3.org/2000/svg" ref={this.middle} width="30.594" height="30.594" viewBox="0 0 30.594 30.594">
                        <path id="Path_10" data-name="Path 10" d="M29.535,2H5.059A3.055,3.055,0,0,0,2.015,5.059L2,32.594l6.119-6.119H29.535a3.068,3.068,0,0,0,3.059-3.059V5.059A3.068,3.068,0,0,0,29.535,2ZM8.119,12.708H26.475v3.059H8.119Zm12.238,7.648H8.119V17.3H20.356Zm6.119-9.178H8.119V8.119H26.475Z" transform="translate(-2 -2)" fill="#787878"/>
                    </svg>
                    <span className="icon-box-text pop-r">Chats</span>
                </div>

                <div className="navigation-icon-box" onClick={this.linkToAccountPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" ref={this.right} width="30.594" height="30.594" viewBox="0 0 30.594 30.594">
                        <g id="account_circle-24px">
                            <path id="Path_2" data-name="Path 2" d="M17.3,2a15.3,15.3,0,1,0,15.3,15.3A15.3,15.3,0,0,0,17.3,2Zm0,4.589a4.589,4.589,0,1,1-4.589,4.589A4.583,4.583,0,0,1,17.3,6.589Zm0,21.722a11.015,11.015,0,0,1-9.178-4.926c.046-3.044,6.119-4.711,9.178-4.711,3.044,0,9.132,1.667,9.178,4.711A11.015,11.015,0,0,1,17.3,28.311Z" transform="translate(-2 -2)" fill="#787878"/>
                        </g>
                    </svg>

                    <span className="icon-box-text pop-r">Account</span>
                </div>
            </div>
    }
}
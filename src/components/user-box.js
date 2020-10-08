import React from 'react';

export default class UserBox extends React.Component{
    constructor(){
        super();
    }

    componentDidMount = ()=>{

    }

    render(){
        return <div className="user-box">
            <img className="user-image-box" src={this.props.imagesource} alt="user icon"/>
            <div className="user-box-info">
                <span className="username pop-b">{this.props.username}
                    {this.props.sideinfo}
                </span>
                <span className="user-subtitle pop-m">{this.props.subtitle}</span>
            </div>
        </div>
    }
}
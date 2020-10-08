import React from 'react';

export default class ProfilePage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount = ()=>{
        this.profileid = this.props.match.params.profileid;
    }

    render(){
        return <div className="grid-box">
            <div className="content-holder">
            </div>  
        </div>
    }
}
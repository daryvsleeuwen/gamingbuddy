import React from 'react';

export default class IconButton extends React.Component {
    constructor() {
        super();
    }

    componentDidMount = () => {
        
    }

    render() {
        return <div className="icon-button" onClick={this.props.click}>
            <img src={this.props.icon} alt="button icon" className="icon-button-icon"/>
        </div>
    }
}
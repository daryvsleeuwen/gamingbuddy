import React from 'react';

export default class Button extends React.Component{
    constructor(){
        super();
    }

    render(){
        let styles; 
        if(this.props.width){
            styles = {width: this.props.width}
        }
        else{
            styles = null;
        }

        return <button className='main-button pop-r' style={styles} onClick={(event) => {
            if(typeof this.props.click === 'function'){
                this.props.click(event.target);
            }
        }}>{this.props.text}</button>

    }
}
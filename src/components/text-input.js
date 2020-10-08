import React from 'react';

export default class Input extends React.Component{
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
    

        return <input type='text' placeholder={this.props.placeholder} className='main-input pop-r' style={styles} onChange={(event) => {
                if(typeof this.props.change === 'function'){
                    this.props.change(event.target.value);
                }}}
                />
    }
}
}
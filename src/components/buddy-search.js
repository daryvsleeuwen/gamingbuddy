import React from 'react';
import Button from './button';
import Input from './text-input';
import NavigationBar from './navigation-bar';

export default class BuddySearchPage extends React.Component{
    constructor(){
        super();
    }

    searchBuddy = (button) =>{
        console.log(button);
    }

    updateInput = (value) =>{
        console.log(value);
    }

    render(){
        return <div className="grid-box">
            <div className="content-holder">
                <Input placeholder="Game" change={this.updateInput}></Input>
                <Button text="Search" click={this.searchBuddy}></Button>
            </div>
            <NavigationBar></NavigationBar>
        </div>
    }
}
import React from 'react';
import Button from './button';
import Input from './text-input';
import FilterInput from './filter-input';
import DoubleSliderInput from './double-slider-input';
import NavigationBar from './navigation-bar';

export default class BuddySearchPage extends React.Component {
    constructor() {
        super();
        this.gamefilters = ["GTA V", "Call of Duty: Warzone", "Fifa 20", "Streetfighter", "Watchdogs Legion", "Need for Speed", "Cyberpunk 77", "Among us", "Animal Crossing"];
        this.languagefilters = ["Dutch", "English", "French", "German", "Spanish"];
        this.age = 12;
        this.language = 'English';
    }

    searchBuddy = (button) => {
        console.log(button);
    }
    
    setAge = (age) =>{
        this.age = age;
    }

    render() {
        return <div className="grid-box">
            <div className="content-holder">
            <h1 className="page-title pop-m">Gaming Buddy</h1>
            <h1 className="page-subtitle pop-m">Start the searching and reveal your buddy</h1>
                <FilterInput placeholder="Game" filters={this.gamefilters}></FilterInput>
                <FilterInput placeholder="Language" filters={this.languagefilters}></FilterInput>
                <DoubleSliderInput minvalue={12} maxvalue={100} name={'Age'} valuechange={this.setAge()}></DoubleSliderInput>
                <Button text="Start matchmaking" click={this.searchBuddy}></Button>
            </div>
            <NavigationBar router={this.props.history} active='left'></NavigationBar>
        </div>
    }
}


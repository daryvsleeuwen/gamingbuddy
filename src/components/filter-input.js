import React from 'react';

export default class FilterInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {languagefilters: []}
        this.input = React.createRef();
    }

    updateFilterResults = () =>{
        if(this.input.current.value != ''){   
            if(Array.isArray(this.props.filters)){
            let filtered = [];

            this.props.filters.forEach(filter => {
                if(filter.toLowerCase().includes(this.input.current.value)){
                    filtered.push(filter);
                }
            });

            this.setState({languagefilters: filtered});
            }
        }
        else{
            this.setState({languagefilters: []});
        }
    }

    returnFilterElements = () =>{
        let filters = [];

        this.state.languagefilters.forEach(filter => {
            let key = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
            filters.push(
                <span key={key} className="filter-name pop-r" onClick={() => {this.setFilter(filter)}}>{filter}</span>
            );
        });
        
        return filters;
    }

    setFilter = (selected) =>{
        this.input.current.value = selected;
        this.setState({languagefilters: []});
    }

    render(){
        let styles; 
        if(this.props.width){
            styles = {width: this.props.width}
        }
        else{
            styles = null;
    

        return <div className="input-wrapper">
                <input type='text' ref={this.input} placeholder={this.props.placeholder} className='main-input filter-input pop-m' style={styles} onChange={this.updateFilterResults}/>
                <div className="input-filter-box">
                    <this.returnFilterElements/>
                </div>
        </div>     
        }
    }
}
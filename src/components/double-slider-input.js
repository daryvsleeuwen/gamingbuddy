import React from 'react';

export default class DoubleSliderInput extends React.Component{
    constructor(props){
        super(props);
        this.slider = React.createRef();
        this.sv = React.createRef();
        this.leftvalue = 0;
        this.rightvalue = 100;
        this.state = {currentmin: this.props.minvalue, currentmax: this.props.maxvalue}
    }

    componentDidMount = () => {
        this.slider = this.slider.current;
        this.slidervalue = this.sv.current;
        this.sliderdimensions = this.slider.getBoundingClientRect();
    }

    updateSliderUI = () =>{
        let min = Math.floor(this.leftvalue / 100 * this.props.maxvalue + this.props.minvalue);
        let max = Math.floor(this.rightvalue / 100 * this.props.maxvalue + 1);

        this.setState({
            currentmin: min,
            currentmax: max
        });

        this.slidervalue.textContent = `${this.state.currentmin}-${this.state.currentmax} ${this.props.valuesuffix || ""}`;
        this.slider.style.background = `linear-gradient(90deg, var(--fadedmainorange) 0%, var(--fadedmainorange) ${this.leftvalue}%, var(--mainorange) ${this.leftvalue}%, var(--mainorange) ${this.rightvalue}%, var(--fadedmainorange) ${this.rightvalue}% ,var(--fadedmainorange) 100%)`;
    }

    handleMouseEvent = (target, side) =>{
        this.selectedslider = target;
        this.selectedside = side;
        
        target.classList.add('active-slider-control');
        window.addEventListener('mousemove', this.moveSliderControl);
        window.addEventListener('touchmove', this.moveSliderControl);

        window.onmouseup = () =>{
            window.removeEventListener('mousemove', this.moveSliderControl);
            target.classList.remove('active-slider-control');
            window.onmouseup = null;
        }

        window.ontouchend = () =>{
            window.removeEventListener('touchmove', this.moveSliderControl);
            target.classList.remove('active-slider-control');
            window.ontouchend = null;
        }
    }

    moveSliderControl = (event) =>{
        let position = event.pageX || event.touches[0].pageX;
        if(position < this.sliderdimensions.left || position > this.sliderdimensions.right){
            return;
        }
        else{
            let percentage = (position - this.sliderdimensions.left) / this.sliderdimensions.width * 100;

            if(this.selectedside == "left"){
                if(percentage > this.rightvalue - 5){
                    this.leftvalue = percentage - 5
                }
                else{
                    this.leftvalue = percentage;
                    this.selectedslider.style.left = `${percentage}%`
                    this.updateSliderUI();
                }                  
            }

            if(this.selectedside == "right"){
                if(percentage < this.leftvalue + 5){
                    this.rightvalue = percentage + 5
                }
                else{
                    this.rightvalue = percentage;
                    this.selectedslider.style.left = `${percentage}%`
                    this.updateSliderUI();
                }       
            } 
        }     
    }

    render(){
        return <div className="slider-wrapper">
            <div className="slider-titles-box">
                <span className="slider-name pop-b">{this.props.name}</span>
                <span className="slider-val pop-b" ref={this.sv}>{`${this.state.currentmin}-${this.state.currentmax} ${this.props.valuesuffix || ""}`}</span>
            </div>
            <div className="slider-input" ref={this.slider}>
                <div className="slider-controller left-controller" onMouseDown={(e) => this.handleMouseEvent(e.target, "left")} onTouchStart={(e) => this.handleMouseEvent(e.target, "left")}></div>
                <div className="slider-controller right-controller" onMouseDown={(e) => this.handleMouseEvent(e.target, "right")} onTouchStart={(e) => this.handleMouseEvent(e.target, "right")}></div>
            </div>
        </div>
    }
}
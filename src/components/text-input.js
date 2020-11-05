import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let styles;
        if (this.props.width) {
            styles = {
                width: this.props.width
            }
        } else {
            styles = null;

            return <div className="input-wrapper">
                <input
                    type='text'
                    placeholder={this.props.placeholder}
                    className='main-input pop-m'
                    style={styles}
                    onChange={(event) => {
                    if (typeof this.props.change === 'function') {
                        this
                            .props
                            .change(event.target.value);
                    }
                }}/>
            </div>

        }
    }
}
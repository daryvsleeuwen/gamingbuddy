import React from "react";

export default class ReturnButton extends React.Component {
  constructor() {
    super();
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="return-button" onClick={this.props.click}>
        <img src={this.props.icon} alt="return button icon" />
      </div>
    );
  }
}

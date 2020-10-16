import React from "react";
import sendIconButton from "../styles/send-icon-button.css";

export default class SendIconButton extends React.Component {
  constructor() {
    super();
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="send-icon-button" onClick={this.props.click}>
        <img
          src={this.props.icon}
          alt="send button icon"
          className="send-icon-button-icon"
        />
      </div>
    );
  }
}

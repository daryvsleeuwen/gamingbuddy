import React from "react";
import "../styles/sendmessagebar.css";
import sendIcon from "../assets/send-button.svg";

export default class SendMessageBar extends React.Component {
  constructor() {
    super();
  }

  componentDidMount = () => {};

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            className="sendMessageBar"
            placeholder="Type a message"
          ></input>
        </div>
      </div>
    );
  }
}

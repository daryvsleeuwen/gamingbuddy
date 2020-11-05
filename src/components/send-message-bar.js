import React from "react";
import "../styles/sendmessagebar.css";
import sendIcon from "../assets/send-button.svg";
import SendButtonIcon from "./send-icon-button";

export default class SendMessageBar extends React.Component {
    constructor() {
        super();
    }

    componentDidMount = () => {};

  render() {
    return (
      <div>
        <div className="input-container">
          <input
            type="text"
            id="input"
            className="sendMessageBar "
            placeholder="Type a message"
          ></input>
          <SendButtonIcon
            click={this.linkToBuddySearch}
            icon={sendIcon}
          ></SendButtonIcon>
        </div>
      </div>
    );
  }
}

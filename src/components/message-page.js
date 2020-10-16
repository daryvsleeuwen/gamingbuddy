import React from "react";
import SendMessageBar from "./send-message-bar";

export default class MessagePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="grid-box">
        <div className="content-holder">
          <div className="input-wrapper">
            <SendMessageBar></SendMessageBar>
          </div>
        </div>
      </div>
    );
  }
}

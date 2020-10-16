import React from "react";
import NavigationBar from "./navigation-bar";
import SendMessageBar from "./send-message-bar";

export default class MessagePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  render() {
    return (
      <div className="grid-box">
        <div>
          <SendMessageBar></SendMessageBar>
          <NavigationBar
            router={this.props.history}
            active="middle"
          ></NavigationBar>
        </div>
      </div>
    );
  }
}

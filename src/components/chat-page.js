import React from "react";
import NavigationBar from "./navigation-bar";
import ReturnButton from "./return-button";
import ChatUserBox from "./chat-user-box";
import returnIcon from "../assets/back-arrow.svg";

export default class ChatPage extends React.Component {
  constructor() {
    super();
  }

  linkToChatPage = () => {
    this.props.history.push("/chat");
  };

  linkToHomePage = () => {
    this.props.history.push("/");
  };

  linkToAccountPage = () => {
    this.props.history.push("/account");
  };

  render() {
    return (
      <div className="grid-box">
        <div className="content-holder">
          <ReturnButton
            className="return-button"
            click={this.linkToBuddySearch}
            icon={returnIcon}
          ></ReturnButton>
          <h1 className="page-title pop-m">Chats</h1>

          <ChatUserBox
            className="pop-m"
            username="ferdinandX64"
            sideinfo="11:05AM"
            subtitle='"Whatsupp loser, wanna teabag?"'
          ></ChatUserBox>

          <ChatUserBox
            className="pop-m"
            username="ferdinandX64"
            sideinfo="15:40PM"
            subtitle='"Lets go wreck some noobs"'
          ></ChatUserBox>

          <ChatUserBox
            className="pop-m"
            username="ferdinandX64"
            sideinfo="11:05AM"
            subtitle='"Whatsupp loser, wanna teabag?"'
          ></ChatUserBox>
        </div>

        <NavigationBar
          router={this.props.history}
          active="middle"
        ></NavigationBar>
      </div>
    );
  }
}

import React from "react";
import NavigationBar from "./navigation-bar";
import ReturnButton from "./return-button";
import returnIcon from "../assets/back-arrow.svg";
import AccountUserBox from "./account-user-box";

export default class AccountPag extends React.Component {
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

          <AccountUserBox></AccountUserBox>
        </div>
        <NavigationBar
          router={this.props.history}
          active="right"
        ></NavigationBar>
      </div>
    );
  }
}

import React from "react";
import "../styles/chatuserbox.css";

export default class ChatUserBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  render() {
    return (
      <div>
        <div
          className="chat-user-box"
          onClick={() => {
            if (typeof this.props.click === "function") {
              this.props.click(this.id);
            }
          }}
        >
          <div className="chat-user-image-box">
            <img
              src={require("../assets/profile-image.jpg")}
              alt="profile image"
              className="chat-user-image"
            />
          </div>
          <div className="chat-userbox-info">
            <div className="flex userbox-top-info">
              <span className="chat-userbox-username pop-m">
                {this.props.username}
              </span>
              <span className="chat-timestamp">{this.props.sideinfo}</span>
            </div>

            <span className="userbox-subtitle pop-l ">
              {this.props.subtitle}
            </span>
          </div>
        </div>
        <hr className="devider"></hr>
      </div>
    );
  }
}

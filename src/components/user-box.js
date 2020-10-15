import React from "react";
import "../styles/userbox.css";

export default class UserBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  render() {
    return (
      <div
        className="user-box"
        onClick={() => {
          if (typeof this.props.click === "function") {
            this.props.click(this.id);
          }
        }}
      >
        <div className="user-image-box">
          <img
            src={require("../assets/profile-image.jpg")}
            alt="profile image"
            className="user-image"
          />
        </div>
        <div className="userbox-info">
          <div className="flex">
            <span className="userbox-username pop-m">
              {this.props.username}
            </span>
            {this.props.sideinfo}
          </div>

          <span className="userbox-subtitle pop-m">{this.props.subtitle}</span>
        </div>
      </div>
    );
  }
}

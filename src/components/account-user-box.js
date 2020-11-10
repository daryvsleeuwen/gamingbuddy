import React from "react";
import "../styles/account-userbox.css";

export default class UserBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  render() {
    return (
      <div>
        <div className="account-box">
          <img
            src={require("../assets/profile-image.jpg")}
            alt="profile image"
            className="account-image"
          />
        </div>
      </div>
    );
  }
}

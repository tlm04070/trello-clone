import React, { Component } from "react";

class Profile extends Component {
  render() {
    return <p>{this.props.currentUser}</p>;
  }
}

export default Profile;

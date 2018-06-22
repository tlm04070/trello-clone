import React, { Component } from "react";
import Boards from "./Navbar/BoardsDropdown/Boards";
import SearchBar from "./Navbar/SearchBar";
import HomeButton from "./Navbar/HomeButton";
import AddNew from "./Navbar/AddNew";
import InfoButton from "./Navbar/InfoButton";
import NotifyButton from "./Navbar/NotifyButton";
import Profile from "./Navbar/Profile";

import "./Navbar/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.sate = {};
  }

  userArr = [
    {
      name: {
        first: "testingFirstName",
        last: "testingLastName"
      },
      boards: [
        {
          name: "testing board 1",
          image: "testing img link",
          description: "testing description here"
        }
      ]
    },
    {
      name: {
        first: "testing firstName 2",
        last: "testing lastName 2"
      },
      boards: [
        {
          name: "testing board 2",
          image: "testing img link 2",
          description: "testing description 2 here"
        }
      ]
    }
  ];

  renderUser() {
    this.userArr.map(({ name, boards }) => {
      return <Profile user={name} boards={boards} />;
    });
  }
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="nav__boards">
          <Boards />
        </div>
        <div className="nav__search">
          <SearchBar />
        </div>
        <div className="nav__home">
          <HomeButton />
        </div>
        <div className="nav__add">
          <AddNew />
        </div>
        <div className="nav__info">
          <InfoButton />
        </div>
        <div className="nav__notify">
          <NotifyButton />
        </div>
        <div className="nav__profile">
          <Profile currentUser={this.renderUser} />
        </div>
      </nav>
    );
  }
}

export default Navbar;

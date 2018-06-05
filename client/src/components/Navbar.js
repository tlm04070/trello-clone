import React, { Component } from 'react'
import Boards from './Navbar/Boards';
import SearchBar from './Navbar/SearchBar';
import HomeButton from './Navbar/HomeButton';
import AddNew from './Navbar/AddNew';
import InfoButton from './Navbar/InfoButton';
import NotifyButton from './Navbar/NotifyButton';
import Profile from './Navbar/Profile';

import './Navbar/Navbar.css';



class Navbar extends Component {
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
                    <Profile />
                </div>
            </nav >
        )
    }
}

export default Navbar;
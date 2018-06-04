import React, { Component } from 'react'
import Boards from './Navbar/Boards';
import SearchBar from './Navbar/SearchBar';
import HomeButton from './Navbar/HomeButton';
import AddNew from './Navbar/AddNew';
import InfoButton from './Navbar/InfoButton';
import NotifyButton from './Navbar/NotifyButton';
import Profile from './Navbar/Profile';


class Navbar extends Component {
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="nav__boards">
                    <Boards />
                    <SearchBar />
                </div>
                <div className="nav__home">
                    <HomeButton />
                </div>
                <div className="nav__list">
                    <ul>
                        <li className="nav__list--add">
                            <AddNew />
                        </li>
                        <li className="nav__list--info">
                            <InfoButton />
                        </li>
                        <li className="nav__list--notify">
                            <NotifyButton />
                        </li>
                        <li className="nav__list--profile">
                            <Profile />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
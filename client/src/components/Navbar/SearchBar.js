import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div className="nav__boards--searchBar">
                <input placeholder="Search for a board" />
                <a class="nav__boards--searchButton">
                    Search
                </a>
            </div>
        )
    }
}

export default SearchBar;
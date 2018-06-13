import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "no results found",
      showComponent: false
    };
    this.termSearch = this.termSearch.bind(this);
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
  }
  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ showComponent: true });
  }

  termSearch(event, term) {
    event.preventDefault();
    let inputTerm = event.target.value;
    if (inputTerm === "testing") {
      return this.setState({ term: inputTerm });
    } else {
      return this.setState({ term: "no results found" });
    }
  }
  render() {
    return (
      <div className="nav__boards--searchBar">
        <input placeholder="Search for a board" onChange={this.termSearch} />
        <a
          className="nav__boards--searchButton"
          onClick={this.showDropdownMenu}
        >
          Search
        </a>
        {this.state.showComponent ? (
          <div>
            <h1>{this.state.term}</h1>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SearchBar;

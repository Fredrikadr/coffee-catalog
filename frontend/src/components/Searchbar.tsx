import { Component } from "react";
import searchIcon from "../assets/icons/search.svg"

class Searchbar extends Component {
  render() {
    return (
      <>
        <div className="search-container">
          <button title="Search" className="search-btn"><embed src={searchIcon} /></button>
          <label htmlFor="search-field" className="visually-hidden">Search</label>
          <input placeholder="Find your coffee..." name="search-field" id="search-field" type="text" />
        </div>

      </>
    )
  }
}

export default Searchbar;
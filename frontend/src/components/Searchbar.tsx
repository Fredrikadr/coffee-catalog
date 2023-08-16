import { Component } from "react";
import searchIcon from "../assets/icons/search.svg";

interface SearchbarProps {
  onSearchTermChange: (searchTerm: string) => void;
}

class Searchbar extends Component<SearchbarProps> {
  render() {
    const { onSearchTermChange } = this.props;

    return (
      <>
        <div className="search-container">
          <button title="Search" className="search-btn"><embed src={searchIcon} /></button>
          <label htmlFor="search-field" className="visually-hidden">Search</label>
          <input
            placeholder="Find your coffee..."
            name="search-field"
            id="search-field"
            type="text"
            onChange={event => onSearchTermChange(event.target.value)}
          />
        </div>

      </>
    )
  }
}

export default Searchbar;
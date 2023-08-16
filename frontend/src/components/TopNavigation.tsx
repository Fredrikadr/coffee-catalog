import { Component } from "react";
import hamburger from "../assets/icons/hamburger.svg"
import avatar from "../assets/images/Avatar.png"


class TopNavigation extends Component {

  render() {
    return (
      <>
        <div className="top-nav">
        <button title="hamburger" className="hamburger-menu">
          <img alt="hamburger menu icon" src={hamburger}></img>
          </button>
          <button title="profile" className="profile-picture">
            <img alt="profile picture" src={avatar}></img>
          </button>
        </div>
      </>
    )
  }
}

export default TopNavigation;
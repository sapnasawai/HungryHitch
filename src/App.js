import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt="zomato logo"
          className="image"
          width={100}
        />
      </div>
      <div className="search-container">
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faLocationDot} />
          <input
            icon={<FontAwesomeIcon icon={faLocationDot} />}
            className="search-box"
            type="text"
            placeholder="Search"
            value={"Sapna"}
          />
        </div>
      </div>
      <div className="button-container">
        <button name="Login">Login</button>
        <button name="Signin">Signin</button>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

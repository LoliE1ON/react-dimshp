import React from "react";

import "./styles/header.css";

export const Header = () => {

  return (
    <header className="navbar-container navbar">
      <div className="container">
        <div className="columns">
          <div className="column col-7 col-mx-auto col-lg-12">
            <div className="columns">
              <div className="column col-9">
                <a href="/" className="navbar-brand mr-2 text-bold">
                  <i className="fab fa-firefox pr-2 text-primary" />
                  Engine
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

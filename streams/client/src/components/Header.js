import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Title Does Here
      </Link>
      <div className="right menu" />
      <Link to="/" className="item">
        Header2
      </Link>
    </div>
  );
};

export default Header;

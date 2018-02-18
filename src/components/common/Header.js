import React, {PropTypes} from 'react';
import {Link, IndexLink} from "react-router";

const Header = () => {
  return (
    <div>
      Header
    <nav>
        <IndexLink to="/" activeClassName="active">home</IndexLink> <br/>
        <Link to="items" activeClassName="active">items</Link> <br/>
      </nav>
    </div>
  )
}

export default Header;

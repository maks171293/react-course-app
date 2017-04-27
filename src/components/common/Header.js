import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = (props) => {
  return(
    <div>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
    </div>
  )
}

export default Header;

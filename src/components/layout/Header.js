import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Header = ({title}) => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
      <div className="container">
        <a href="/" className='navbar-brand'>{title}</a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className="nav-item">
              <Link to="/" className='nav-link'>
                <i className="fas fa-home"/> {' '}Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus-circle"/> {' '}Add contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                <i className="fas fa-question-circle"/>{' '}About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  title: 'My app'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;

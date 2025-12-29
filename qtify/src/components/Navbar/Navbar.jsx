import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

function Navbar({ searchData = [] }) {
  return (
    <nav className={styles.navbar} data-testid="navbar">
      <Link to="/" data-testid="navbar-logo">
        <Logo />
      </Link>
      <Search
        placeholder="Search a album of your choice"
        searchData={searchData}
      />
      <Button data-testid="navbar-button">Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
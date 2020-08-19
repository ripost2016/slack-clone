import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="Ricardo" src=""></Avatar>
        <AccessTimeIcon></AccessTimeIcon>
      </div>

      <div className="header__search">
        <SearchIcon></SearchIcon>
        <input placeholder="Search clever programmer" />
      </div>

      <div className="header__right">
        <HelpOutlineIcon></HelpOutlineIcon>
      </div>
    </div>
  );
}

export default Header;

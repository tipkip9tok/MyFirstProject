import React from 'react';
import classes from './Header.module.css';

const Header = () => {
   return <header className = {classes.header}>
      <img src='https://jobstrategy.ru/wp-content/uploads/2015/12/shell-logo-400x400-180x180.png' />
      <span>Шмалим Липкий</span>
   </header>
}

export default Header;
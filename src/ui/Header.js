import React, { useEffect, useState } from "react";
import classNames from 'classnames';

import avatar from 'assets/avatar.png';
import logo from 'assets/logo-full.png';

function Header() {

  const [floating, setFloating] = useState(false);

  useEffect(() =>{
    
    const handleScroll = () => {
      if(window.scrollY>100) {
        setFloating(true);
      }else{
        setFloating(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return() => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className={classNames("header", {'header--float': floating})}>
      <img 
        className="header__logo" 
        src={logo}
        alt="NEtflix Logo"
      />

      <img 
        className="header__avatar" 
        src={avatar}
        alt="NEtflix Avatar"
      />
    </div>
  );
}

export default Header;
import React from 'react';

const Header = () => {
  return(
    <div className="header__container">
      <div className="header__languaje">
        <div className="">ES</div>
        <div className="">EN</div>
        <div className="">CAT</div>
      </div>
      <div className="header__nav">
        <button>FORUM</button>
        <button>CROWDFUNDING</button>
      </div>
    </div>
  )
}

export default Header;
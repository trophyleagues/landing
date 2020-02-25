import React from 'react';
import {useDispatch} from 'react-redux';
import es_flag from '../assets/flags/es_flag.png';
import en_flag from '../assets/flags/en_flag.png';
import cat_flag from '../assets/flags/cat_flag.png';

const Header = () => {
  const dispatch = useDispatch();
  return(
    <div className="header__container">
      <div className="header__languaje">
        <div className="header__flag" onClick={() => dispatch({type: 'SET_LANG', payload: 'es'})}><img src={es_flag} alt="Español" /></div>
        <div className="header__flag" onClick={() => dispatch({type: 'SET_LANG', payload: 'en'})}><img src={en_flag} alt="English" /></div>
        <div className="header__flag" onClick={() => dispatch({type: 'SET_LANG', payload: 'cat'})}><img src={cat_flag} alt="Catalá" /></div>
      </div>
      <div className="header__nav">
        <button>FORUM</button>
        <button>CROWDFUNDING</button>
      </div>
    </div>
  )
}

export default Header;
import React from 'react';
import {Link} from 'react-router-dom';
import sign from '../assets/sign.gif';

const SignUp = () => {
  return(
    <div className="signup__container">
      <img src={sign} alt="Sign in!" />
      <form className="">
        <input type="text" placeholder="USERNAME" /><br />
        <input type="email" placeholder="EMAIL" /><br />
        <input type="text" placeholder="COUNTRY" /><br />
        <input type="password" placeholder="PASSWORD" /><br />
        <input type="checkbox" /><label><Link to="/terms">I accept the general conditions of use</Link></label><br />
        <button>Pre registration</button><br />
        <div className="signup__registered">
          <a href="/login"><small>I already have and account, log in</small></a>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useForceUpdate} from '../Hooks/useForceUpdate';
import {Link} from 'react-router-dom';
import sign from '../assets/sign.gif';
import axios from 'axios';
import {FormLang} from '../langs/langs';

const SignUp = () => {
  const forceUpdate = useForceUpdate()
  const lang = useSelector(state => state.front.lang)
  const [Form, setFormLang] = useState(FormLang);

  useEffect(() => {
    Form.setLanguage(lang)
    forceUpdate()
  }, [lang])

  return(
    <div className="signup__container">
      <img src={sign} alt="Sign in!" />
      <form className="">
        <input type="text" placeholder={Form.name} /><br />
        <input type="email" placeholder={Form.email} /><br />
        <input type="text" placeholder={Form.country} /><br />
        <input type="password" placeholder={Form.password} /><br />
        <input type="checkbox" /><label><Link to="/terms" target="_blank">{Form.terms}</Link></label><br />
        <button>{Form.submit}</button><br />
        <div className="signup__registered">
          <a href="/login"><small>{Form.logIn}</small></a>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
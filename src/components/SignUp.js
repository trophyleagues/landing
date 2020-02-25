import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useForceUpdate} from '../Hooks/useForceUpdate';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faFlag, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import sign from '../assets/sign.gif';
import axios from 'axios';
import {FormLang} from '../langs/langs';

const SignUp = () => {
  const forceUpdate = useForceUpdate()
  const lang = useSelector(state => state.front.lang)
  const [Form, setFormLang] = useState(FormLang);
  const [checkbox, setCheckbox] = useState(false)
  useEffect(() => {
    Form.setLanguage(lang)
    forceUpdate()
  }, [lang])

  function handleSubscription(evt) {
    evt.preventDefault()
    if(checkbox) {
      let {name, email, country, password} = evt.target
      let data = {
        name: name.value,
        email: email.value,
        country: country.value,
        password: password.value
      }
      axios.post('./php/register.php', data).then(ok => alert(ok)).catch(err => alert(err))
      console.log(data)
    } else {
      alert("Debes aprobar los términos y condiciones de uso")
    }
  }

  return(
    <div className="signup__container">
      <img src={sign} alt="Sign in!" />
      <form onSubmit={(e) => handleSubscription(e)}>
        <FontAwesomeIcon icon={faUser} /><input type="text" placeholder={Form.name} name="name" /><br />
        <FontAwesomeIcon icon={faEnvelope} /><input type="email" placeholder={Form.email} name="email" /><br />
        <FontAwesomeIcon icon={faFlag} /><input type="text" placeholder={Form.country} name="country" /><br />
        <FontAwesomeIcon icon={faUserSecret} /><input type="password" placeholder={Form.password} name="password" /><br />
        <div><input type="checkbox" value={checkbox} onClick={() => setCheckbox(!checkbox)}/><label><Link to="/terms" target="_blank">{Form.terms}</Link></label></div><br />
        <button>{Form.submit}</button><br />
        <div className="signup__registered">
          <a href="/login"><small>{Form.logIn}</small></a>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
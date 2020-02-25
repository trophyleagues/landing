import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useForceUpdate} from '../Hooks/useForceUpdate';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faFlag, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
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
      <div className="socials_container">
        <Link to="https://www.facebook.com/TrophyLeagues-2213341382217527" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /></Link>
        <Link to="https://twitter.com/TrophyLeagues" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link>
        <Link to="https://www.instagram.com/trophyleagues/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
        <Link to="https://www.youtube.com" target="_blank"><FontAwesomeIcon icon={faYoutube} /></Link>
      </div>
      <img src={sign} alt="Sign in!" />
      <form onSubmit={(e) => handleSubscription(e)}>
        <div className="signup_formPart"><FontAwesomeIcon icon={faUser} /><input type="text" placeholder={Form.name} name="name" /></div>
        <div className="signup_formPart"><FontAwesomeIcon icon={faEnvelope} /><input type="email" placeholder={Form.email} name="email" /></div>
        <div className="signup_formPart"><FontAwesomeIcon icon={faFlag} /><input type="text" placeholder={Form.country} name="country" /></div>
        <div className="signup_formPart"><FontAwesomeIcon icon={faUserSecret} /><input type="password" placeholder={Form.password} name="password" /></div>
        <div className="signup_formPart"><input type="checkbox" value={checkbox} onClick={() => setCheckbox(!checkbox)}/><label><Link to="/terms" target="_blank">{Form.terms}</Link></label></div>
        <button>{Form.submit}</button><br />
        <div className="signup__registered">
          <a href="/login"><small>{Form.logIn}</small></a>
        </div>
      </form>
    </div>
  )
}

export default SignUp;
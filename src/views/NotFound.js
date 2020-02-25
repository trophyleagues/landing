import React from 'react';
import '../styles/notfound.scss'
const NotFound = (props) => {
  return(
    <div className="notfound__container">
      No se encontró esta página<br />
      <button onClick={() => props.history.push("/")}>Ir al inicio</button>
    </div>
  )
}

export default NotFound;
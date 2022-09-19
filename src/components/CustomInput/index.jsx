import { useEffect, useState } from 'react';

import './styles.css'

function CustomInput( props ) {
  const [toggleInvalidLabel, setToggleInvalidLabel] = useState('');

  useEffect(() => {
      setToggleInvalidLabel(props.validate.handler === false ? 'invalid' : 'valid');
  }, [props.validate.handler]);

  if (props.type == "checkbox") {
    return (
        <div className="container">
            <label className="checkbox"><input type={props.type} name="checkbox" onChange={ e => props.handleChange(e.target.checked) } />I accept the terms and privacy</label>
            <label className={toggleInvalidLabel}>{props.validate.text}</label>
        </div>
    )
  }

  return (
    <div className="container">
        <label>{props.label} {props.required ? '*' : ''}</label>
        <input type={props.type} placeholder={props.placeholder} onChange={ e => props.handleChange(e.target.value) } />
        <label className={toggleInvalidLabel}>{props.validate.text}</label>
    </div>
  )
}

export default CustomInput
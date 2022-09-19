import { useEffect, useState } from 'react';

import './styles.css'

const CustomInput = ( {label, type, required, placeholder, validate, handleChange} ) => {
  const [toggleInvalidLabel, setToggleInvalidLabel] = useState('');

  useEffect(() => {
      setToggleInvalidLabel(validate.handler === false ? 'invalid' : 'valid');
  }, [validate.handler]);

  if (type == "checkbox") {
    return (
        <div className="container">
            <label className="checkbox"><input type={type} name="checkbox" onChange={ e => handleChange(e.target.checked) } />I accept the terms and privacy</label>
            <div className="error"><label className={toggleInvalidLabel}>{validate.text}</label></div>
        </div>
    )
  }

  return (
    <div className="container">
        <label>{label} {required ? '*' : ''}</label>
        <input type={type} placeholder={placeholder} onChange={ e => handleChange(e.target.value) } />
        <div className="error"><label className={toggleInvalidLabel}>{validate.text}</label></div>
    </div>
  )
};

export default CustomInput
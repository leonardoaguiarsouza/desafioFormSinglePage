import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { PropTypes } from 'prop-types';

import './styles.css'

const CustomInput = ( {value, label, type, required, mask, placeholder, validate, handleChange} ) => {
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
        <InputMask value={value} type={type} mask={mask} placeholder={placeholder} onChange={ e => handleChange(e.target.value) } />
        <div className="error"><label className={toggleInvalidLabel}>{validate.text}</label></div>
    </div>
  )
};

export default CustomInput

CustomInput.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    mask: PropTypes.string,
    placeholder: PropTypes.string,
    validate: PropTypes.object,
    handleChange: PropTypes.func
}

CustomInput.defaultProps = {
    label: 'Input label',
    type: 'text',
    required: false,
    validate: {
        text: 'Field Invalid',
        handler: null
    }
}
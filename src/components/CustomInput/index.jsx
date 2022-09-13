import { useEffect, useState } from 'react';

import './styles.css'

function CustomInput( props ) {
  const [label, setLabel] = useState(props.label);

  useEffect(() => {
    if (props.required) {
      setLabel(label + ' *');
    }
  }, []);

  return (
    <div className="container">
        <label>{label}</label>
        <input type={props.type} placeholder={props.placeholder} required={props.required} />
    </div>
  )
}

export default CustomInput
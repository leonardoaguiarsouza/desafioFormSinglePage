import './styles.css'

import img from '../../assets/black_logo.png';

const Header = ( element ) => {
  return (
    <div className="header">
        <img src={img}></img>
        {element.children}
    </div>
  )
}

export default Header
import './styles.css'

const Header = ( element ) => {
  return (
    <div className="header">
        <img src="../../src/assets/black_logo.png"></img>
        {element.children}
    </div>
  )
}

export default Header
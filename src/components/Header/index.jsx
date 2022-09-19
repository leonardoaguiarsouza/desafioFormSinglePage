import './styles.css'

function Header( props ) {
  return (
    <div className="header">
        <img src="../../src/assets/black_logo.png"></img>
        {props.children}
    </div>
  )
}

export default Header
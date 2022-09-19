import './styles.css'

const Box = ( element ) => {
  return (
    <div className="box">
        {element.children}
    </div>
  )
};

export default Box
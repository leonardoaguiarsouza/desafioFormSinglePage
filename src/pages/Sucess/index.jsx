import Box from '../../components/Box'
import Header from '../../components/Header'
import './styles.css'

function Sucess( props ) {
  return (
    <Box>
        <div className="content">
        <Header />
            <strong>Success!</strong>
            <button type="button">Go Back!</button>
        </div>
    </Box>
  )
}

export default Sucess
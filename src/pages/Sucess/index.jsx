import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import Header from '../../components/Header'
import './styles.css'

const Sucess = () => {
  return (
    <Box>
        <div className="content">
            <Header />
            <strong>Success!</strong>
            <Link to="/">
                <button type="button">Go Back!</button>
            </Link>
        </div>
    </Box>
  )
}

export default Sucess
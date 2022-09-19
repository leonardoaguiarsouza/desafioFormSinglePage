import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import Header from '../../components/Header'
import './styles.css'

const _401 = () => {
  return (
    <Box>
        <div className="content">
            <Header />
            <strong>Erro 401</strong>
            <Link to="/">
                <button type="button">Go Back!</button>
            </Link>
        </div>
    </Box>
  )
}

export default _401
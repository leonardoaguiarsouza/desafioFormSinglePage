import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Box from '../../components/Box'
import Header from '../../components/Header'
import './styles.css'

const Sucess = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    useEffect(() => {
        if (state !== true) {
            navigate("/401");
        }
    }, []);

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
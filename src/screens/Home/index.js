import './styles.css';
import TextField from '@mui/material/TextField';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../router/AppRoutes';
import NavBar from '../../router/NavBar';

function Home () {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className='contentContainer'>
                    <h1 className='welcomeMsg'>Welcome back! </h1>
                </div>
            </div>
        </>
    );
}

export default Home;
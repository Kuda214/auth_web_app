import './styles.css';
import NavBar from '../../router/NavBar';
import MobileNavBar from '../../router/MobileNavBar';
import store from '../../ReduxStore/store';
import Unauthorized from '../Unauthorized';
import { useMediaQuery } from '@material-ui/core';

function Home () {

    const { email, password, isValid } = store.getState().auth;
    const isMobile = useMediaQuery('(max-width: 600px)');

    if (isValid && email !== null && password !== null) {
        //continue
    } else {
        
        return (
            <Unauthorized />
        )
    }

    if (isMobile) {
        return(
            <>
                <MobileNavBar activeBtnId={1} />
                <div className="container">
                    <div className='contentContainer'>
                        <h1 className='welcomeMsg'>Welcome back! </h1>
                    </div>
                </div>
            </>
        );
    }
    else
    {
        return (
            <>
                <NavBar activeBtnId={1} />
                <div className="container">
                    <div className='contentContainer'>
                        <h1 className='welcomeMsg'>Welcome back! </h1>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
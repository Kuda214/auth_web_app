import './styles.css';
import NavBar from '../../router/NavBar';
import MobileNavBar from '../../router/MobileNavBar';
import ProfileImg from '../../assets/imgs/profileImg.jpg';
import store from '../../ReduxStore/store';
import Unauthorized from '../Unauthorized';
import { useMediaQuery } from '@material-ui/core';

function Account () {

    const { email, password, isValid } = store.getState().auth;
    const isMobile = useMediaQuery('(max-width: 600px)');


    if (isValid && email !== null && password !== null) {
        //continue
        // console.log("Logged in user is: " , email , " " + password)
    } else {
        
        return (
            <Unauthorized />
        )
    }
       
    if (isMobile)
    {
        return (
            <>
                <MobileNavBar activeBtnId={2} />

                <div className="container">
                    <div className='contentContainer'>
                            <img className='imgMobile' src = {ProfileImg} alt="Alt"></img>

                            <div className='infoContainer'>
                                <h1 className='infoTitle'>Email:  {email}</h1>
                                <h1 className='infoTitle'>Password: {password} </h1>
                            </div>
                    </div>
                </div>
            </>
        );
    }
    else
    {
        return (
            <>
                <NavBar activeBtnId={2} />
    
                <div className="container">
                    <div className='contentContainer'>
                            <img className='img' src = {ProfileImg} alt="Alt"></img>
    
                            <div className='infoContainer'>
                                <h1 className='infoTitle'>Email:  {email}</h1>
                                <h1 className='infoTitle'>Password: {password} </h1>
                            </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Account;
import './styles.css';
import TextField from '@mui/material/TextField';
import AppRoutes from '../../router/AppRoutes';
import NavBar from '../../router/NavBar';
import ProfileImg from '../../assets/imgs/profileImg.jpg';


function Account () {
    return (
        <>
            <NavBar activeBtnId={2} />

            <div className="container">
                <div className='contentContainer'>
                        <img className='img' src = {ProfileImg} alt="Alt"></img>
                        
                        <div className='infoContainer'>
                            <h1 className='infoTitle'>Email: </h1>
                            <h1 className='infoTitle'>Password: </h1>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Account;
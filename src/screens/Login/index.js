import { TextField } from '@mui/material';
import './styles.css';
import {styles} from './styles.css';

function Login () {
    return (
        <div className="container">
            <div className="loginContainer">
                <h1 className='containerTitle'>Login</h1>

                <form className='formContainer'>
                    <div className='formGroup'>
                        <TextField 
                            label='Email'
                            className='formInput' 
                            type='email'
                            required 
                        />

                        <br/>
                        <br/>

                        <TextField 
                            label='Password'
                            className='formInput' 
                            type='password'
                            required 
                        />
                        <br/>
                        <br/>

                        <button className='formButton'>Login</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;
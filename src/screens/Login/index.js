import './styles.css';
import ButtonComponent from '../../components/ButtonComponent';
import TextFieldComponent from '../../components/TextFieldComponent';
import { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Login = () =>{

    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');
    const { loginSuccess, setLoginSuccess } = useState('');
    const navigate = useNavigate();
    // const classes = useStyles();


    const login = () => {
        console.log('login');
        console.log('email: ' + email);
        console.log('password: ' + password);


        navigate('/home');
        
    }

    // useEffect(() => {
    //     navigate('/home');
    // }, [true]);



    return (
        <div className="container">
            <div className="loginContainer">
                <h1 className='containerTitle'>Login</h1>

                <form className='formContainer' >
                    <div className='formGroup'>
                        <TextFieldComponent 
                            txtLabel={'Email'}
                            txtType={'email'}
                            txtOnChange =  {setEmail}
                            isRequired={true}
                        />

                        <br/>
                        <br/>

                        <TextFieldComponent 
                            txtLabel={'Password'}
                            txtxType={'password'}
                            txtOnChange={setPassword}
                            isRequired={true}
                        />
                        <br/>
                        <br/>

                        <ButtonComponent onClick={login} btnName={"Login"} btnSize={"large"} variant='contained'  />
                        {/* <Button onClick={() => login()} variant='contained' size={'Large'} > Login </Button> */}

                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;
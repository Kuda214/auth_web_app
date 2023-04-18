import './styles.css';
import ButtonComponent from '../../components/ButtonComponent';
import TextFieldComponent from '../../components/TextFieldComponent';
import { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import store from '../../ReduxStore/store';
import { setEmailAndPassword ,resetAuthState} from '../../ReduxStore/authSlice';
import { useMediaQuery } from '@material-ui/core';



const Login = () =>{

    const [inputEmail, setInputEmail ] = useState('');
    const [ inputPassword, setInputPassword ] = useState('');
    const [ emailError, setEmailError ] = useState(false);
    const [ passwordError, setPasswordError ] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const isMobile = useMediaQuery('(max-width: 600px)');


    const navigate = useNavigate();

    useEffect(() => {
        store.dispatch(resetAuthState());
    }, []);

    const login = () => {
        
        
        if(validateEmail(inputEmail) && validatePassword(inputPassword))
        {
            setEmailError(false);
            setPasswordError(false);
            //navigate to home page if credentials are correct
           
            if(inputEmail === "darryn@randrtechsa.com" && inputPassword === "P@55w0rd@1")
            {
                const isValid = true;
                store.dispatch(setEmailAndPassword({ email: inputEmail, password: inputPassword, isValid: isValid }));
                setIsError(false);
                setIsLoading(true);
                setTimeout(() => {
                setIsLoading(false);
                navigate('/home');

                }, 2000);
            }
            else
            {
                setIsError(true);
            }
                
        }
        else
        {
            //show error message
            if(!validateEmail())    
            {
                setEmailError(true);
            }
            else{
                setEmailError(false);
            }

            if(!validatePassword())
            {
                setPasswordError(true);
            }
            else
            {
                setPasswordError(false);
            }

        }
    }


    const handlePasswordChange = (event) => {

        //check if all rules apply 
        if (validatePassword(event.target.value)) {
            setInputPassword(event.target.value);
            setPasswordError(false);
        }
        else
        {
            setPasswordError(true);
        }

    }

    const handleEmailChange = (event) => {
        console.log(inputEmail);
        //check if all rules apply
        if (validateEmail(event.target.value)) {
            setInputEmail(event.target.value);
            setEmailError(false);
        }
        else
        {
            setEmailError(true);
        }
    }

    const validateEmail = (e) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(e);
    }

    const validatePassword = (e) => {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return re.test(e);
    }

    if (isMobile) {
        return(
            <div className="container">
                <div className="loginContainerMobile">
                    <h1 className='containerTitle'>Login</h1>

                    <p className='errorText'> {isError ? 'Wrong credentials, Please try again' : null}</p>

                    <form className='formContainerMobile' >
                        <div className='formGroup'>
                            <TextFieldComponent 
                                txtLabel={'Email'}
                                txtType={'email'}
                                txtOnChange =  {handleEmailChange}
                                isRequired={true}
                                isMobile={true}
                            />
                            <p className='errorText'>{emailError ? 'Please enter a valid email' : ''}</p>

                            <br/>
                            <br/>

                            <TextFieldComponent 
                                txtLabel={'Password'}
                                txtxType={'password'}
                                txtOnChange={handlePasswordChange}
                                isRequired={true}
                                isMobile={true}
                            />
                            <p className='errorText'>{passwordError ? 'Please enter a valid Password' : ''}</p> 
                            <p className='errorText'>{passwordError ? '8 chars min, Atleast 1 Num, ' : ''}</p>
                            <p className='errorText'>{passwordError ? '1 Special char, 1 Caps, 1 small letter ' : ''}</p>


                            <br/>
                            <br/>

                            <div className='btnAction'>
                                {isLoading ? <CircularProgress size={24} /> : null }

                                <ButtonComponent onClick={login} 
                                    btnName={  "Login"} 
                                    btnSize={"large"} 
                                    variant='contained'  
                                    disabled={isLoading}
                                    isMobile={true}
                                />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
    else
    {

        return (
            <div className="container">
                <div className="loginContainer">
                    <h1 className='containerTitle'>Login</h1>

                    <p className='errorText'> {isError ? 'Wrong credentials, Please try again' : null}</p>

                    <form className='formContainer' >
                        <div className='formGroup'>
                            <TextFieldComponent 
                                txtLabel={'Email'}
                                txtType={'email'}
                                txtOnChange =  {handleEmailChange}
                                isRequired={true}
                                isMobile={false}
                            />
                            <p className='errorText'>{emailError ? 'Please enter a valid email' : ''}</p>

                            <br/>
                            <br/>

                            <TextFieldComponent 
                                txtLabel={'Password'}
                                txtxType={'password'}
                                txtOnChange={handlePasswordChange}
                                isRequired={true}
                                isMobile={false}
                            />
                            <p className='errorText'>{passwordError ? 'Please enter a valid Password' : ''}</p> 
                            <p className='errorText'>{passwordError ? '8 chars min, Atleast 1 Num, ' : ''}</p>
                            <p className='errorText'>{passwordError ? '1 Special char, 1 Caps, 1 small letter ' : ''}</p>


                            <br/>
                            <br/>

                            <div className='btnAction'>
                                {isLoading ? <CircularProgress size={24} /> : null }

                                <ButtonComponent onClick={login} 
                                    btnName={  "Login"} 
                                    btnSize={"large"} 
                                    variant='contained'  
                                    disabled={isLoading}
                                    isMobile={false}
                                />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default Login;
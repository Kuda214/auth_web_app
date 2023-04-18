import './styles.css';
import ButtonComponent from '../../components/ButtonComponent';
import TextFieldComponent from '../../components/TextFieldComponent';
import { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () =>{

    const [email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ emailError, setEmailError ] = useState(false);
    const [ passwordError, setPasswordError ] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const navigate = useNavigate();
    // const classes = useStyles();


    const login = () => {
        
     
        if(validateEmail() && validatePassword())
        {
            //navigate to home page
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              navigate('/home');

            }, 2000);
            
        }
        else
        {
            //show error message
            if(!validateEmail())    
            {
                setEmailError(true);
            }

            if(!validatePassword())
            {
                setPasswordError(true);
            }

        }
    }


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);

        //check if all rules apply 
        if (validatePassword()) {
            setPasswordError(false);
        }
        else
        {
            setPasswordError(true);
        }

    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

        //check if all rules apply
        if (validateEmail()) {
            setEmailError(false);
        }
        else
        {
            setEmailError(true);
        }
    }

    const validateEmail = () => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const validatePassword = () => {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return re.test(password);
    }

    return (
        <div className="container">
            <div className="loginContainer">
                <h1 className='containerTitle'>Login</h1>

                <form className='formContainer' >
                    <div className='formGroup'>
                        <TextFieldComponent 
                            txtLabel={'Email'}
                            txtType={'email'}
                            txtOnChange =  {handleEmailChange}
                            isRequired={true}
                        />
                        <p className='errorText'>{emailError ? 'Please enter a valid email' : ''}</p>

                        <br/>
                        <br/>

                        <TextFieldComponent 
                            txtLabel={'Password'}
                            txtxType={'password'}
                            txtOnChange={handlePasswordChange}
                            isRequired={true}
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
                            />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default Login;
import './styles';
import { useStyles } from './styles';
import { Button } from '@mui/material';

const ButtonComponent = ({btnName, btnSize, onClick, disabled, isMobile}) => {
    const classes = useStyles();

    if(isMobile)
    {
        return (
            <Button 
                disabled={disabled} 
                onClick={onClick} 
                variant='contained' 
                size={btnSize} 
                className={classes.formButtonMobile}> 
                {btnName} 
            </Button>
        );
    }
    else
    {
        return (
            <Button 
                disabled={disabled} 
                onClick={onClick} 
                variant='contained' 
                size={btnSize} 
                className={classes.formButton}> 
                {btnName} 
            </Button>
        );
    }
  

}

export default ButtonComponent;
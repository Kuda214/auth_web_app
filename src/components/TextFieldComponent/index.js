import './styles';
import { useStyles } from './styles';
import { TextField } from '@mui/material';

const TextFieldComponent = ({txtLabel, txtType, txtOnChange, isRequired, isMobile}) => {
    const classes = useStyles();

    if(isMobile)
    {
        return(
            <TextField onChange={txtOnChange} className={classes.formTextFieldMobile} label={txtLabel} type={txtType} required={isRequired} />
        );
    }
    else
    {
        return (
            <TextField onChange={txtOnChange} className={classes.formTextField} label={txtLabel} type={txtType} required={isRequired} />
        );
    }

}

export default TextFieldComponent;
import './styles';
import { useStyles } from './styles';
import { TextField } from '@mui/material';

const TextFieldComponent = ({txtLabel, txtType, txtOnChange, isRequired}) => {
    const classes = useStyles();

    return (
        <TextField onChange={txtOnChange} className={classes.formTextField} label={txtLabel} type={txtType} required={isRequired} />
    );

}

export default TextFieldComponent;
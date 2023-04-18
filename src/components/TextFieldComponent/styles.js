import { makeStyles } from '@mui/styles';
import Colors from '../../Colors/index.js';

export const useStyles = makeStyles((theme) => ({
    formTextField: {
        borderColor: Colors.primary.main,
        color: '#FFFFFF',
        '&:hover': {
            borderColor: Colors.primary.dark,
            color: '#FFFFFF',
        },  
        width: '20vw',
        height: '8vh'
    },
}));
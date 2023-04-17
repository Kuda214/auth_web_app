import { makeStyles } from '@mui/styles';
import Colors from '../../Colors/index.js';

export const useStyles = makeStyles((theme) => ({
    formButton: {
        backgroundColor: Colors.primary.main,
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: Colors.primary.dark,
            color: '#FFFFFF',
        },  
        width: '20vw',
        height: '6vh',
    },
}));
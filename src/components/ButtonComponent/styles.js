import { makeStyles } from '@mui/styles';
import Colors from '../../Colors/index.js';

export const useStyles = makeStyles((theme) => ({
    formButton: {
        backgroundColor: Colors.primary.main,
        color: Colors.primary.white,
        '&:hover': {
            backgroundColor: Colors.primary.dark,
            color: Colors.primary.white,
        },  
        width: '20vw',
        height: 'vh',
        marginTop: '8vh',
    },
    formButtonMobile:{
        backgroundColor: Colors.primary.main,
        color: Colors.primary.white,
        '&:hover': {
            backgroundColor: Colors.primary.dark,
            color: Colors.primary.white,
        },  
        width: '90vw',
        height: 'vh',
        marginTop: '8vh',
    }
}));
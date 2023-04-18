import { makeStyles } from '@mui/styles';
import Colors from '../Colors/index.js';

export const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: Colors.primary.grey,
        color: Colors.primary.white,
    },
    activeBtn: {
        color: Colors.primary.light,
        '&:hover': {
            color: Colors.primary.dark,
        },
    },
    unActiveBtn: {
        color:Colors.primary.white,
        '&:hover': {
            color: Colors.primary.light,
        },
        },  
}));


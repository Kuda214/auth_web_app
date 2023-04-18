import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';


function NavBar({activeBtnId}) {
    const classes = useStyles();
    const navigate = useNavigate();

    if (activeBtnId === 0) {
    }
    else{
    return (
        
        <div className={classes.root}>
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <div>
            <Button onClick={()=> navigate('/home')} className={activeBtnId === 1 ? classes.activeBtn : classes.unActiveBtn} >Home</Button>
            <Button onClick={()=> navigate('/account')} className={activeBtnId ===1 ? classes.unActiveBtn : classes.activeBtn} >Account</Button>
            </div>
        </Toolbar>
        </AppBar>
        </div>
    );
    }
}

export default NavBar;

import React, { useEffect } from 'react';
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
        <AppBar position="static"  touchRippleProps={{ delay: 100 }}>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h4">
                auth_web_app
            </Typography>
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

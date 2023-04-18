import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#000',
    },
    activeBtn: {
        color: 'orange',
        '&:hover': {
            color: 'darkorange',
        },
    },
    unActiveBtn: {
        color: 'white',
        '&:hover': {
            color: 'orange',
        },
        },  
    }));

    function NavBar({activeBtnId}) {
        const classes = useStyles();
        const navigate = useNavigate();

    if (activeBtnId == 0) {
    }
    else{
    return (
        
        <div className={classes.root}>
        <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h4">
            auth_web_app
            </Typography>
            <div>
            <Button onClick={()=> navigate('/home')} className={activeBtnId == 1 ? classes.activeBtn : classes.unActiveBtn} >Home</Button>
            <Button onClick={()=> navigate('/account')} className={activeBtnId ==2 ? classes.unActiveBtn : classes.activeBtn} >Account</Button>
            </div>
        </Toolbar>
        </AppBar>
        </div>
    );
    }
}

export default NavBar;

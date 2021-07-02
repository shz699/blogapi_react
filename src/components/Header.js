import React from 'react';
import  AppBar  from '@material-ui/core/AppBar';
import  Toolbar  from '@material-ui/core/Toolbar';
import  Typography  from '@material-ui/core/Typography';
import  CssBaseline  from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: '#fff',
        background: '#000',
    },
}));

function Header(){
    const classes = useStyles()
    return(
            <React.Fragment>
                <CssBaseline />
                    <AppBar
                    position='static'
                    elevation={1}
                    className={classes.appBar}
                    >
                        <Toolbar>
                            <Typography
                            varient='h6' color='inherit' noWrap>
                                Blogmeup
                            </Typography>
                        </Toolbar>
                    </AppBar>
            </React.Fragment>
        )
}

export default Header;
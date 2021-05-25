import React, { Component } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import { amber } from '@material-ui/core/colors';

class NavBar extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <SportsCricketIcon style={{ color: amber[500] }}></SportsCricketIcon>
                        <Typography style={{ color: amber[500] }}>Live Cricket Score</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar;
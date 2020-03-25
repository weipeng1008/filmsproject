import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function Navbar(){
    return(
        <AppBar position="staic">
            <Toolbar>
                <Typography variant="h6">
                    My film website
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
import React from 'react'
//import TicketContainer from './TicketContainer'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'


const useStyles = makeStyles( theme => ({
    title: {
        flexGrow: 1,
        position: "relative",
    }
}))
export default function Dashboard() {
    const classes = useStyles();
    return (
        <AppBar position="sticky">
        <Toolbar>
         <Typography variant="h6" className={classes.title} color="inherit" aria-label="menu">
            About
         </Typography>
         <Typography variant="h6" className={classes.title} color="inherit" aria-label="menu" edge="start">
            Contact
         </Typography>
        </Toolbar>
      </AppBar>
    )
}

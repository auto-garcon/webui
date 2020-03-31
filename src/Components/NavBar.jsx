import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    links: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}))
export default function NavBar() {
    const classes = useStyles();
    const preventDefault = event => event.preventDefault();
    
    return (
        <AppBar position="static" style={{ background: "#2b2d42"}}>
            <Toolbar>
                <Typography variant="h6"  className={classes.links} color="inherit" aria-label="menu">
                    <Link href="#" onClick={preventDefault} color="inherit">
                        About
                    </Link>
                    <Link href="/contact" onClick={preventDefault}  color="inherit" >
                        Contact Us
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

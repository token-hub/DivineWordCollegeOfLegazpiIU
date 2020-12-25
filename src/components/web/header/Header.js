import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import dwclLogoWithText from '../../../assets/images/logo-with-text.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    header: {
        height: '110px',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
    },
    headerContent: {
        height: '100%',
    },
    headerLeft: {
        height: '100%',

        [theme.breakpoints.down('md')]: {
            width: '100%',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center'
        },
        [theme.breakpoints.up('md')]: {
            padding: '0',
            width: '60%',
            height: '100%',
        }
    },
    headerRight: {
        width: '40%',
        height: '100%',
        color: 'white',
        padding: '1rem 0',
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
        backgroundSize: 'cover',
    },
    anchorTag: {
       "&:hover" : {
           textDecoration: 'none',
           color: '#ffd877'
       } 
    },
    mediaLinks: {
        color: 'white',
        minWidth: '0',
        paddingLeft: '1rem',

        "&:hover" : {
            color: '#ffd877'
        }
    },
    listItems: {
        display: 'flex',
        flexDirection: 'row',
    }
})
);

const Header = () => {
    const {header, headerContent, headerLeft, headerRight, img, anchorTag, mediaLinks, listItems} = useStyles();

    return (
        <Grid container justify="center" className={header}>
            <Grid item sm={false} md={1} xl={3}></Grid>
            <Grid container item direction="column" sm={12} md={10} xl={6} className={headerContent}>
                <Grid container item alignItems="center" className={headerLeft}>
                    <img className={img} alt="dwcl-logo-with-text" src={dwclLogoWithText} />
                </Grid>

                <Hidden smDown>
                    <Grid container item className={headerRight}>
                        <Grid container item direction="column" alignItems='flex-end'>
                            <Typography variant="subtitle1">
                                <Link href="#" color="inherit" className={anchorTag}>
                                    (052) 480-1239
                                </Link> 
                            </Typography>
                            <Typography variant="subtitle1">
                                <Link href="#" color="inherit" className={anchorTag}>
                                dwclinfo@dwc-legazpi.edu
                                </Link>
                            </Typography>
                        </Grid>

                        <Grid container item direction='column' alignItems='flex-end'>
                            <List aria-label="multimedia-links" disablePadding className={listItems}>
                                <ListItem component='a' href="#" disableGutters={true}>
                                    <ListItemIcon className={mediaLinks}>
                                        <FacebookIcon  />
                                    </ListItemIcon>
                                </ListItem>  

                                <ListItem component='a' href="#" disableGutters={true}>
                                    <ListItemIcon className={mediaLinks}>
                                        <TwitterIcon  />
                                    </ListItemIcon>
                                </ListItem>    

                                <ListItem component='a' href="#" disableGutters={true}>
                                    <ListItemIcon className={mediaLinks}>
                                        <InstagramIcon  />
                                    </ListItemIcon>
                                </ListItem>          
                            </List>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item sm={false} md={1} xl={3}></Grid>
        </Grid>
    )
}

export default Header

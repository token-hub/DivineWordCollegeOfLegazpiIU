import React, {Fragment} from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    header: {
        fontWeight: 600
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
}));

const OurSocialMedialinks = () => {

    const {header, mediaLinks, listItems} = useStyles();

    return (
       <Fragment>
            <Typography gutterBottom variant="h6" className={header}>
                Social Media
            </Typography>
            
            <Grid container item direction='column' alignItems='flex-start'>
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
       </Fragment>
    )
}

export default OurSocialMedialinks

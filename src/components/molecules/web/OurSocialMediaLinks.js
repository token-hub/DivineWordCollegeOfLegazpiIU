import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core/styles';
import {ListIcon} from '../../atoms/web';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    listItems: {
        display: 'flex',
        flexDirection: 'row',
    }
});

const OurSocialMedialinks = () => {

    const {bold, listItems} = useStyles();

    return (
       <>
            <Typography gutterBottom variant="h6" className={bold}>
                Social Media
            </Typography>
            
            <Grid container item direction='column' alignItems='flex-start'>
                <List aria-label="multimedia-links" disablePadding className={listItems}>
                    <ListIcon><FacebookIcon /></ListIcon>
                    <ListIcon><TwitterIcon /></ListIcon>
                    <ListIcon><InstagramIcon /></ListIcon>
                </List>
            </Grid>
       </>
    )
}

export default OurSocialMedialinks

import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core/styles';
import {ListIcon} from '../../atoms/web';
import {ourSocialMediaLinks} from '../../../data/web';


import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const socialMediaObject = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon
}

const renderSocialMediaIcon = media => {
    const Icon = socialMediaObject[media];
    return <Icon />
}

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
                    {
                        ourSocialMediaLinks.map( ({link, icon}, index) => {
                            return <ListIcon key={index} link={link}>{renderSocialMediaIcon(icon)}</ListIcon>
                        } )
                    }
                </List>
            </Grid>
       </>
    )
}

export default OurSocialMedialinks

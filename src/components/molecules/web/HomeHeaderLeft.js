import React from 'react'
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {ListIcon, LinkText} from '../../atoms/web/index';
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
    listItems: {
        display: 'flex',
        flexDirection: 'row',
    }
})

const HomeHeaderLeft = () => {

    const {listItems} = useStyles();

    return (
        <>
            <Grid container item direction="column" alignItems='flex-end'>
                <LinkText text='(052) 480-1239' />
                <LinkText text='dwclinfo@dwc-legazpi.edu' />
            </Grid>
            <Grid container item direction="column" alignItems='flex-end'>
                <List aria-label="multimedia-links" disablePadding classes={{ root: listItems }}>
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

export default HomeHeaderLeft

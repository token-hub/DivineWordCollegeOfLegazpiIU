import React from 'react';
import clsx from  'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import ContactUsBanner from '../../../assets/images/banners/contact-us.jpg';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { renderIconFromObject } from '../../../helpers';

import {
    contactsText,
    contacts,
    fields,
    contactIcon
} from '../data/contactUS';
import GoogleMap from './googleMap/GoogleMap';

const useStyles = makeStyles(theme =>({
    left: {
        padding: '4rem 2rem 2rem'
    },
    right: {
        backgroundColor: '#1D17CE' ,
        padding: '4rem 2rem 2rem 4rem',
        width: '100%',

        [theme.breakpoints.down('sm')]: {
            paddingLeft: '2rem',
        }
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
    listItems: {
        display: 'flex',
        flexDirection: 'row',
    },
    mediaLinks: {
        color: 'black',
        minWidth: '0',
        alignItems: 'center',
        width: '100%'
    },
    paddingLeft: {
        paddingLeft: '.5rem',
        
    },
    input: {
        display: 'flex',
        color: 'white',
        direction: 'row',
        // width:'auto',
        marginBottom: '1rem',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
            borderColor: 'white',
            },
            '&:hover fieldset': {
            borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            },
        },
    },
    white: {
        color: 'white'
    },
    bold: {
        fontWeight: 600
    },
}));

const ContactUs = () => {

    const {bold, right, left, paragraph, mediaLinks, paddingLeft, input, white} = useStyles();

    return (
        <Grid container>
            <Top />
            <Banner img={ContactUsBanner} alt='Contact Us banner' />
               <Grid container>
                    <Grid container item md={6} className={left} >
                        <Grid item md={3} />
                        <Grid item md={9} style={{ flexWrap: 'wrap' }}>
                            <Typography variant='h3' color='primary' className={clsx(bold, paragraph)}>
                                Get in Touch
                            </Typography>
                            <Typography variant='subtitle1' className={paragraph}>
                                Please contact us through:
                            </Typography>
                            
                            {/* <List key='list' aria-label="multimedia-links" disablePadding> */}
                                {
                                    contacts.map( (val ,index) => {
                                        return (
                                            <ListItem index={index} disableGutters={true}>
                                                <ListItemIcon className={mediaLinks}>
                                                    { renderIconFromObject(val, contactIcon) }
                                                    <ListItemText primary={contactsText[val]} className={paddingLeft} />
                                                </ListItemIcon>
                                            </ListItem>     
                                        )
                                    }) 
                                }
                            {/* </List> */}
                        </Grid>
                    </Grid>
                    <Grid item md={6} className={right} color='primary'>
                        <Grid container justify='center' item md={9}>
                            <form style={{ width: '100%' }}>    
                                {
                                    fields.map( ({item, value},index) => {
                                        let extra = {};
                                        if (value === 'textarea') Object.assign(extra, {rows: 10, multiline: true, style: {width: '100%'}  })
                                        
                                        return (
                                            <TextField 
                                                id="outlined-basic" 
                                                type={value}
                                                label={item} 
                                                variant="outlined"
                                                required={true}
                                                fullWidth={true}
                                                size='small' 
                                                InputProps={{ className: input }}
                                                InputLabelProps={{ className: white }}
                                                classes={{ root: input }}
                                                {...extra}
                                            />
                                        )
                                    })
                                }
                            </form>
                        </Grid>
                        <Grid item md={3} />
                    </Grid>
               </Grid>
                <GoogleMap />           
            <Bottom />
        </Grid>
    )
}

export default ContactUs

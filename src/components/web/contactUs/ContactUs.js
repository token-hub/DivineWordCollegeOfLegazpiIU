import React from 'react';
import clsx from  'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import RoomIcon from '@material-ui/icons/Room';
import ListItemText from '@material-ui/core/ListItemText';
import Top from '../shared/Top';
import Bottom from '../shared/Bottom';
import Banner from '../shared/Top/banner';
import ContactUsBanner from '../../../assets/images/banners/contact-us.jpg';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { setObjectGen } from '../../../helpers';

const useStyles = makeStyles(theme =>({
    bold: {
        fontWeight: 600
    },
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
    padding: {  
        padding: '2rem'
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
        width:'auto',
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
}));

const ContactUs = () => {

    const {right, left, padding, bold, paragraph, mediaLinks, paddingLeft, input, white, } = useStyles();

    const setContacts = (icon, text) => {
        return { icon, text };
    }

    const contactIcon = {
        email: EmailIcon,
        phone: PhoneIcon,
        telefax: PhonelinkIcon,
        south: RoomIcon,
        north: RoomIcon,
    }
    
    const contactsText = {
        email: 'dwclinfo@dwc-legazpi.edu',
        phone: '(052)480-1239     (052)480-1239',
        telefax: 'Telefax: (052)480-2148     481-0350 (HS)',
        south: '(SOUTH CAMPUS) - cor.J.P Rizal and Fr. J.L. Bates Sts., Albay District, Legazpi City 4500 Philippines',
        north: '(NORTH CAMPUS) - Capt. F. Aquende Drive, Cruzada, Legazpi City 4500 Philippines',
    }

    const renderContactsIcon = key => {
        const Contact = contactIcon[key];
        return <Contact color='primary' />
    }

    const contacts = ['email', 'phone', 'telefax', 'south', 'north'];

    const fields = [
        setObjectGen('Name', 'text'),
        setObjectGen('Email', 'email'),
        setObjectGen('Contact number', 'number'),
        setObjectGen('Subject', 'text'),
        setObjectGen('Message', 'textarea'),
    ];

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
                            
                            <List aria-label="multimedia-links" disablePadding>
                                {
                                    contacts.map( (val ,index) => {
                                        return (
                                            <ListItem index={index} disableGutters={true}>
                                                <ListItemIcon className={mediaLinks}>
                                                    { renderContactsIcon(val) }
                                                    <ListItemText primary={contactsText[val]} className={paddingLeft} />
                                                </ListItemIcon>
                                            </ListItem>     
                                        )
                                    }) 
                                }
                            </List>
                        </Grid>
                    </Grid>
                    <Grid item md={6} className={right} color='primary'>
                        <Grid justify='center' item md={9}>
                            <form >    
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
                                                required='true'
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
            <Bottom />
        </Grid>
    )
}

export default ContactUs

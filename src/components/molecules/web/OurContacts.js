import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { LinkText } from '../../atoms/web';

const useStyles = makeStyles({
   bold: {
        fontWeight: 600
    },
});

const OurContacts = () => {

    const {bold} = useStyles();

    return (
       <>
            <Typography gutterBottom variant="h6" className={bold}>
                Our Contacts
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                TELEPHONE NUMBERS
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                (052)480-1239
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                (052)820-4126
            </Typography>

            <Typography variant="overline" display="block" gutterBottom>
                E-MAIL
            </Typography>

            <LinkText text='dwclinfo@dwc-legazpi.edu' />

            <Typography variant="overline" display="block" gutterBottom>
                TELEFAX
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                (052)480-2148
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                481-0305 (HS)
            </Typography>
       </>
    )
}

export default OurContacts

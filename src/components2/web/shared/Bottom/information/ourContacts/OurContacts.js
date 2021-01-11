import React, {Fragment} from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    link: {
        color: 'white',
        "&:hover": {
            color: '#ffd877'
        }
   },
   header: {
        fontWeight: 600
    },
}));

const OurContacts = () => {

    const {header, link} = useStyles();

    return (
       <Fragment>
            <Typography gutterBottom variant="h6" className={header}>
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
            <Typography variant="subtitle2" display="block" gutterBottom>
                <Link href='#' underline='none' className={link}>
                    dwclinfo@dwc-legazpi.edu
                </Link>
            </Typography>

            <Typography variant="overline" display="block" gutterBottom>
                TELEFAX
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                (052)480-2148
            </Typography>
            <Typography variant="subtitle2" display="block" gutterBottom>
                481-0305 (HS)
            </Typography>
       </Fragment>
    )
}

export default OurContacts

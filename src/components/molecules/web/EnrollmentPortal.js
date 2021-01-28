import React from 'react'
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    portal: {
        padding: '.5rem 1rem',
        background: '#d2d2ee',
        borderRadius: '40px',
        position: 'absolute',
        top: '25px',
        right: '50px',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        [theme.breakpoints.down('md')] : {
            right: '10px',
        },
    },
    link: {
        fontSize: '1.5rem',
        color: '#1D17CE',
        [theme.breakpoints.down('md')] : {
            fontSize: '.9rem',
        },

        "&:hover":{
            fontWeight: 600
        }

    }
}));

const EnrollmentPortal = () => {

    const {portal, link} = useStyle();

    return (
        <div className={portal}>
            <Link to='https://online.dwc-legazpi.edu' className={link}> Student portal / Online Enrollment </Link>
        </div>
    )
}

export default EnrollmentPortal

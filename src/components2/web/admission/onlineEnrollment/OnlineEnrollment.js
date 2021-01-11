import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CommuteIcon from '@material-ui/icons/Commute';
import LanguageIcon from '@material-ui/icons/Language';

import RenderList from '../../shared/others/renderList';
import { makeStyles } from '@material-ui/core/styles';

import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AdmissionBannerObj } from '../../data/banners';
import { edu, enrollment, sched } from '../../data/admission/onlineEnrollment';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
    noPadding: {
        padding: 0
    },
    listIcon: {
        minWidth: 0,
        color: 'black'
    },
    listIconIndented: {
        paddingLeft: '2rem',
        color: 'gray'
    },
    iconSmall: {
        fontSize: '.5rem',
    },
    icon: {
        marginRight: '.5rem'
    },
});

const OnlineEnrollment = () => {

    const {bold, paragraph, noPadding, listIcon, icon, iconSmall} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.admission.items} title='Online Enrollment' banner={AdmissionBannerObj}>

            <RenderList header='BASIC EDUCATION' data={edu} />
                    {
                        enrollment.map( ({header, title, link}, index) => {
                            return (
                                <div key={index}>
                                    <Typography  variant='subtitle1' color='primary' className={bold}>
                                        {header}
                                    </Typography>
                                    <ListItem component='a' href={link} className={clsx(noPadding, paragraph)}>
                                        <ListItemIcon className={listIcon}>
                                           { index === 0 ?  <LanguageIcon color='primary' className={icon} /> : <CommuteIcon color='primary' className={icon} /> }
                                        </ListItemIcon>
                                        <ListItemText primary={title} />
                                    </ListItem> 
                                </div>
                            )
                        })
                    }
                <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                    SCHEDULE OF ENROLLMENT
                </Typography>
                {
                    sched.map( ({item, value}, index) => {
                        return (
                            <div>
                                <Typography  variant='subtitle1' className={bold}>
                                {item}
                                </Typography>
                                <ListItem component='a' className={clsx(noPadding, paragraph)}>
                                    <ListItemIcon className={listIcon}>
                                        <FiberManualRecordIcon className={clsx(icon, iconSmall)} />
                                    </ListItemIcon>
                                    <ListItemText primary={value} />
                                </ListItem> 
                            </div>
                        )
                    })
                }

                <Typography variant='subtitle1'>
                    Classes (Blended Learning) AUGUST 24, 2020
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default OnlineEnrollment

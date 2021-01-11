import React from 'react';
import clsx from  'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AdmissionBannerObj } from '../../web/data/banners';
import RenderList from '../shared/others/renderList';

import {
    newStudents,
    oldStudents,
    guidanceServices
} from '../data/admission';

import SharedLayout2 from '../shared/others/sharedLayout2';

const useStyles = makeStyles(theme =>({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
    noPadding: {
        padding: 0
    },
    icon: {
        fontSize: '.5rem',
        marginRight: '.5rem'
    },
    listIcon: {
        minWidth: 0,
        color: 'black'
    },
    listIconIndented: {
        paddingLeft: '2rem',
        color: 'gray'
    },
    italic: {
        fontStyle: 'italic'
    },
}));

const Admission = () => {

    const {paragraph, bold, noPadding, listIcon, icon, listIconIndented, italic} = useStyles();

    return (
        <SharedLayout2 banner={AdmissionBannerObj} >
            <Typography variant='subtitle1' align='justify' className={paragraph}>
                <span className={bold}>Divine Word College of Legazpi (DWCL)</span> maintains an open admission policy. This institution accepts qualified freshmen,Curricular Offering for Basic Education. The Divine Word College of Legazpi (DWCL) has been providing quality Christian Education in the Province of Albay for a little over 50 years. DWCL is dedicated in providing a caring environment where students are encourage to develop Christian values,strive for academic excellence and a holistic development consistent of the institution’s thrust of excellence,professionalism and service.
            </Typography>
            <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                Admission Requirements
            </Typography>
            <RenderList header='New Students' data={newStudents} />
            <RenderList header='Old Students' data={oldStudents} />
            <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                GUIDANCE SERVICES
            </Typography>
            <List className={paragraph}>
                {
                    guidanceServices.map( ({item, value},index) => 
                        {
                            return (
                                <>
                                <ListItem className={noPadding}>
                                    <ListItemIcon className={listIcon}>
                                        <FiberManualRecordIcon className={icon} />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem> 
                                    {
                                        value !== null 
                                            ?<List>
                                                {
                                                    value.map(e =>(
                                                        <ListItem className={noPadding}>
                                                            <ListItemIcon className={clsx(listIcon, listIconIndented)}>
                                                                <FiberManualRecordIcon className={icon} />
                                                            </ListItemIcon>
                                                            <ListItemText primary={e} />
                                                        </ListItem>
                                                    ))
                                                }
                                            </List>
                                            : ''
                                    }
                                </>   
                            )
                        }
                    )
                }
            </List>
            
            <Typography variant='subtitle1' color='primary' className={clsx(paragraph, bold)}>
                Admission Guidance and Testing Center
            </Typography>

            <Typography variant='subtitle1' className={clsx(paragraph, bold, italic)}>
                Rm 102 Ground Floor, Left Wing Divine Word College of Legazpi <br />
                Corner Fr. Bates and Rizal Street 4500 Legazpi City Albay, Philippines <br />
                Tel: (052)480-1239 & 820-4126 <br />
            </Typography>
        </SharedLayout2>
    )
}

export default Admission

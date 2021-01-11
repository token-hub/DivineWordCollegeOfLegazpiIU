import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import RenderList from '../../shared/others/renderList';

import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { StudentServicesBannerObj } from '../../data/banners';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem',
        paddingLeft: '1.5rem' 
    },
});

const Clinic = () => {

    const {paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.student_services.items} title='Clinic' banner={StudentServicesBannerObj}>
                <RenderList data={['Medical Care']} />

                <Typography variant='subtitle1' className={paragraph}>
                    The College Medical Clinic is open during school days to provide the students, faculty, and non-teaching personnel medical and first aid services. Common medicines are available at the clinic. New students and transferees including old students should submit themselves to physical assessment and medical check-up during enrollment period. The clinic also gives free consultations on family planning and other medical needs. Clinic hours on schools days, from 8:00 a.m. to 8:30 p.m. except Saturday which is 8:00 a.m.-12:00 noon only. In attendance is a full-time school nurse who renders medical and first-aid services in the absence of the school physician.
                </Typography>
                <RenderList data={['Dental Care']} />

                <Typography variant='subtitle1' className={paragraph}>
                    Adjacent to the Medical Clinic is the Dental Clinic, which employs a dentist who is in charge of the dental services such as tooth extraction and oral prophylaxis of all students. Each student can avail of one treatment per semester (tooth extraction and oral prophylaxis).
                </Typography>
            </SharedLayout>
        </Grid>
    )
}

export default Clinic

import React from 'react';
import Grid from '@material-ui/core/Grid';
import clsx from  'clsx';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SharedLayout from '../../shared/others/sharedLayout';
import { menus } from '../../data/navlinks';
import { AboutUsBannerObj } from '../../data/banners';
import { images } from '../../data/images';
import { admins } from '../../data/administrators';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
    description: {
        margin: '1rem 0',
        padding: '0 1rem',
    },
    imageContainer: {
        maxHeight: '100%',
        width: '100%', 
    },
    image: {
        maxHeight: '100%',
        width: '100%',
        background: 'cover'
    },
    table: {
        minWidth: 650,
        [theme.breakpoints.only('xs')] : {
            minWidth: 300,
        }
    },
}));

const Administrators = () => {

    const { administrators } = images;

    const { president, vpaa, vpa, vpf } = administrators;

    const {bold, paragraph, description, imageContainer, image, table} = useStyles();

    const renderAdministrator = (title, name, job, img) => {
        return (
            <Grid container className={paragraph}>
                <Grid item md={4} className={imageContainer}>
                    <img src={img.img} alt={img.alt} className={image}/>
                </Grid>
                <Grid item md={8} className={description}>
                <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                    {title}
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                   {name}
                </Typography>
                <Typography variant='subtitle1' align='justify' className={paragraph}>
                   {job}
                </Typography>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container>
            <SharedLayout data={menus.about_us.items} title='Administrators' banner={AboutUsBannerObj}>
                {
                    renderAdministrator('The president', 'REV. FR. NEILO M. CANTILADO, SVD', 'The president is the Chief Executive Office at the Divine Word College of Legazpi. He represents the college in conferences meetings and other social functions; and promotes good relations with educational associations, government agencies, faculty, students, employees and the general public. He sees to it that general policies stablished by the Board of Trustees are implemented, that all legal requirements are observed and that everything is done to attain the stated vision, mission, and goals of the College to promote the best interest of students and staff.', president)
                }
                {
                     renderAdministrator('The Vice President for Academic Affairs', 'DR. ROSE MARIE S. CLEMEÑA, RGC, RPsY', 'TThe Vice President for Academic Affairs is the executive officer of the college in academic matters. S/he is responsible for the development and enrichment of the academic life of the faculty members and the students of the whole institutions.', vpaa)
                }
                {
                     renderAdministrator('The Vice President for Administration', 'REV. FR RICARDO FRANCISCO C. MIRANDA, SVD', 'The Vice President for Administration is the executive officer of the College on Adminstration matters. He assists the President in the implementation of all policies and programs regarding the administrative aspects of the schools operations. he plans, organizes coordinates and implements the programs of the administrative units and concerned with the mission, goals and objectives of the institution and attends to the needs of the administrative and academic departments.', vpa)
                }
                {
                     renderAdministrator('The Vice President for Finance', 'REV. FR. PAULUS KARMANI, SVD', 'The Vice President for Finance assists the President in the implementation of all policies and programs regarding the financial aspect if the school operations. Among others, S/he handles requests of student for promissory notes bfore the designated examination dates and communicates with students, parents , and/ or guardians who fail to comply wit hthe agreements stipulated in the promissory notes. S/he signs admission slips for examinations , approves application on tuition fee discounts and/ or scholarship grants and issues statements of account and clearances of students at appropriate dates.', vpf)
                }
                <Typography variant='h6' color='primary' className={clsx(paragraph, bold)}>
                    SVD's
                </Typography>
                <TableContainer >
                <Table className={table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        admins.map(({title, name}) => (
                            <TableRow key={name}>
                            <TableCell align="left">{title}</TableCell>
                            <TableCell align="right">{name}</TableCell>
                            </TableRow>
                        ))
                    }
                    </TableBody>
                </Table>
                </TableContainer>
            </SharedLayout>
        </Grid>
    )
}

export default Administrators

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import RenderList from '../../shared/others/renderList';
import RenderTable from '../../shared/others/renderTable';

import { menus } from '../../data/navlinks';
import SharedLayout from '../../shared/others/sharedLayout';
import { StudentServicesBannerObj } from '../../data/banners';
import {
    objectives,
    programs,
    communities,
    members,
    coordinators
} from '../../data/studentServices/communityExtensionService';

const useStyles = makeStyles({
    bold: {
        fontWeight: 600
    },
    paragraph: {
        marginBottom: '1.5rem'
    },
});

const History = () => {

    const {bold, paragraph} = useStyles();

    return (
        <Grid container>
            <SharedLayout data={menus.student_services.items} title='Community Extension Service' banner={StudentServicesBannerObj}>
                <Typography variant='subtitle1' className={paragraph}>
                    The DWCL Community Extension Service was created to serve the marginalized sector of the society through building Basic Ecclesial Communities (BEC’s) and educating the DWCL personnel and students on Christian – oriented service. The DWCL CES programs are designed to cater to communities that have high needs for basic services. Those programs are geared toward holistic and sustainable developments of BEC’s. In addition, the DWCL CES aims to kindle the spirit of genuine service among DWCL personnel and students, for they are the force that will ensure the attainment of the office’s objectives. They are, therefore provided direct exposures to the adopted communities.
                </Typography>
                <Typography variant='subtitle1' className={paragraph}>
                    Through the Community Extension Service, the DWCL can make its program responsive to the needs of the people in the region that answers to the call and challenge for national developments.
                </Typography>

                {/* <RenderList header='CES OBJECTIVES' data={objectives} /> */}
                <RenderList header='PROGRAMS & SERVICES' data={programs} />
                {/* <RenderList header='Community Extention Service Adopted Communities:' data={communities} /> */}

                <RenderTable tableBody={members} size='small' header='CES COUNCIL MEMBERS S.Y 2017 — 2018' />
                <RenderTable tableBody={coordinators} size='small' header='CES Coordinators' />
            </SharedLayout>
        </Grid>
    )
}

export default History

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { UpdatesBannerObj } from '../../data/banners';
import { makeStyles } from '@material-ui/core/styles';
import Top from '../../shared/Top';
import Bottom from '../../shared/Bottom';
import Banner from '../../shared/Top/banner';
import RenderCalendar from '../../shared/others/renderCalendar';

const useStyles = makeStyles(theme => ({
    root: {
		width: '100%',
        height: 'auto',
        padding: '2rem'
    },
    calender: {
        height: '100%',
        padding: '2rem 4rem'
    }
}))

const Calendar = () => {

    const { root, calender } = useStyles();
 
    const { img, alt } = UpdatesBannerObj;

    return (
       <Grid>
            <Top />
            <Banner img={img} alt={alt} />
                <div className={calender}>
                    <RenderCalendar />
                </div>
            <Bottom />
       </Grid>
    )
}

export default Calendar

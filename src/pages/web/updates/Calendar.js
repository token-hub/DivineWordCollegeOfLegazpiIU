import React from 'react'
import {BaseWithBanner} from '../../../components/templates/web';
import {banners} from '../../../data/web';
import {Paragraph} from '../../../components/atoms/web';
import {RenderCalendar} from '../../../components/molecules/web';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    calendar: {
        Height: '100%',
        width: '100%',
    },
    root: {
		width: '100%',
        height: '100%',
        padding: '2rem'
    },
});

const Calendar = () => { 

    const {calendar, root} = useStyles();

    return (
        <BaseWithBanner root={root} banner={banners.UpdatesBannerObj}>
            <div className={calendar}>
                <RenderCalendar />
            </div>
        </BaseWithBanner>
    )
}

export default Calendar
